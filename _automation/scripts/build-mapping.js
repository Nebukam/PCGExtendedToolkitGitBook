#!/usr/bin/env node
/**
 * PCGEx Staging ↔ Node-Library ↔ Source Mapping
 *
 * Usage:
 *   node scripts/build-mapping.js                          # Build mapping.json
 *   node scripts/build-mapping.js audit                    # List staging files with no node-library counterpart
 *   node scripts/build-mapping.js check                    # List PCGExNodeLibraryDoc mismatches
 *   node scripts/build-mapping.js update-source            # Dry-run: show proposed .h changes
 *   node scripts/build-mapping.js update-source --write    # Actually write changes to .h files
 */

const fs = require('fs');
const path = require('path');

// ── Paths ────────────────────────────────────────────────────────────────────

const AUTOMATION_PATH = path.dirname(__dirname);
const DOCS_ROOT = path.dirname(AUTOMATION_PATH);
const STAGING_PATH = path.join(DOCS_ROOT, '_staging');
const LIBRARY_PATH = path.join(DOCS_ROOT, 'node-library');
const SOURCE_PATH = 'D:\\GIT\\PCGExWorkbench\\Plugins\\PCGExtendedToolkit\\Source';
const GITHUB_PREFIX = 'https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/';
const MAPPING_OUTPUT = path.join(AUTOMATION_PATH, 'mapping.json');

// ── Helpers ──────────────────────────────────────────────────────────────────

// Matches ](github-url) — works for both clickable badges and named links.
// Won't match the badge image URL since that's img.shields.io, not github.com.
const SOURCE_URL_RE = /\]\((https:\/\/github\.com\/Nebukam\/PCGExtendedToolkit\/blob\/main\/Source\/[^)]+)\)/;
const DOC_META_RE = /PCGExNodeLibraryDoc\s*=\s*"([^"]+)"/;

/**
 * Recursively collect all .md files under `dir`.
 * README.md files are included — in GitBook, pages with children become
 * directory/README.md and may be real node docs with source links.
 * Files without source links are filtered later during scanning.
 */
function collectMarkdownFiles(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...collectMarkdownFiles(full));
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            results.push(full);
        }
    }
    return results;
}

/**
 * Normalize a GitHub source URL to a relative .h path.
 *   - Strips the GitHub prefix
 *   - Converts Private/*.cpp → Public/*.h (HeuristicsHandler edge case)
 */
function normalizeSourcePath(githubUrl) {
    let rel = githubUrl.slice(GITHUB_PREFIX.length);
    // Fix .cpp → .h
    if (rel.endsWith('.cpp')) {
        rel = rel.replace('/Private/', '/Public/').replace(/\.cpp$/, '.h');
    }
    return rel;
}

/**
 * Scan a directory of .md files and return a Map<sourceRelative, mdRelativePath>.
 * `baseDir` is the directory being scanned (STAGING_PATH or LIBRARY_PATH).
 * Paths are stored relative to DOCS_ROOT.
 */
function scanDirectory(dir) {
    const map = new Map();
    const files = collectMarkdownFiles(dir);

    for (const filePath of files) {
        const content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(SOURCE_URL_RE);
        if (!match) continue;

        const sourceRel = normalizeSourcePath(match[1]);
        const mdRel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, '/');

        // First match wins (multiple staging docs can point to same source)
        if (!map.has(sourceRel)) {
            map.set(sourceRel, mdRel);
        }
    }
    return map;
}

/**
 * Read the PCGExNodeLibraryDoc value from a source .h file.
 * Returns the value string or null.
 */
function readDocMeta(sourceRelative) {
    const filePath = path.join(SOURCE_PATH, sourceRelative);
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(DOC_META_RE);
    return match ? match[1] : null;
}

/**
 * Compute the expected doc_path from a node-library file path.
 *   node-library/pathfinding/pathfinding-edges.md → "pathfinding/pathfinding-edges"
 *   node-library/clusters/refine/cluster-refine/README.md → "clusters/refine/cluster-refine"
 */
function computeDocPath(libraryRelPath) {
    // libraryRelPath is like "node-library/clusters/analyze/cluster-centrality.md"
    // or "node-library/clusters/refine/cluster-refine/README.md" (GitBook directory page)
    let rel = libraryRelPath.replace(/^node-library\//, '');
    // README.md inside a directory → the directory itself is the page
    rel = rel.replace(/\/README\.md$/, '').replace(/\.md$/, '');
    return rel;
}

/**
 * Strip leading slash for comparison (noise nodes use "/misc/noises/..." format).
 */
function normalizeMeta(value) {
    if (!value) return value;
    return value.replace(/^\//, '');
}

// ── Build Mapping ────────────────────────────────────────────────────────────

function buildMapping() {
    console.log('Scanning _staging ...');
    const stagingMap = scanDirectory(STAGING_PATH);
    console.log(`  Found ${stagingMap.size} staging files with source links`);

    console.log('Scanning node-library ...');
    const libraryMap = scanDirectory(LIBRARY_PATH);
    console.log(`  Found ${libraryMap.size} node-library files with source links`);

    // Collect all unique source paths
    const allSources = new Set([...stagingMap.keys(), ...libraryMap.keys()]);
    console.log(`  ${allSources.size} unique source paths`);

    const entries = [];
    const summary = {
        total_staging: stagingMap.size,
        total_library: libraryMap.size,
        matched: 0,
        staging_only: 0,
        library_only: 0,
        doc_meta_ok: 0,
        doc_meta_mismatch: 0,
        doc_meta_missing: 0,
    };

    for (const sourceRel of [...allSources].sort()) {
        const staging = stagingMap.get(sourceRel) || null;
        const nodeLib = libraryMap.get(sourceRel) || null;
        const docPath = nodeLib ? computeDocPath(nodeLib) : null;
        const currentMeta = readDocMeta(sourceRel);
        const normalizedMeta = normalizeMeta(currentMeta);
        const sourceDisk = path.join(SOURCE_PATH, sourceRel);

        let status;
        if (staging && nodeLib) {
            if (!currentMeta && docPath) {
                status = 'meta_missing';
                summary.doc_meta_missing++;
            } else if (docPath && normalizedMeta !== docPath) {
                status = 'meta_mismatch';
                summary.doc_meta_mismatch++;
            } else {
                status = 'ok';
                summary.doc_meta_ok++;
            }
            summary.matched++;
        } else if (staging && !nodeLib) {
            status = 'staging_only';
            summary.staging_only++;
        } else {
            status = 'library_only';
            summary.library_only++;
        }

        entries.push({
            source_relative: sourceRel,
            source_disk: sourceDisk,
            staging,
            node_library: nodeLib,
            doc_path: docPath,
            current_doc_meta: currentMeta,
            status,
        });
    }

    const mapping = {
        generated: new Date().toISOString(),
        entries,
        summary,
    };

    fs.writeFileSync(MAPPING_OUTPUT, JSON.stringify(mapping, null, 2));
    console.log(`\nMapping written to ${path.relative(DOCS_ROOT, MAPPING_OUTPUT)}`);
    printSummary(summary);
    return mapping;
}

function printSummary(s) {
    console.log('\n── Summary ──');
    console.log(`  Staging files:        ${s.total_staging}`);
    console.log(`  Node-library files:   ${s.total_library}`);
    console.log(`  Matched (both):       ${s.matched}`);
    console.log(`  Staging only:         ${s.staging_only}`);
    console.log(`  Library only:         ${s.library_only}`);
    console.log(`  Doc meta OK:          ${s.doc_meta_ok}`);
    console.log(`  Doc meta mismatch:    ${s.doc_meta_mismatch}`);
    console.log(`  Doc meta missing:     ${s.doc_meta_missing}`);
}

// ── Commands ─────────────────────────────────────────────────────────────────

function loadMapping() {
    if (!fs.existsSync(MAPPING_OUTPUT)) {
        console.error('mapping.json not found. Run: node scripts/build-mapping.js');
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(MAPPING_OUTPUT, 'utf8'));
}

function cmdAudit() {
    const mapping = loadMapping();
    const stagingOnly = mapping.entries.filter(e => e.status === 'staging_only');

    if (stagingOnly.length === 0) {
        console.log('All staging files have a node-library counterpart.');
        return;
    }

    // Group by module (first path segment of source_relative)
    const byModule = {};
    for (const entry of stagingOnly) {
        const module = entry.source_relative.split('/')[0];
        if (!byModule[module]) byModule[module] = [];
        byModule[module].push(entry);
    }

    console.log(`\n${stagingOnly.length} staging files with no node-library counterpart:\n`);
    for (const [module, entries] of Object.entries(byModule).sort()) {
        console.log(`  ${module} (${entries.length})`);
        for (const e of entries) {
            console.log(`    ${e.staging}`);
        }
    }
}

function cmdCheck() {
    const mapping = loadMapping();
    const problems = mapping.entries.filter(
        e => e.status === 'meta_mismatch' || e.status === 'meta_missing'
    );

    if (problems.length === 0) {
        console.log('All PCGExNodeLibraryDoc values match.');
        return;
    }

    console.log(`\n${problems.length} PCGExNodeLibraryDoc issues:\n`);
    for (const e of problems) {
        if (e.status === 'meta_missing') {
            console.log(`  MISSING  ${e.source_relative}`);
            console.log(`           expected: "${e.doc_path}"`);
        } else {
            console.log(`  MISMATCH ${e.source_relative}`);
            console.log(`           current:  "${e.current_doc_meta}"`);
            console.log(`           expected: "${e.doc_path}"`);
        }
        console.log();
    }
}

function cmdUpdateSource(writeMode) {
    const mapping = loadMapping();
    const problems = mapping.entries.filter(
        e => (e.status === 'meta_mismatch' || e.status === 'meta_missing') && e.doc_path
    );

    if (problems.length === 0) {
        console.log('Nothing to update.');
        return;
    }

    console.log(writeMode ? '\nWriting changes:\n' : '\nDry run (use --write to apply):\n');

    let updated = 0;
    for (const e of problems) {
        const filePath = e.source_disk;
        if (!fs.existsSync(filePath)) {
            console.log(`  SKIP (file not found): ${e.source_relative}`);
            continue;
        }

        const content = fs.readFileSync(filePath, 'utf8');

        let newContent;
        if (e.current_doc_meta) {
            // Replace existing value
            const escaped = e.current_doc_meta.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(`(PCGExNodeLibraryDoc\\s*=\\s*")${escaped}(")`);
            if (!re.test(content)) {
                console.log(`  SKIP (pattern not found): ${e.source_relative}`);
                continue;
            }
            newContent = content.replace(re, `$1${e.doc_path}$2`);
        } else {
            // Meta missing — need to add it. Find the UCLASS meta= section.
            // This is more complex; skip for now and report.
            console.log(`  SKIP (meta missing, manual add needed): ${e.source_relative}`);
            console.log(`         expected: PCGExNodeLibraryDoc="${e.doc_path}"`);
            continue;
        }

        if (writeMode) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`  UPDATED ${e.source_relative}`);
            console.log(`          "${e.current_doc_meta}" → "${e.doc_path}"`);
        } else {
            console.log(`  WOULD UPDATE ${e.source_relative}`);
            console.log(`               "${e.current_doc_meta}" → "${e.doc_path}"`);
        }
        updated++;
    }

    console.log(`\n${updated} file(s) ${writeMode ? 'updated' : 'would be updated'}.`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const command = args[0] || 'build';

switch (command) {
    case 'build':
        buildMapping();
        break;
    case 'audit':
        cmdAudit();
        break;
    case 'check':
        cmdCheck();
        break;
    case 'update-source':
        cmdUpdateSource(args.includes('--write'));
        break;
    default:
        console.log('Usage:');
        console.log('  node scripts/build-mapping.js                          Build mapping.json');
        console.log('  node scripts/build-mapping.js audit                    List unmapped staging files');
        console.log('  node scripts/build-mapping.js check                    List doc meta mismatches');
        console.log('  node scripts/build-mapping.js update-source            Dry-run source updates');
        console.log('  node scripts/build-mapping.js update-source --write    Apply source updates');
        process.exit(1);
}
