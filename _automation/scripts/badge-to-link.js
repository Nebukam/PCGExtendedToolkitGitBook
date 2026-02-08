#!/usr/bin/env node
/**
 * Make shields.io badges clickable by wrapping them in a source link.
 *
 * Replaces:
 *   ![Static Badge](badge-url)  ·  [Source](github-url)
 * With:
 *   [![Static Badge](badge-url)](github-url)
 *
 * Only touches single-source footers (the "  ·  [Source](...)" pattern).
 * Multi-source footers (with "| Source: [Name](...) · ...") are left as-is.
 *
 * Usage:
 *   node scripts/badge-to-link.js              # Dry-run
 *   node scripts/badge-to-link.js --write      # Apply changes
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

// ── Pattern ──────────────────────────────────────────────────────────────────

// Matches: ![Static Badge](badge-url)  ·  [Source](github-url)
// Captures: $1 = badge-url, $2 = github-url
const SINGLE_SOURCE_RE = /!\[Static Badge\]\((https:\/\/img\.shields\.io\/badge\/Source-[^)]+)\)\s+·\s+\[Source\]\((https:\/\/github\.com\/[^)]+)\)/;

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

for (const dir of SCAN_DIRS) {
    const files = collectMarkdownFiles(dir);

    for (const filePath of files) {
        const content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(SINGLE_SOURCE_RE);

        if (!match) {
            skipped++;
            continue;
        }

        const newContent = content.replace(
            SINGLE_SOURCE_RE,
            '[![Static Badge]($1)]($2)'
        );

        const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, '/');

        if (writeMode) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`  UPDATED  ${rel}`);
        } else {
            console.log(`  WOULD UPDATE  ${rel}`);
        }
        changed++;
    }
}

console.log(`\n── Summary ──`);
console.log(`  Files ${writeMode ? 'updated' : 'would update'}: ${changed}`);
console.log(`  Files skipped: ${skipped}`);

if (!writeMode && changed > 0) {
    console.log(`\nDry run complete. Use --write to apply.`);
}
