#!/usr/bin/env node
/**
 * Add 
<!-- SOURCE: url --> metadata comments below badge footer lines.
 *
 * Finds lines containing a shields.io badge, extracts all GitHub source URLs
 * from the same line, and inserts one 
<!-- SOURCE: url --> comment per URL
 * on the line immediately after the badge.
 *
 * Skips files that already have a 
<!-- SOURCE: ... --> comment.
 *
 * Usage:
 *   node scripts/add-source-meta.js              # Dry-run: show what would change
 *   node scripts/add-source-meta.js --write      # Apply changes
 */

const fs = require('fs');
const path = require('path');

// ── Paths ────────────────────────────────────────────────────────────────────

const AUTOMATION_PATH = path.dirname(__dirname);
const DOCS_ROOT = path.dirname(AUTOMATION_PATH);
const SCAN_DIRS = [
    path.join(DOCS_ROOT, '_staging'),
    path.join(DOCS_ROOT, 'node-library'),
];

// ── Patterns ─────────────────────────────────────────────────────────────────

const BADGE_RE = /!\[Static Badge\]\(https:\/\/img\.shields\.io\/badge\/Source-/;
const GITHUB_URL_RE = /https:\/\/github\.com\/Nebukam\/PCGExtendedToolkit\/blob\/main\/Source\/[^)\s]+/g;
const ALREADY_HAS_META = /<!-- SOURCE:/;

// ── Helpers ──────────────────────────────────────────────────────────────────

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

// ── Main ─────────────────────────────────────────────────────────────────────

const writeMode = process.argv.includes('--write');
let changed = 0;
let skipped = 0;
let alreadyDone = 0;
let totalUrls = 0;

for (const dir of SCAN_DIRS) {
    const files = collectMarkdownFiles(dir);

    for (const filePath of files) {
        const content = fs.readFileSync(filePath, 'utf8');
        const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, '/');

        // Skip files without a badge
        if (!BADGE_RE.test(content)) {
            skipped++;
            continue;
        }

        // Skip files that already have SOURCE meta
        if (ALREADY_HAS_META.test(content)) {
            alreadyDone++;
            continue;
        }

        const lines = content.split('\n');
        const newLines = [];
        let fileChanged = false;

        for (const line of lines) {
            newLines.push(line);

            if (BADGE_RE.test(line)) {
                const urls = line.match(GITHUB_URL_RE);
                if (urls && urls.length > 0) {
                    for (const url of urls) {
                        newLines.push(`
<!-- SOURCE: ${url} -->`);
                        totalUrls++;
                    }
                    fileChanged = true;
                }
            }
        }

        if (!fileChanged) {
            skipped++;
            continue;
        }

        if (writeMode) {
            fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
            console.log(`  UPDATED  ${rel}`);
        } else {
            console.log(`  WOULD UPDATE  ${rel}`);
        }
        changed++;
    }
}

console.log(`\n── Summary ──`);
console.log(`  Files ${writeMode ? 'updated' : 'would update'}: ${changed}`);
console.log(`  Files skipped (no badge):    ${skipped}`);
console.log(`  Files already have meta:     ${alreadyDone}`);
console.log(`  Source URLs added:           ${totalUrls}`);

if (!writeMode && changed > 0) {
    console.log(`\nDry run complete. Use --write to apply.`);
}
