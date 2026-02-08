#!/usr/bin/env node
/**
 * Replace **Module**: `NAME` with shields.io badge in documentation footers.
 *
 * Usage:
 *   node scripts/replace-module-badges.js              # Dry-run: show what would change
 *   node scripts/replace-module-badges.js --write      # Apply changes
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

// Matches: **Module**: `NAME`
// Captures NAME so we can build the badge URL.
const MODULE_RE = /\*\*Module\*\*: `([^`]+)`/;

function makeBadge(moduleName) {
    return `![Static Badge](https://img.shields.io/badge/Source-${moduleName}-473F69)`;
}

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
const modules = new Set();
let changed = 0;
let skipped = 0;

for (const dir of SCAN_DIRS) {
    const files = collectMarkdownFiles(dir);

    for (const filePath of files) {
        const content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(MODULE_RE);
        if (!match) {
            skipped++;
            continue;
        }

        const moduleName = match[1];
        modules.add(moduleName);

        const badge = makeBadge(moduleName);
        const newContent = content.replace(MODULE_RE, badge);

        const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, '/');

        if (writeMode) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`  UPDATED  ${rel}  (${moduleName})`);
        } else {
            console.log(`  WOULD UPDATE  ${rel}  (${moduleName})`);
        }
        changed++;
    }
}

console.log(`\n── Summary ──`);
console.log(`  Files ${writeMode ? 'updated' : 'would update'}: ${changed}`);
console.log(`  Files skipped (no match):  ${skipped}`);
console.log(`  Unique modules: ${modules.size}`);
console.log(`  Modules: ${[...modules].sort().join(', ')}`);

if (!writeMode && changed > 0) {
    console.log(`\nDry run complete. Use --write to apply.`);
}
