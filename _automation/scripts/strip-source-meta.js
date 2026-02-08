#!/usr/bin/env node
/**
 * Remove <!-- SOURCE: url --> metadata comments from documentation files.
 *
 * Usage:
 *   node scripts/strip-source-meta.js              # Dry-run
 *   node scripts/strip-source-meta.js --write      # Apply changes
 */

const fs = require('fs');
const path = require('path');

const AUTOMATION_PATH = path.dirname(__dirname);
const DOCS_ROOT = path.dirname(AUTOMATION_PATH);
const SCAN_DIRS = [
    path.join(DOCS_ROOT, '_staging'),
    path.join(DOCS_ROOT, 'node-library'),
];

const SOURCE_META_RE = /^<!-- SOURCE: https:\/\/github\.com\/.*-->\n?/gm;

function collectMarkdownFiles(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) results.push(...collectMarkdownFiles(full));
        else if (entry.isFile() && entry.name.endsWith('.md')) results.push(full);
    }
    return results;
}

const writeMode = process.argv.includes('--write');
let changed = 0;
let skipped = 0;

for (const dir of SCAN_DIRS) {
    for (const filePath of collectMarkdownFiles(dir)) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (!SOURCE_META_RE.test(content)) { skipped++; continue; }

        SOURCE_META_RE.lastIndex = 0;
        const newContent = content.replace(SOURCE_META_RE, '');
        const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, '/');

        if (writeMode) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`  STRIPPED  ${rel}`);
        } else {
            console.log(`  WOULD STRIP  ${rel}`);
        }
        changed++;
    }
}

console.log(`\n── Summary ──`);
console.log(`  Files ${writeMode ? 'stripped' : 'would strip'}: ${changed}`);
console.log(`  Files skipped: ${skipped}`);
if (!writeMode && changed > 0) console.log(`\nDry run. Use --write to apply.`);
