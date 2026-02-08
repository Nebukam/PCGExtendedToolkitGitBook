/**
 * Get complete context for documenting a PCGEx element
 *
 * Usage:
 *   node get-context.js <search term>           # Search for a class
 *   node get-context.js --file <path.h>         # Get context for a specific file
 *   node get-context.js --list providers        # List all providers
 *   node get-context.js --list consumers        # List all consumers
 *   node get-context.js --list instanced        # List all instanced factories
 */

const fs = require('fs');
const path = require('path');

const SOURCE_PATH = 'D:\\GIT\\PCGExWorkbench\\Plugins\\PCGExtendedToolkit\\Source';
const INDEX_PATH = 'D:\\GIT\\PCGExtendedToolkitGitBook\\_automation\\index';

// Load summary indexes
const classIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_class-index.json'), 'utf8'));
const structIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_struct-index.json'), 'utf8'));
const enumIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_enum-index.json'), 'utf8'));
const classification = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_classification.json'), 'utf8'));
const inheritance = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_inheritance.json'), 'utf8'));

/**
 * Load file data from index
 */
function loadFileData(relativePath) {
    const jsonPath = path.join(INDEX_PATH, relativePath.replace('.h', '.json'));
    if (fs.existsSync(jsonPath)) {
        return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    }
    return null;
}

/**
 * Find class by search term
 */
function findClass(searchTerm) {
    const searchLower = searchTerm.toLowerCase();

    // Exact match first
    if (classIndex[searchTerm]) {
        return { name: searchTerm, ...classIndex[searchTerm] };
    }

    // Search by name or display name
    for (const [name, data] of Object.entries(classIndex)) {
        if (name.toLowerCase().includes(searchLower) ||
            (data.display_name && data.display_name.toLowerCase().includes(searchLower))) {
            return { name, ...data };
        }
    }

    return null;
}

/**
 * Get struct definition from its file
 */
function getStructDefinition(structName) {
    const structInfo = structIndex[structName];
    if (!structInfo) return null;

    const fileData = loadFileData(structInfo.file);
    if (!fileData) return null;

    return fileData.structs.find(s => s.name === structName);
}

/**
 * Get enum definition from its file
 */
function getEnumDefinition(enumName) {
    const enumInfo = enumIndex[enumName];
    if (!enumInfo) return null;

    const fileData = loadFileData(enumInfo.file);
    if (!fileData) return null;

    return fileData.enums.find(e => e.name === enumName);
}

/**
 * Get implementations of a base class
 */
function getImplementations(baseName) {
    const children = inheritance[baseName] || [];
    const implementations = [];

    for (const child of children) {
        const childInfo = classIndex[child];
        if (childInfo) {
            // If abstract, recurse
            if (childInfo.type === 'unknown' || classification.abstract_bases.includes(child)) {
                implementations.push(...getImplementations(child));
            } else {
                implementations.push({ name: child, ...childInfo });
            }
        }
    }

    return implementations;
}

/**
 * Resolve all nested types used by properties
 */
function resolveNestedTypes(properties) {
    const types = new Set();

    for (const prop of properties) {
        // Extract type name
        let typeName = prop.type.replace(/TArray<|TObjectPtr<|>|\s|\*/g, '');

        if (typeName.startsWith('FPCGEx') || typeName.startsWith('EPCGEx')) {
            types.add(typeName);
        }
    }

    return Array.from(types);
}

/**
 * Build documentation context for a class
 */
function buildClassContext(className) {
    const classInfo = classIndex[className];
    if (!classInfo) return null;

    const fileData = loadFileData(classInfo.file);
    if (!fileData) return null;

    const classData = fileData.classes.find(c => c.name === className);
    if (!classData) return null;

    const context = [];

    // Header
    context.push(`# Documentation Context: ${classData.display_name || className}`);
    context.push('');

    // Classification
    context.push('## Classification');
    context.push(`- **Type**: ${classData.classification.type}`);
    context.push(`- **Class**: ${className}`);
    context.push(`- **Base Class**: ${classData.base_class}`);
    context.push(`- **Module**: ${fileData.module}`);
    context.push(`- **File**: ${fileData.path}`);
    if (classData.classification.is_provider) context.push('- **Role**: Provider (outputs factory)');
    if (classData.classification.is_consumer) context.push('- **Role**: Consumer (accepts factory pins)');
    if (classData.classification.is_instanced_factory) context.push('- **Role**: Instanced Factory');
    if (classData.classification.is_factory_data) context.push('- **Role**: Factory Data');
    context.push('');

    // Description
    if (classData.description) {
        context.push('## Description');
        context.push(classData.description);
        context.push('');
    }

    // Instanced Properties (for consumers)
    const instancedProps = classData.uproperties.filter(p => p.instanced);
    if (instancedProps.length > 0) {
        context.push('## Instanced Factories (inline sub-nodes)');
        context.push('');
        for (const prop of instancedProps) {
            const baseType = prop.type.replace(/TObjectPtr<|>/g, '');
            context.push(`### ${prop.display_name}`);
            context.push(`- **Property**: ${prop.name}`);
            context.push(`- **Base Type**: ${baseType}`);

            // Find implementations
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
    if (classData.consumed_factories.length > 0) {
        context.push('## Consumed Factory Pins');
        context.push('');
        for (const cf of classData.consumed_factories) {
            context.push(`- **${cf.label}** → Type: ${cf.type_info}`);
        }
        context.push('');
    }

    // Consumed Filter Pins
    if (classData.consumed_filters.length > 0) {
        context.push('## Consumed Filter Pins');
        context.push('');
        for (const cf of classData.consumed_filters) {
            context.push(`- ${cf}`);
        }
        context.push('');
    }

    // Input/Output Pins
    if (classData.inputs.length > 0 || classData.outputs.length > 0) {
        context.push('## Pins');
        context.push(`- **Inputs**: ${classData.inputs.join(', ') || '(inherited)'}`);
        context.push(`- **Outputs**: ${classData.outputs.join(', ') || '(inherited)'}`);
        context.push('');
    }

    // Own Properties (not inherited)
    context.push('## Own Properties');
    context.push('');
    context.push('| Name | Type | Default | Category | ⚡ | Condition |');
    context.push('|------|------|---------|----------|---|-----------|');
    for (const prop of classData.uproperties) {
        if (prop.instanced) continue; // Skip instanced, documented above
        const ovr = prop.overridable ? '⚡' : '';
        const cond = prop.edit_condition ? prop.edit_condition.substring(0, 30) : '';
        context.push(`| ${prop.display_name} | \`${prop.type}\` | \`${prop.default || ''}\` | ${prop.category || ''} | ${ovr} | ${cond} |`);
    }
    context.push('');

    // Resolve and document nested types
    const nestedTypes = resolveNestedTypes(classData.all_properties || classData.uproperties);
    if (nestedTypes.length > 0) {
        context.push('## Nested Type Definitions');
        context.push('');

        for (const typeName of nestedTypes) {
            if (typeName.startsWith('EPCGEx')) {
                const enumDef = getEnumDefinition(typeName);
                if (enumDef) {
                    context.push(`### ${typeName} (enum)`);
                    context.push('');
                    context.push('| Value | Display Name |');
                    context.push('|-------|--------------|');
                    for (const val of enumDef.values) {
                        context.push(`| ${val.name} | ${val.display_name} |`);
                    }
                    context.push('');
                }
            } else if (typeName.startsWith('FPCGEx')) {
                const structDef = getStructDefinition(typeName);
                if (structDef) {
                    context.push(`### ${typeName} (struct${structDef.is_config ? ' - CONFIG' : ''})`);
                    if (structDef.base_class) {
                        context.push(`Inherits from: ${structDef.base_class}`);
                    }
                    context.push('');
                    context.push('| Property | Type | Default | ⚡ |');
                    context.push('|----------|------|---------|---|');
                    for (const prop of structDef.uproperties) {
                        const ovr = prop.overridable ? '⚡' : '';
                        context.push(`| ${prop.display_name} | \`${prop.type}\` | \`${prop.default || ''}\` | ${ovr} |`);
                    }
                    context.push('');
                }
            }
        }
    }

    // Source file content
    const sourcePath = path.join(SOURCE_PATH, fileData.path);
    if (fs.existsSync(sourcePath)) {
        context.push('## Source Header');
        context.push('');
        context.push('```cpp');
        context.push(fs.readFileSync(sourcePath, 'utf8'));
        context.push('```');
        context.push('');
    }

    // CPP file if exists
    const cppPath = sourcePath.replace('/Public/', '/Private/').replace('.h', '.cpp');
    if (fs.existsSync(cppPath)) {
        context.push('## Source Implementation');
        context.push('');
        context.push('```cpp');
        context.push(fs.readFileSync(cppPath, 'utf8'));
        context.push('```');
        context.push('');
    }

    return context.join('\n');
}

/**
 * List classes by type
 */
function listByType(type) {
    let list = [];

    switch (type) {
        case 'providers':
            list = classification.providers;
            break;
        case 'consumers':
            list = classification.consumers;
            break;
        case 'instanced':
            list = classification.instanced_factories;
            break;
        case 'factories':
            list = classification.factory_data;
            break;
        case 'nodes':
            list = classification.node_settings;
            break;
        case 'abstract':
            list = classification.abstract_bases;
            break;
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
            if (info.display_name && info.display_name !== name) {
                console.log(`  Display: ${info.display_name}`);
            }
        }
    }
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Usage:');
    console.log('  node get-context-v2.js <search term>           # Get context for a class');
    console.log('  node get-context-v2.js --file <path.h>         # Get context for file');
    console.log('  node get-context-v2.js --list <type>           # List classes by type');
    console.log('');
    console.log('Types: providers, consumers, instanced, factories, nodes, abstract');
    console.log('');
    console.log('Examples:');
    console.log('  node get-context-v2.js Bevel');
    console.log('  node get-context-v2.js "Pathfinding : Edges"');
    console.log('  node get-context-v2.js --list consumers');
    process.exit(0);
}

if (args[0] === '--list') {
    listByType(args[1] || 'providers');
} else if (args[0] === '--file') {
    const filePath = args[1];
    const fileData = loadFileData(filePath);
    if (fileData) {
        console.log(JSON.stringify(fileData, null, 2));
    } else {
        console.log(`File not found in index: ${filePath}`);
    }
} else {
    const searchTerm = args.join(' ');
    const found = findClass(searchTerm);

    if (found) {
        const context = buildClassContext(found.name);
        if (context) {
            console.log(context);
        } else {
            console.log(`Could not build context for: ${found.name}`);
        }
    } else {
        console.log(`Class not found: ${searchTerm}`);
        console.log('');
        console.log('Possible matches:');
        const searchLower = searchTerm.toLowerCase();
        const matches = Object.entries(classIndex)
            .filter(([k, v]) =>
                k.toLowerCase().includes(searchLower) ||
                (v.display_name && v.display_name.toLowerCase().includes(searchLower))
            )
            .slice(0, 10);
        for (const [k, v] of matches) {
            console.log(`  ${k}: ${v.display_name || '(no display name)'}`);
        }
    }
}
