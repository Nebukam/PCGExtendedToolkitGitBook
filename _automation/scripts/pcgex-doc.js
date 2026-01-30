#!/usr/bin/env node
/**
 * PCGEx Documentation CLI
 *
 * Usage:
 *   node pcgex-doc.js context <search>         # Get documentation context
 *   node pcgex-doc.js list <type>              # List classes by type
 *   node pcgex-doc.js queue add <search>       # Add to documentation queue
 *   node pcgex-doc.js queue list               # Show queue status
 *   node pcgex-doc.js queue next               # Get next item to document
 *   node pcgex-doc.js queue done <class>       # Mark as documented
 *   node pcgex-doc.js output <class>           # Get output path for a class
 *   node pcgex-doc.js reindex                  # Rebuild the index
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const AUTOMATION_PATH = path.dirname(__dirname);
const INDEX_PATH = path.join(AUTOMATION_PATH, 'index');
const QUEUE_PATH = path.join(AUTOMATION_PATH, 'queue.json');
const SOURCE_PATH = 'D:\\GIT\\PCGExWorkbench\\Plugins\\PCGExtendedToolkit\\Source';
const DOCS_PATH = 'D:\\GIT\\PCGExtendedToolkitGitBook';
const STAGING_PATH = path.join(DOCS_PATH, '_staging');

// Load indexes
let classIndex, structIndex, enumIndex, classification, inheritance;

function loadIndexes() {
    try {
        classIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_class-index.json'), 'utf8'));
        structIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_struct-index.json'), 'utf8'));
        enumIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_enum-index.json'), 'utf8'));
        classification = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_classification.json'), 'utf8'));
        inheritance = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_inheritance.json'), 'utf8'));
        return true;
    } catch (e) {
        console.error('Index not found. Run: node pcgex-doc.js reindex');
        return false;
    }
}

// Queue management
function loadQueue() {
    if (fs.existsSync(QUEUE_PATH)) {
        return JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8'));
    }
    return { pending: [], in_progress: null, completed: [], skipped: [] };
}

function saveQueue(queue) {
    fs.writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2));
}

// Find class by search term (improved to match display names)
function findClass(searchTerm) {
    const searchLower = searchTerm.toLowerCase().trim();

    // Exact class name match
    if (classIndex[searchTerm]) {
        return { name: searchTerm, ...classIndex[searchTerm] };
    }

    // Search by display name (exact)
    for (const [name, data] of Object.entries(classIndex)) {
        if (data.display_name && data.display_name.toLowerCase() === searchLower) {
            return { name, ...data };
        }
    }

    // Search by partial match in name or display name
    for (const [name, data] of Object.entries(classIndex)) {
        if (name.toLowerCase().includes(searchLower) ||
            (data.display_name && data.display_name.toLowerCase().includes(searchLower))) {
            return { name, ...data };
        }
    }

    return null;
}

// Find all matching classes
function findAllMatching(searchTerm) {
    const searchLower = searchTerm.toLowerCase().trim();
    const matches = [];

    for (const [name, data] of Object.entries(classIndex)) {
        if (name.toLowerCase().includes(searchLower) ||
            (data.display_name && data.display_name.toLowerCase().includes(searchLower))) {
            matches.push({ name, ...data });
        }
    }

    return matches;
}

// Load file data from index
function loadFileData(relativePath) {
    const jsonPath = path.join(INDEX_PATH, relativePath.replace('.h', '.json'));
    if (fs.existsSync(jsonPath)) {
        return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    }
    return null;
}

// Get struct definition with inheritance chain
function getStructWithInheritance(structName, visited = new Set()) {
    if (visited.has(structName)) return null;
    visited.add(structName);

    const structInfo = structIndex[structName];
    if (!structInfo) return null;

    const fileData = loadFileData(structInfo.file);
    if (!fileData) return null;

    const structDef = fileData.structs.find(s => s.name === structName);
    if (!structDef) return null;

    // Get base class properties
    let allProperties = [...(structDef.uproperties || [])];
    if (structDef.base_class && structDef.base_class.startsWith('FPCGEx')) {
        const baseStruct = getStructWithInheritance(structDef.base_class, visited);
        if (baseStruct) {
            allProperties = [...baseStruct.all_properties, ...allProperties];
        }
    }

    return {
        ...structDef,
        all_properties: allProperties
    };
}

// Get enum definition
function getEnumDefinition(enumName) {
    const enumInfo = enumIndex[enumName];
    if (!enumInfo) return null;

    const fileData = loadFileData(enumInfo.file);
    if (!fileData) return null;

    return fileData.enums.find(e => e.name === enumName);
}

// Get implementations of a base class
function getImplementations(baseName) {
    const children = inheritance[baseName] || [];
    const implementations = [];

    for (const child of children) {
        const childInfo = classIndex[child];
        if (childInfo) {
            if (childInfo.type === 'unknown' || classification.abstract_bases.includes(child)) {
                implementations.push(...getImplementations(child));
            } else {
                implementations.push({ name: child, ...childInfo });
            }
        }
    }

    return implementations;
}

// Extract doc path from source
function extractDocPath(headerContent) {
    const match = headerContent.match(/PCGExNodeLibraryDoc="([^"]+)"/);
    return match ? match[1] : null;
}

// Get staging output path for a class
// Maps: PCGExElementsPathfinding/Public/Elements/PCGExPathfindingEdges.h
// To:   _staging/PCGExElementsPathfinding/Elements/PCGExPathfindingEdges.md
function getStagingPath(className) {
    const classInfo = classIndex[className];
    if (!classInfo) return null;

    // Source path: Module/Public/Category/File.h
    const sourcePath = classInfo.file;

    // Remove /Public/ or /Private/ from path
    const withoutAccess = sourcePath.replace(/\/(Public|Private)\//, '/');

    // Change extension to .md
    const mdPath = withoutAccess.replace('.h', '.md');

    return path.join(STAGING_PATH, mdPath);
}

// Ensure directory exists
function ensureDir(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Build full context for a class
function buildContext(className) {
    const classInfo = classIndex[className];
    if (!classInfo) return null;

    const fileData = loadFileData(classInfo.file);
    if (!fileData) return null;

    const classData = fileData.classes.find(c => c.name === className);
    if (!classData) return null;

    // Read source files
    const headerPath = path.join(SOURCE_PATH, fileData.path);
    const cppPath = headerPath.replace('/Public/', '/Private/').replace('.h', '.cpp');

    let headerContent = '';
    let cppContent = '';

    if (fs.existsSync(headerPath)) {
        headerContent = fs.readFileSync(headerPath, 'utf8');
    }
    if (fs.existsSync(cppPath)) {
        cppContent = fs.readFileSync(cppPath, 'utf8');
    }

    // Extract doc path and staging path
    const docPath = extractDocPath(headerContent);
    const stagingPath = getStagingPath(className);

    const context = [];

    // Header
    context.push(`# Documentation Context: ${classData.display_name || className}`);
    context.push('');

    // Classification
    context.push('## Classification');
    context.push(`- **Type**: ${classData.classification?.type || 'unknown'}`);
    context.push(`- **Class**: ${className}`);
    context.push(`- **Base Class**: ${classData.base_class}`);
    context.push(`- **Module**: ${fileData.module}`);
    context.push(`- **Source File**: ${fileData.path}`);
    context.push(`- **Output Path**: ${stagingPath}`);
    if (docPath) context.push(`- **Doc Path**: ${docPath}`);
    if (classData.classification?.is_provider) context.push('- **Role**: Provider (outputs factory)');
    if (classData.classification?.is_consumer) context.push('- **Role**: Consumer (accepts factory pins)');
    if (classData.classification?.is_instanced_factory) context.push('- **Role**: Instanced Factory');
    context.push('');

    // Description
    if (classData.description) {
        context.push('## Description');
        context.push(classData.description);
        context.push('');
    }

    // Instanced Properties
    const instancedProps = (classData.uproperties || []).filter(p => p.instanced);
    if (instancedProps.length > 0) {
        context.push('## Instanced Factories (inline sub-nodes)');
        context.push('');
        for (const prop of instancedProps) {
            const baseType = prop.type.replace(/TObjectPtr<|>/g, '');
            context.push(`### ${prop.display_name || prop.name}`);
            context.push(`- **Property**: ${prop.name}`);
            context.push(`- **Base Type**: ${baseType}`);

            const implementations = getImplementations(baseType);
            if (implementations.length > 0) {
                context.push('- **Available Options**:');
                for (const impl of implementations) {
                    context.push(`  - ${impl.name} (${impl.display_name || 'no display name'})`);
                }
            }
            context.push('');
        }
    }

    // Consumed Factory Pins
    if (classData.consumed_factories?.length > 0) {
        context.push('## Consumed Factory Pins');
        context.push('');
        for (const cf of classData.consumed_factories) {
            context.push(`- **${cf.label}** → Type: ${cf.type_info}`);
        }
        context.push('');
    }

    // Input/Output Pins
    if (classData.inputs?.length > 0 || classData.outputs?.length > 0) {
        context.push('## Pins');
        context.push(`- **Inputs**: ${classData.inputs?.join(', ') || '(inherited)'}`);
        context.push(`- **Outputs**: ${classData.outputs?.join(', ') || '(inherited)'}`);
        context.push('');
    }

    // Own Properties
    context.push('## Own Properties');
    context.push('');
    context.push('| Name | Type | Default | Category | ⚡ | Condition |');
    context.push('|------|------|---------|----------|---|-----------|');
    for (const prop of (classData.uproperties || [])) {
        if (prop.instanced) continue;
        const ovr = prop.overridable ? '⚡' : '';
        const cond = prop.edit_condition ? prop.edit_condition.substring(0, 30) : '';
        context.push(`| ${prop.display_name || prop.name} | \`${prop.type}\` | \`${prop.default || ''}\` | ${prop.category || ''} | ${ovr} | ${cond} |`);
    }
    context.push('');

    // Resolve nested types (structs and enums used by properties)
    const nestedTypes = new Set();
    for (const prop of (classData.all_properties || classData.uproperties || [])) {
        const typeName = prop.type.replace(/TArray<|TObjectPtr<|>|\s|\*/g, '');
        if (typeName.startsWith('FPCGEx') || typeName.startsWith('EPCGEx')) {
            nestedTypes.add(typeName);
        }
    }

    if (nestedTypes.size > 0) {
        context.push('## Nested Type Definitions');
        context.push('');

        for (const typeName of nestedTypes) {
            if (typeName.startsWith('EPCGEx')) {
                const enumDef = getEnumDefinition(typeName);
                if (enumDef && enumDef.values) {
                    context.push(`### ${typeName} (enum)`);
                    context.push('');
                    context.push('| Value | Description |');
                    context.push('|-------|-------------|');
                    for (const val of enumDef.values) {
                        // Skip garbage values
                        if (val.name && !val.name.includes(' ') && val.name.length < 50) {
                            context.push(`| ${val.name} | ${val.display_name || ''} |`);
                        }
                    }
                    context.push('');
                }
            } else if (typeName.startsWith('FPCGEx')) {
                const structDef = getStructWithInheritance(typeName);
                if (structDef) {
                    context.push(`### ${typeName} (struct${structDef.is_config ? ' - CONFIG' : ''})`);
                    if (structDef.base_class) {
                        context.push(`Inherits from: ${structDef.base_class}`);
                    }
                    context.push('');
                    context.push('| Property | Type | Default | ⚡ |');
                    context.push('|----------|------|---------|---|');
                    for (const prop of (structDef.all_properties || [])) {
                        const ovr = prop.overridable ? '⚡' : '';
                        context.push(`| ${prop.display_name || prop.name} | \`${prop.type}\` | \`${prop.default || ''}\` | ${ovr} |`);
                    }
                    context.push('');
                }
            }
        }
    }

    // Source files
    if (headerContent) {
        context.push('## Source Header');
        context.push('');
        context.push('```cpp');
        context.push(headerContent);
        context.push('```');
        context.push('');
    }

    if (cppContent) {
        context.push('## Source Implementation');
        context.push('');
        context.push('```cpp');
        context.push(cppContent);
        context.push('```');
        context.push('');
    }

    return context.join('\n');
}

// List classes by type
function listByType(type) {
    let list = [];

    switch (type) {
        case 'providers': list = classification.providers; break;
        case 'consumers': list = classification.consumers; break;
        case 'instanced': list = classification.instanced_factories; break;
        case 'factories': list = classification.factory_data; break;
        case 'nodes': list = classification.node_settings; break;
        case 'abstract': list = classification.abstract_bases; break;
        default:
            console.log('Unknown type. Available: providers, consumers, instanced, factories, nodes, abstract');
            return;
    }

    console.log(`=== ${type.toUpperCase()} (${list.length}) ===`);
    console.log('');
    for (const name of list.sort()) {
        const info = classIndex[name];
        if (info) {
            console.log(`${name}`);
            console.log(`  File: ${info.file}`);
            if (info.display_name) console.log(`  Display: ${info.display_name}`);
        }
    }
}

// Commands
const commands = {
    context(args) {
        if (!loadIndexes()) return;

        const searchTerm = args.join(' ');
        if (!searchTerm) {
            console.log('Usage: node pcgex-doc.js context <search term>');
            return;
        }

        const found = findClass(searchTerm);
        if (found) {
            const context = buildContext(found.name);
            if (context) {
                console.log(context);
            } else {
                console.log(`Could not build context for: ${found.name}`);
            }
        } else {
            console.log(`Class not found: ${searchTerm}`);
            console.log('');
            const matches = findAllMatching(searchTerm).slice(0, 10);
            if (matches.length > 0) {
                console.log('Possible matches:');
                for (const m of matches) {
                    console.log(`  ${m.name}: ${m.display_name || '(no display name)'}`);
                }
            }
        }
    },

    list(args) {
        if (!loadIndexes()) return;
        listByType(args[0] || 'providers');
    },

    output(args) {
        if (!loadIndexes()) return;

        const searchTerm = args.join(' ');
        if (!searchTerm) {
            console.log('Usage: node pcgex-doc.js output <search term>');
            return;
        }

        const found = findClass(searchTerm);
        if (found) {
            const stagingPath = getStagingPath(found.name);
            console.log(stagingPath);
        } else {
            console.log(`Class not found: ${searchTerm}`);
        }
    },

    queue(args) {
        const subcommand = args[0];
        const queue = loadQueue();

        switch (subcommand) {
            case 'add': {
                if (!loadIndexes()) return;
                const searchTerm = args.slice(1).join(' ');
                const matches = findAllMatching(searchTerm);

                if (matches.length === 0) {
                    console.log(`No matches for: ${searchTerm}`);
                    return;
                }

                let added = 0;
                for (const match of matches) {
                    if (!queue.pending.includes(match.name) &&
                        !queue.completed.includes(match.name) &&
                        queue.in_progress !== match.name) {
                        queue.pending.push(match.name);
                        added++;
                        console.log(`Added: ${match.name} (${match.display_name || ''})`);
                    }
                }

                saveQueue(queue);
                console.log(`\nAdded ${added} items. Queue: ${queue.pending.length} pending`);
                break;
            }

            case 'list': {
                console.log('=== Documentation Queue ===\n');

                if (queue.in_progress) {
                    console.log(`IN PROGRESS: ${queue.in_progress}`);
                    console.log('');
                }

                console.log(`PENDING (${queue.pending.length}):`);
                for (const item of queue.pending.slice(0, 20)) {
                    const info = classIndex?.[item];
                    console.log(`  - ${item}${info?.display_name ? ` (${info.display_name})` : ''}`);
                }
                if (queue.pending.length > 20) {
                    console.log(`  ... and ${queue.pending.length - 20} more`);
                }

                console.log(`\nCOMPLETED: ${queue.completed.length}`);
                console.log(`SKIPPED: ${queue.skipped.length}`);
                break;
            }

            case 'next': {
                if (queue.in_progress) {
                    console.log(`Already in progress: ${queue.in_progress}`);
                    console.log('Use "queue done" or "queue skip" first.');
                    return;
                }

                if (queue.pending.length === 0) {
                    console.log('Queue is empty!');
                    return;
                }

                const next = queue.pending.shift();
                queue.in_progress = next;
                saveQueue(queue);

                console.log(`Started: ${next}`);
                console.log('');

                // Output context
                if (loadIndexes()) {
                    const context = buildContext(next);
                    if (context) console.log(context);
                }
                break;
            }

            case 'done': {
                const className = args[1] || queue.in_progress;
                if (!className) {
                    console.log('No item in progress and no class specified.');
                    return;
                }

                if (queue.in_progress === className) {
                    queue.in_progress = null;
                }
                queue.pending = queue.pending.filter(x => x !== className);
                if (!queue.completed.includes(className)) {
                    queue.completed.push(className);
                }

                saveQueue(queue);
                console.log(`Marked complete: ${className}`);
                console.log(`Queue: ${queue.pending.length} pending, ${queue.completed.length} completed`);
                break;
            }

            case 'skip': {
                const className = args[1] || queue.in_progress;
                if (!className) {
                    console.log('No item in progress and no class specified.');
                    return;
                }

                if (queue.in_progress === className) {
                    queue.in_progress = null;
                }
                queue.pending = queue.pending.filter(x => x !== className);
                if (!queue.skipped.includes(className)) {
                    queue.skipped.push(className);
                }

                saveQueue(queue);
                console.log(`Skipped: ${className}`);
                break;
            }

            case 'clear': {
                saveQueue({ pending: [], in_progress: null, completed: [], skipped: [] });
                console.log('Queue cleared.');
                break;
            }

            default:
                console.log('Queue commands: add, list, next, done, skip, clear');
        }
    },

    reindex() {
        console.log('Rebuilding index...');
        try {
            execSync('node index-generator.js', {
                cwd: path.join(AUTOMATION_PATH, 'scripts'),
                stdio: 'inherit'
            });
        } catch (e) {
            console.error('Reindex failed:', e.message);
        }
    },

    help() {
        console.log(`
PCGEx Documentation CLI

Commands:
  context <search>      Get full documentation context for a class
  output <search>       Get staging output path for a class
  list <type>           List classes (providers|consumers|instanced|factories|nodes)
  queue add <search>    Add matching classes to documentation queue
  queue list            Show queue status
  queue next            Start next item and show context
  queue done [class]    Mark item as documented
  queue skip [class]    Skip item
  queue clear           Clear the queue
  reindex               Rebuild the source index

Output Path Convention:
  Source: PCGExModule/Public/Category/File.h
  Output: _staging/PCGExModule/Category/File.md

Examples:
  node pcgex-doc.js context "Heuristics : Steepness"
  node pcgex-doc.js output "Pathfinding : Edges"
  node pcgex-doc.js list providers
  node pcgex-doc.js queue add Heuristic
  node pcgex-doc.js queue next
  node pcgex-doc.js queue done
`);
    }
};

// Main
const args = process.argv.slice(2);
const command = args[0] || 'help';

if (commands[command]) {
    commands[command](args.slice(1));
} else {
    console.log(`Unknown command: ${command}`);
    commands.help();
}
