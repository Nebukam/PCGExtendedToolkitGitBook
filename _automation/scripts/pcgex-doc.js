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
const SOURCES_CONFIG = path.join(AUTOMATION_PATH, 'sources.json');
const DOCS_PATH = 'D:\\GIT\\PCGExtendedToolkitGitBook';
const STAGING_PATH = path.join(DOCS_PATH, '_staging');

// Load source paths from config
let SOURCE_PATHS;
if (fs.existsSync(SOURCES_CONFIG)) {
    SOURCE_PATHS = JSON.parse(fs.readFileSync(SOURCES_CONFIG, 'utf8')).sources;
} else {
    SOURCE_PATHS = ['D:\\GIT\\PCGExWorkbench\\Plugins\\PCGExtendedToolkit\\Source'];
}

// Resolve a relative source file path to its absolute location across all source roots
function resolveSourceFile(relativePath) {
    for (const sourcePath of SOURCE_PATHS) {
        const full = path.join(sourcePath, relativePath);
        if (fs.existsSync(full)) return full;
    }
    return null;
}

// Load indexes
let classIndex, structIndex, enumIndex, classification, inheritance, sharedStructs, structUsage;

function loadIndexes() {
    try {
        classIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_class-index.json'), 'utf8'));
        structIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_struct-index.json'), 'utf8'));
        enumIndex = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_enum-index.json'), 'utf8'));
        classification = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_classification.json'), 'utf8'));
        inheritance = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_inheritance.json'), 'utf8'));

        // Load shared struct info (optional - may not exist in older indexes)
        try {
            sharedStructs = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_shared-structs.json'), 'utf8'));
            structUsage = JSON.parse(fs.readFileSync(path.join(INDEX_PATH, '_struct-usage.json'), 'utf8'));
        } catch (e) {
            sharedStructs = [];
            structUsage = {};
        }

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
            matches.push({ name, ...data, itemType: 'class' });
        }
    }

    return matches;
}

// Find all matching shared structs that should be documented separately
function findAllMatchingStructs(searchTerm) {
    const searchLower = searchTerm.toLowerCase().trim();
    const matches = [];

    for (const [name, data] of Object.entries(structIndex)) {
        // Only include shared structs that get their own pages (not document_with)
        const usage = structUsage ? structUsage[name] : null;
        if (!usage || !usage.is_shared) continue;

        // Skip structs that are documented inline with a parent
        if (usage.document_with) continue;

        // Skip "Shorthand" utility structs (constant vs attribute input wrappers)
        if (name.includes('Shorthand')) continue;

        if (name.toLowerCase().includes(searchLower)) {
            matches.push({
                name,
                ...data,
                itemType: 'struct',
                user_facing_count: usage.user_facing_count,
                usage_count: usage.usage_count
            });
        }
    }

    return matches;
}

// Find all matching items (classes and shared structs)
function findAllMatchingItems(searchTerm) {
    const classes = findAllMatching(searchTerm);
    const structs = findAllMatchingStructs(searchTerm);
    return [...classes, ...structs];
}

// Check if an item is a struct (vs class)
function isStructItem(itemName) {
    return itemName.startsWith('FPCGEx') && structIndex[itemName] && structUsage?.[itemName]?.is_shared;
}

// Check if a struct should be documented separately (not inline with parent)
// Returns true if struct gets its own page, false if it's documented with a parent
function shouldDocumentSeparately(structName) {
    const usage = structUsage?.[structName];
    if (!usage) return false;

    // Must be shared AND not have document_with set
    return usage.is_shared && !usage.document_with;
}

// Get where a struct will be documented (its own path, or parent's path)
function getStructDocLocation(structName) {
    const usage = structUsage?.[structName];
    if (!usage) return null;

    if (usage.document_with) {
        // Documented inline with parent
        if (usage.document_with_type === 'struct') {
            return {
                type: 'inline_with_struct',
                parent: usage.document_with,
                path: getStructStagingPath(usage.document_with)
            };
        } else {
            return {
                type: 'inline_with_class',
                parent: usage.document_with,
                path: getStagingPath(usage.document_with)
            };
        }
    } else if (usage.is_shared) {
        // Gets its own page
        return {
            type: 'separate',
            parent: null,
            path: getStructStagingPath(structName)
        };
    }

    return null;
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
// Provider + Factory + Operation classes in the same file = single user-facing entity
// They all map to the same output file (one doc page per header file)
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

// Get all classes that share the same output file (Provider + Factory + Operation pattern)
function getRelatedClasses(className) {
    const classInfo = classIndex[className];
    if (!classInfo) return [className];

    const sourcePath = classInfo.file;
    return Object.entries(classIndex)
        .filter(([name, info]) => info.file === sourcePath)
        .map(([name]) => name);
}

// Check if a class is the "primary" class for its file (the one we should queue)
// For Provider + Factory patterns, prefer the Provider (Settings class)
function isPrimaryClassForFile(className) {
    const related = getRelatedClasses(className);
    if (related.length === 1) return true;

    // If there's a Settings/Provider class, that's the primary
    const settingsClass = related.find(c => c.endsWith('Settings'));
    if (settingsClass) return className === settingsClass;

    // Otherwise, prefer provider type over factory type
    const classInfo = classIndex[className];
    if (classInfo?.classification?.type === 'provider') return true;

    // If no provider, check if this is the only non-factory
    const nonFactories = related.filter(c => {
        const info = classIndex[c];
        return info?.classification?.type !== 'factory_data';
    });
    if (nonFactories.length === 1 && nonFactories[0] === className) return true;

    // Default: first alphabetically
    return related.sort()[0] === className;
}

// Get staging output path for a struct
function getStructStagingPath(structName) {
    const structInfo = structIndex[structName];
    if (!structInfo) return null;

    const sourcePath = structInfo.file;
    const withoutAccess = sourcePath.replace(/\/(Public|Private)\//, '/');

    // Put structs in a _structs subfolder to distinguish from class docs
    const parts = withoutAccess.split('/');
    const module = parts[0];
    const rest = parts.slice(1).join('/');

    const mdPath = `${module}/_structs/${rest.replace('.h', '')}/${structName}.md`;

    return path.join(STAGING_PATH, mdPath);
}

// Ensure directory exists
function ensureDir(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Build full context for a shared struct
function buildStructContext(structName) {
    const structInfo = structIndex[structName];
    if (!structInfo) return null;

    const structDef = getStructWithInheritance(structName);
    if (!structDef) return null;

    const usage = structUsage ? structUsage[structName] : null;

    const context = [];

    // Get output path
    const stagingPath = getStructStagingPath(structName);

    // Header
    context.push(`# ${structName}`);
    context.push('');
    context.push(`**Type:** Shared Struct${structInfo.is_config ? ' (Config)' : ''}`);
    context.push(`**Source:** \`${structInfo.file}\``);
    context.push(`**Output Path:** \`${stagingPath}\``);
    if (structDef.base_class) {
        context.push(`**Inherits:** ${structDef.base_class}`);
    }
    context.push('');

    // Usage info
    if (usage) {
        context.push('## Usage');
        context.push('');
        const userFacingCount = usage.user_facing_count || usage.usage_count;
        const originCount = usage.user_facing_origin_count || usage.origin_count;
        context.push(`This struct is used by **${userFacingCount}** user-facing classes across **${originCount}** different class hierarchies.`);
        if (usage.usage_count !== userFacingCount) {
            context.push(`*(Total references including internal classes: ${usage.usage_count})*`);
        }
        context.push('');

        // Show user-facing origins first (most relevant)
        const userFacingOrigins = usage.user_facing_origins || [];
        if (userFacingOrigins.length > 0) {
            context.push('### Primary Users (User-Facing)');
            context.push('');
            for (const user of userFacingOrigins.slice(0, 15)) {
                const userInfo = classIndex[user] || structIndex[user];
                if (userInfo) {
                    context.push(`- ${user}${userInfo.display_name ? ` (${userInfo.display_name})` : ''}`);
                } else {
                    context.push(`- ${user}`);
                }
            }
            if (userFacingOrigins.length > 15) {
                context.push(`- ... and ${userFacingOrigins.length - 15} more`);
            }
            context.push('');
        }

        // Show example usage patterns from a few primary users
        if (userFacingOrigins.length > 0) {
            context.push('### Example Usage Patterns');
            context.push('');
            context.push('How this struct is used by primary classes:');
            context.push('');

            // Sample up to 3 user-facing classes to show usage patterns
            const samplesToShow = userFacingOrigins.slice(0, 3);
            for (const userName of samplesToShow) {
                const userClassInfo = classIndex[userName];
                if (!userClassInfo) continue;

                const userFileData = loadFileData(userClassInfo.file);
                if (!userFileData) continue;

                // Find the class and look for properties that use this struct
                const userClass = userFileData.classes.find(c => c.name === userName);
                if (!userClass) continue;

                // Find the property that references this struct
                const structProps = (userClass.uproperties || []).filter(p =>
                    p.type === structName ||
                    p.type.includes(structName)
                );

                if (structProps.length > 0) {
                    const displayName = userClassInfo.display_name || userName;
                    context.push(`**${displayName}** (\`${userName}\`):`);
                    for (const prop of structProps) {
                        const propLabel = prop.display_name || prop.name;
                        const condition = prop.edit_condition ? ` *(when ${prop.edit_condition})*` : '';
                        const showInner = prop.show_only_inner ? ' [ShowOnlyInnerProperties]' : '';
                        context.push(`- Property: \`${prop.name}\` as \`${propLabel}\`${showInner}${condition}`);
                    }
                    context.push('');
                }
            }
        }

        // Show other users if different from user-facing list
        const otherUsers = usage.used_by.filter(u => !userFacingOrigins.includes(u));
        if (otherUsers.length > 0 && userFacingOrigins.length > 0) {
            context.push('### Other References');
            context.push('');
            for (const user of otherUsers.slice(0, 10)) {
                const userInfo = classIndex[user] || structIndex[user];
                if (userInfo) {
                    context.push(`- ${user}${userInfo.display_name ? ` (${userInfo.display_name})` : ''}`);
                } else {
                    context.push(`- ${user}`);
                }
            }
            if (otherUsers.length > 10) {
                context.push(`- ... and ${otherUsers.length - 10} more`);
            }
            context.push('');
        } else if (userFacingOrigins.length === 0) {
            // No user-facing origins, show used_by instead
            context.push('### Used By');
            context.push('');
            for (const user of usage.used_by.slice(0, 20)) {
                const userInfo = classIndex[user] || structIndex[user];
                if (userInfo) {
                    context.push(`- ${user}${userInfo.display_name ? ` (${userInfo.display_name})` : ''}`);
                } else {
                    context.push(`- ${user}`);
                }
            }
            if (usage.used_by.length > 20) {
                context.push(`- ... and ${usage.used_by.length - 20} more`);
            }
            context.push('');
        }
    }

    // Properties
    context.push('## Properties');
    context.push('');
    context.push('| Property | Type | Default | ⚡ | Description |');
    context.push('|----------|------|---------|---|-------------|');

    for (const prop of (structDef.all_properties || [])) {
        const ovr = prop.overridable ? '⚡' : '';
        const desc = prop.edit_condition ? `Condition: ${prop.edit_condition}` : '';
        context.push(`| ${prop.display_name || prop.name} | \`${prop.type}\` | \`${prop.default || ''}\` | ${ovr} | ${desc} |`);
    }
    context.push('');

    // Nested types used by this struct (from properties)
    const nestedTypes = new Set();
    for (const prop of (structDef.all_properties || [])) {
        const typeName = prop.type.replace(/TArray<|TObjectPtr<|>|\s|\*/g, '');
        if ((typeName.startsWith('FPCGEx') || typeName.startsWith('EPCGEx')) && typeName !== structName) {
            nestedTypes.add(typeName);
        }
    }

    // Also find structs that have document_with pointing to this struct
    const documentedHereStructs = [];
    if (structUsage) {
        for (const [otherStructName, otherUsage] of Object.entries(structUsage)) {
            if (otherUsage.document_with === structName && otherUsage.document_with_type === 'struct') {
                documentedHereStructs.push(otherStructName);
                nestedTypes.add(otherStructName); // Include in nested types set
            }
        }
    }

    if (nestedTypes.size > 0) {
        context.push('## Nested Types');
        context.push('');

        for (const typeName of nestedTypes) {
            if (typeName.startsWith('EPCGEx')) {
                const enumDef = getEnumDefinition(typeName);
                if (enumDef && enumDef.values) {
                    context.push(`### ${typeName} (enum)`);
                    context.push('');
                    context.push('| Value | Display Name |');
                    context.push('|-------|--------------|');
                    for (const val of enumDef.values) {
                        if (val.name && !val.name.includes(' ') && val.name.length < 50) {
                            context.push(`| ${val.name} | ${val.display_name || ''} |`);
                        }
                    }
                    context.push('');
                }
            } else if (typeName.startsWith('FPCGEx')) {
                const nestedUsage = structUsage ? structUsage[typeName] : null;

                // Check routing: is_shared, document_with elsewhere, or inline here
                if (nestedUsage && nestedUsage.is_shared) {
                    // Shared structs have their own dedicated documentation page
                    context.push(`### ${typeName}`);
                    context.push('');
                    context.push(`*Shared struct - see dedicated documentation page*`);
                    context.push('');
                } else if (nestedUsage && nestedUsage.document_with && nestedUsage.document_with !== structName) {
                    // Documented with a different class/struct
                    const typeLabel = nestedUsage.document_with_type === 'struct' ? 'shared struct' : 'class';
                    context.push(`### ${typeName}`);
                    context.push('');
                    context.push(`*Documented with ${typeLabel} \`${nestedUsage.document_with}\`*`);
                    context.push('');
                } else {
                    // Inline this struct (either document_with points here, or no routing)
                    const nestedDef = getStructWithInheritance(typeName);
                    if (nestedDef) {
                        const isDocHere = documentedHereStructs.includes(typeName);
                        context.push(`### ${typeName} (struct${isDocHere ? ' - nested' : ''})`);
                        context.push('');
                        context.push('| Property | Type | Default |');
                        context.push('|----------|------|---------|');
                        for (const prop of (nestedDef.all_properties || [])) {
                            context.push(`| ${prop.display_name || prop.name} | \`${prop.type}\` | \`${prop.default || ''}\` |`);
                        }
                        context.push('');
                    }
                }
            }
        }
    }

    // Read source to include the actual struct definition
    const headerPath = resolveSourceFile(structInfo.file);
    if (headerPath) {
        const headerContent = fs.readFileSync(headerPath, 'utf8');

        // Try to extract just this struct's definition
        const structRegex = new RegExp(`USTRUCT[^}]*struct[^{]*${structName}[^{]*\\{[^}]+\\}`, 's');
        const structMatch = headerContent.match(structRegex);

        context.push('## Source Definition');
        context.push('');
        context.push('```cpp');
        if (structMatch) {
            context.push(structMatch[0]);
        } else {
            context.push(`// See: ${structInfo.file}`);
        }
        context.push('```');
        context.push('');
    }

    return context.join('\n');
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
    const headerPath = resolveSourceFile(fileData.path);
    const cppRelative = fileData.path.replace('/Public/', '/Private/').replace('.h', '.cpp');
    const cppPath = resolveSourceFile(cppRelative);

    let headerContent = '';
    let cppContent = '';

    if (headerPath) {
        headerContent = fs.readFileSync(headerPath, 'utf8');
    }
    if (cppPath) {
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

    // Related classes in same file (Provider + Factory + Operation pattern)
    const relatedClasses = getRelatedClasses(className);
    if (relatedClasses.length > 1) {
        context.push(`- **Related Classes**: ${relatedClasses.filter(c => c !== className).join(', ')}`);
    }
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
        // Categorize types: shared (own page), documented elsewhere, or inline here
        const sharedRefs = [];           // is_shared=true -> own dedicated page
        const documentedElsewhereRefs = []; // document_with points to a different class
        const inlineTypes = [];          // should be inlined in this class's documentation

        for (const typeName of nestedTypes) {
            if (typeName.startsWith('FPCGEx')) {
                const usage = structUsage ? structUsage[typeName] : null;
                if (usage && usage.is_shared) {
                    // Shared structs have their own dedicated documentation page
                    sharedRefs.push(typeName);
                } else if (usage && usage.document_with) {
                    // Check if documented with a different class
                    if (usage.document_with !== className) {
                        documentedElsewhereRefs.push({
                            name: typeName,
                            documentWith: usage.document_with,
                            documentWithType: usage.document_with_type || 'class'
                        });
                    } else {
                        // Documented with this class - inline it
                        inlineTypes.push(typeName);
                    }
                } else {
                    // No routing info - inline it
                    inlineTypes.push(typeName);
                }
            } else {
                // Enums always inline
                inlineTypes.push(typeName);
            }
        }

        // Reference shared structs (documented on their own page)
        if (sharedRefs.length > 0) {
            context.push('## Shared Type References');
            context.push('');
            context.push('The following types are shared across multiple nodes and have dedicated documentation:');
            context.push('');
            for (const typeName of sharedRefs) {
                const structInfo = structIndex[typeName];
                const usage = structUsage[typeName];
                context.push(`- **${typeName}** - Used by ${usage.user_facing_count || usage.usage_count} user-facing classes across ${usage.user_facing_origin_count || usage.origin_count} hierarchies`);
            }
            context.push('');
        }

        // Reference types documented elsewhere (with another class or shared struct)
        if (documentedElsewhereRefs.length > 0) {
            context.push('## Types Documented Elsewhere');
            context.push('');
            context.push('The following types are documented with their primary defining class/struct:');
            context.push('');
            for (const ref of documentedElsewhereRefs) {
                const typeLabel = ref.documentWithType === 'struct' ? 'shared struct' : 'class';
                context.push(`- **${ref.name}** - See documentation for ${typeLabel} \`${ref.documentWith}\``);
            }
            context.push('');
        }

        // Inline types that belong to this class's documentation
        if (inlineTypes.length > 0) {
            context.push('## Nested Type Definitions');
            context.push('');

            for (const typeName of inlineTypes) {
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
    }

    // Related classes (Factory + Operation) in same file
    if (relatedClasses.length > 1) {
        context.push('## Related Classes');
        context.push('');
        context.push('This file contains multiple related classes that form a single user-facing entity:');
        context.push('');

        for (const relatedName of relatedClasses) {
            if (relatedName === className) continue; // Skip the primary class we already documented

            const relatedData = fileData.classes.find(c => c.name === relatedName);
            if (!relatedData) continue;

            const relatedInfo = classIndex[relatedName];
            context.push(`### ${relatedName}`);
            context.push(`- **Type**: ${relatedData.classification?.type || 'unknown'}`);
            context.push(`- **Base Class**: ${relatedData.base_class}`);
            if (relatedData.display_name) context.push(`- **Display Name**: ${relatedData.display_name}`);
            if (relatedData.classification?.is_instanced_factory) context.push('- **Role**: Instanced Factory');
            context.push('');

            // Show properties if any
            const relatedProps = (relatedData.uproperties || []).filter(p => !p.instanced);
            if (relatedProps.length > 0) {
                context.push('**Properties:**');
                context.push('');
                context.push('| Property | Type | Default | ⚡ |');
                context.push('|----------|------|---------|---|');
                for (const prop of relatedProps) {
                    const ovr = prop.overridable ? '⚡' : '';
                    context.push(`| ${prop.display_name || prop.name} | \`${prop.type}\` | \`${prop.default || ''}\` | ${ovr} |`);
                }
                context.push('');
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
    let isStructType = false;

    switch (type) {
        case 'providers': list = classification.providers; break;
        case 'consumers': list = classification.consumers; break;
        case 'instanced': list = classification.instanced_factories; break;
        case 'factories': list = classification.factory_data; break;
        case 'nodes': list = classification.node_settings; break;
        case 'abstract': list = classification.abstract_bases; break;
        case 'shared-structs':
            list = sharedStructs.map(s => s.name);
            isStructType = true;
            break;
        default:
            console.log('Unknown type. Available: providers, consumers, instanced, factories, nodes, abstract, shared-structs');
            return;
    }

    console.log(`=== ${type.toUpperCase()} (${list.length}) ===`);
    console.log('');

    if (isStructType) {
        for (const name of list) {
            const info = structIndex[name];
            const usage = structUsage ? structUsage[name] : null;
            if (info) {
                console.log(`${name}`);
                console.log(`  File: ${info.file}`);
                if (usage) {
                    const userFacingCount = usage.user_facing_count || usage.usage_count;
                    const originCount = usage.user_facing_origin_count || usage.origin_count;
                    console.log(`  User-facing: ${userFacingCount} classes across ${originCount} hierarchies`);
                    if (usage.usage_count !== userFacingCount) {
                        console.log(`  Total refs: ${usage.usage_count} classes across ${usage.origin_count} hierarchies`);
                    }
                }
            }
        }
    } else {
        for (const name of list.sort()) {
            const info = classIndex[name];
            if (info) {
                console.log(`${name}`);
                console.log(`  File: ${info.file}`);
                if (info.display_name) console.log(`  Display: ${info.display_name}`);
            }
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

        // Try class first
        const found = findClass(searchTerm);
        if (found) {
            const context = buildContext(found.name);
            if (context) {
                console.log(context);
            } else {
                console.log(`Could not build context for: ${found.name}`);
            }
            return;
        }

        // Try struct
        const structName = Object.keys(structIndex).find(name =>
            name.toLowerCase() === searchTerm.toLowerCase() ||
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (structName && structIndex[structName]) {
            const context = buildStructContext(structName);
            if (context) {
                console.log(context);
            } else {
                console.log(`Could not build context for struct: ${structName}`);
            }
            return;
        }

        console.log(`Class or struct not found: ${searchTerm}`);
        console.log('');
        const matches = findAllMatching(searchTerm).slice(0, 10);
        if (matches.length > 0) {
            console.log('Possible matches:');
            for (const m of matches) {
                console.log(`  ${m.name}: ${m.display_name || '(no display name)'}`);
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

        // Try class first
        const found = findClass(searchTerm);
        if (found) {
            const stagingPath = getStagingPath(found.name);
            console.log(stagingPath);
            return;
        }

        // Try struct
        const structName = Object.keys(structIndex).find(name =>
            name.toLowerCase() === searchTerm.toLowerCase() ||
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (structName && structIndex[structName]) {
            const stagingPath = getStructStagingPath(structName);
            console.log(stagingPath);
            return;
        }

        console.log(`Class or struct not found: ${searchTerm}`);
    },

    queue(args) {
        const subcommand = args[0];
        const queue = loadQueue();

        switch (subcommand) {
            case 'add': {
                if (!loadIndexes()) return;
                const searchTerm = args.slice(1).join(' ');
                const matches = findAllMatchingItems(searchTerm);

                if (matches.length === 0) {
                    console.log(`No matches for: ${searchTerm}`);
                    return;
                }

                let addedClasses = 0;
                let addedStructs = 0;
                let skippedExisting = 0;
                let skippedRelated = 0;
                for (const match of matches) {
                    const isStruct = match.itemType === 'struct';

                    // For classes, skip non-primary classes (they're documented with their primary)
                    if (!isStruct && !isPrimaryClassForFile(match.name)) {
                        const related = getRelatedClasses(match.name);
                        const primary = related.find(c => isPrimaryClassForFile(c));
                        skippedRelated++;
                        console.log(`Skipped (documented with ${primary}): ${match.name}`);
                        continue;
                    }

                    // Skip if already in queue or completed
                    if (queue.pending.includes(match.name) ||
                        queue.completed.includes(match.name) ||
                        queue.in_progress === match.name) {
                        continue;
                    }

                    // Skip if output file already exists
                    const outputPath = isStruct ? getStructStagingPath(match.name) : getStagingPath(match.name);
                    if (outputPath && fs.existsSync(outputPath)) {
                        skippedExisting++;
                        console.log(`Skipped (doc exists): ${match.name}`);
                        continue;
                    }

                    queue.pending.push(match.name);
                    if (isStruct) {
                        addedStructs++;
                        console.log(`Added struct: ${match.name} (used by ${match.user_facing_count} user-facing classes)`);
                    } else {
                        addedClasses++;
                        const related = getRelatedClasses(match.name);
                        const relatedInfo = related.length > 1 ? ` [+${related.length - 1} related]` : '';
                        console.log(`Added class: ${match.name} (${match.display_name || ''})${relatedInfo}`);
                    }
                }

                saveQueue(queue);
                const totalAdded = addedClasses + addedStructs;
                console.log(`\nAdded ${totalAdded} items (${addedClasses} classes, ${addedStructs} structs). Queue: ${queue.pending.length} pending`);
                if (skippedExisting > 0) {
                    console.log(`Skipped ${skippedExisting} items (docs already exist)`);
                }
                break;
            }

            case 'list': {
                if (!loadIndexes()) return;
                console.log('=== Documentation Queue ===\n');

                if (queue.in_progress) {
                    const isStruct = isStructItem(queue.in_progress);
                    const typeLabel = isStruct ? '[struct]' : '[class]';
                    console.log(`IN PROGRESS: ${queue.in_progress} ${typeLabel}`);
                    console.log('');
                }

                console.log(`PENDING (${queue.pending.length}):`);
                for (const item of queue.pending.slice(0, 20)) {
                    const isStruct = isStructItem(item);
                    if (isStruct) {
                        const usage = structUsage?.[item];
                        const usageInfo = usage ? `(used by ${usage.user_facing_count} classes)` : '';
                        console.log(`  - [struct] ${item} ${usageInfo}`);
                    } else {
                        const info = classIndex?.[item];
                        console.log(`  - [class] ${item}${info?.display_name ? ` (${info.display_name})` : ''}`);
                    }
                }
                if (queue.pending.length > 20) {
                    console.log(`  ... and ${queue.pending.length - 20} more`);
                }

                console.log(`\nCOMPLETED: ${queue.completed.length}`);
                console.log(`SKIPPED: ${queue.skipped.length}`);
                break;
            }

            case 'next': {
                if (!loadIndexes()) return;

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

                const isStruct = isStructItem(next);
                console.log(`Started: ${next} [${isStruct ? 'struct' : 'class'}]`);
                console.log('');

                // Output context (different builders for classes vs structs)
                const context = isStruct ? buildStructContext(next) : buildContext(next);
                if (context) console.log(context);
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

            case 'prune': {
                if (!loadIndexes()) return;
                const before = queue.pending.length;
                let pruned = 0;
                let prunedInline = 0;

                queue.pending = queue.pending.filter(itemName => {
                    const isStruct = isStructItem(itemName);

                    if (isStruct) {
                        // Check if this struct should be documented inline with parent
                        const docLocation = getStructDocLocation(itemName);
                        if (docLocation && docLocation.type !== 'separate') {
                            // This struct is documented inline - remove from queue
                            console.log(`Pruned (documented inline with ${docLocation.parent}): [struct] ${itemName}`);
                            prunedInline++;
                            return false;
                        }

                        // Check if separate doc exists
                        const outputPath = getStructStagingPath(itemName);
                        if (outputPath && fs.existsSync(outputPath)) {
                            console.log(`Pruned (doc exists): [struct] ${itemName}`);
                            pruned++;
                            return false;
                        }
                    } else {
                        // Check if this class is non-primary (documented with another class)
                        if (!isPrimaryClassForFile(itemName)) {
                            const related = getRelatedClasses(itemName);
                            const primary = related.find(c => isPrimaryClassForFile(c));
                            console.log(`Pruned (documented with ${primary}): [class] ${itemName}`);
                            prunedInline++;
                            return false;
                        }

                        const outputPath = getStagingPath(itemName);
                        if (outputPath && fs.existsSync(outputPath)) {
                            const info = classIndex[itemName];
                            console.log(`Pruned (doc exists): [class] ${itemName}${info?.display_name ? ` (${info.display_name})` : ''}`);
                            pruned++;
                            return false;
                        }
                    }
                    return true;
                });

                saveQueue(queue);
                const totalPruned = pruned + prunedInline;
                console.log(`\nPruned ${totalPruned} items (${pruned} docs exist, ${prunedInline} inline). Queue: ${queue.pending.length} pending (was ${before})`);
                break;
            }

            case 'add-type': {
                if (!loadIndexes()) return;
                const type = args[1];

                let list = [];
                let isStructType = false;
                switch (type) {
                    case 'providers': list = classification.providers; break;
                    case 'consumers': list = classification.consumers; break;
                    case 'instanced': list = classification.instanced_factories; break;
                    case 'factories': list = classification.factory_data; break;
                    case 'nodes': list = classification.node_settings; break;
                    case 'shared-structs':
                        // Only include shared structs that get their own pages (not document_with)
                        list = sharedStructs
                            .filter(s => !structUsage?.[s.name]?.document_with)
                            .map(s => s.name);
                        isStructType = true;
                        break;
                    default:
                        console.log('Unknown type. Available: providers, consumers, instanced, factories, nodes, shared-structs');
                        return;
                }

                let added = 0;
                let skippedExisting = 0;
                for (const itemName of list) {
                    // Skip if already in queue or completed
                    if (queue.pending.includes(itemName) ||
                        queue.completed.includes(itemName) ||
                        queue.in_progress === itemName) {
                        continue;
                    }

                    // Skip if output file already exists
                    const outputPath = isStructType ? getStructStagingPath(itemName) : getStagingPath(itemName);
                    if (outputPath && fs.existsSync(outputPath)) {
                        skippedExisting++;
                        continue;
                    }

                    queue.pending.push(itemName);
                    added++;
                    const info = isStructType ? structIndex[itemName] : classIndex[itemName];
                    const usage = isStructType && structUsage ? structUsage[itemName] : null;
                    const usageInfo = usage ? ` (used by ${usage.usage_count} classes)` : '';
                    console.log(`Added: ${itemName}${info?.display_name ? ` (${info.display_name})` : ''}${usageInfo}`);
                }

                saveQueue(queue);
                console.log(`\nAdded ${added} ${type}. Queue: ${queue.pending.length} pending`);
                if (skippedExisting > 0) {
                    console.log(`Skipped ${skippedExisting} items (docs already exist)`);
                }
                break;
            }

            case 'add-dir': {
                if (!loadIndexes()) return;
                let dirPath = args.slice(1).join(' ');

                if (!dirPath) {
                    console.log('Usage: queue add-dir <path>');
                    console.log('Examples:');
                    console.log('  queue add-dir PCGExHeuristics/Heuristics');
                    console.log('  queue add-dir PCGExPickers');
                    return;
                }

                // Normalize path separators
                dirPath = dirPath.replace(/\\/g, '/');

                // Try multiple path resolutions
                let fullPath = null;
                const tryPaths = [
                    path.join(INDEX_PATH, dirPath),
                    path.join(INDEX_PATH, dirPath, 'Public'),
                    path.join(INDEX_PATH, dirPath.split('/')[0], 'Public', dirPath.split('/').slice(1).join('/'))
                ];

                for (const tryPath of tryPaths) {
                    if (fs.existsSync(tryPath) && fs.statSync(tryPath).isDirectory()) {
                        fullPath = tryPath;
                        break;
                    }
                }

                if (!fullPath) {
                    console.log(`Directory not found: ${dirPath}`);
                    console.log('Available modules:');
                    const modules = fs.readdirSync(INDEX_PATH)
                        .filter(f => !f.startsWith('_') && fs.statSync(path.join(INDEX_PATH, f)).isDirectory());
                    for (const mod of modules) {
                        console.log(`  ${mod}/`);
                    }
                    return;
                }

                // Recursively find all .json files
                function findJsonFiles(dir) {
                    const files = [];
                    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
                        const entryPath = path.join(dir, entry.name);
                        if (entry.isDirectory()) {
                            files.push(...findJsonFiles(entryPath));
                        } else if (entry.name.endsWith('.json')) {
                            files.push(entryPath);
                        }
                    }
                    return files;
                }

                const jsonFiles = findJsonFiles(fullPath);
                if (jsonFiles.length === 0) {
                    console.log(`No index files found in: ${dirPath}`);
                    return;
                }

                // Extract classes and structs from each json file
                let addedClasses = 0;
                let addedStructs = 0;
                let skippedExisting = 0;
                for (const jsonFile of jsonFiles) {
                    try {
                        const fileData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

                        // Process classes
                        for (const cls of (fileData.classes || [])) {
                            const className = cls.name;

                            // Skip if already in queue or completed
                            if (queue.pending.includes(className) ||
                                queue.completed.includes(className) ||
                                queue.in_progress === className) {
                                continue;
                            }

                            // Skip if output file already exists
                            const outputPath = getStagingPath(className);
                            if (outputPath && fs.existsSync(outputPath)) {
                                skippedExisting++;
                                console.log(`Skipped (doc exists): ${className}`);
                                continue;
                            }

                            queue.pending.push(className);
                            addedClasses++;
                            console.log(`Added class: ${className} (${cls.display_name || ''})`);
                        }

                        // Process shared structs from this file
                        for (const struct of (fileData.structs || [])) {
                            const structName = struct.name;

                            // Only queue shared structs that get their own pages
                            const usage = structUsage ? structUsage[structName] : null;
                            if (!usage || !usage.is_shared) continue;

                            // Skip structs that are documented inline with a parent
                            if (usage.document_with) continue;

                            // Skip if already in queue or completed
                            if (queue.pending.includes(structName) ||
                                queue.completed.includes(structName) ||
                                queue.in_progress === structName) {
                                continue;
                            }

                            // Skip if output file already exists
                            const outputPath = getStructStagingPath(structName);
                            if (outputPath && fs.existsSync(outputPath)) {
                                skippedExisting++;
                                console.log(`Skipped (doc exists): ${structName}`);
                                continue;
                            }

                            queue.pending.push(structName);
                            addedStructs++;
                            const usageInfo = usage ? ` (used by ${usage.user_facing_count} user-facing classes)` : '';
                            console.log(`Added struct: ${structName}${usageInfo}`);
                        }
                    } catch (e) {
                        // Skip invalid json files
                    }
                }

                saveQueue(queue);
                const totalAdded = addedClasses + addedStructs;
                console.log(`\nAdded ${totalAdded} items from ${dirPath} (${addedClasses} classes, ${addedStructs} structs). Queue: ${queue.pending.length} pending`);
                if (skippedExisting > 0) {
                    console.log(`Skipped ${skippedExisting} items (docs already exist)`);
                }
                break;
            }

            case 'sort': {
                if (!loadIndexes()) return;

                // Build a map of class -> depth (how many ancestors it has)
                function getInheritanceDepth(className, visited = new Set()) {
                    if (visited.has(className)) return 0; // Prevent cycles
                    visited.add(className);

                    const info = classIndex[className];
                    if (!info || !info.base_class) return 0;

                    // Only count PCGEx base classes
                    if (!info.base_class.startsWith('UPCGEx') && !info.base_class.startsWith('FPCGEx')) {
                        return 0;
                    }

                    return 1 + getInheritanceDepth(info.base_class, visited);
                }

                // Check if a class uses a specific struct
                function classUsesStruct(className, structName) {
                    const usage = structUsage?.[structName];
                    if (!usage) return false;
                    return usage.used_by.includes(className);
                }

                // Calculate sort priority for all pending items
                // Priority: shared structs first (sorted by user count desc), then classes by inheritance depth
                const withPriority = queue.pending.map(itemName => {
                    const isStruct = isStructItem(itemName);

                    if (isStruct) {
                        const usage = structUsage?.[itemName];
                        const userCount = usage?.user_facing_count || 0;
                        return {
                            name: itemName,
                            type: 'struct',
                            priority: -1000 + (100 - userCount), // Structs get negative priority (come first), higher usage = earlier
                            depth: 0,
                            info: `${userCount} users`
                        };
                    } else {
                        const depth = getInheritanceDepth(itemName);
                        return {
                            name: itemName,
                            type: 'class',
                            priority: depth, // Classes sorted by inheritance depth
                            depth: depth,
                            info: classIndex[itemName]?.base_class || null
                        };
                    }
                });

                // Sort: structs first (by usage desc), then classes by depth, then alphabetically
                withPriority.sort((a, b) => {
                    if (a.priority !== b.priority) return a.priority - b.priority;
                    return a.name.localeCompare(b.name);
                });

                queue.pending = withPriority.map(item => item.name);
                saveQueue(queue);

                console.log('Queue sorted (shared structs first, then classes by inheritance depth):\n');

                // Show structs first
                const structs = withPriority.filter(i => i.type === 'struct');
                const classes = withPriority.filter(i => i.type === 'class');

                if (structs.length > 0) {
                    console.log(`--- Shared Structs (${structs.length}) ---`);
                    for (const item of structs.slice(0, 10)) {
                        console.log(`  [struct] ${item.name} (${item.info})`);
                    }
                    if (structs.length > 10) {
                        console.log(`  ... and ${structs.length - 10} more structs`);
                    }
                    console.log('');
                }

                // Show sample of classes by depth
                let lastDepth = -1;
                let shown = 0;
                for (const item of classes) {
                    if (shown >= 20) break;
                    if (item.depth !== lastDepth) {
                        console.log(`--- Class Depth ${item.depth} ---`);
                        lastDepth = item.depth;
                    }
                    const baseInfo = item.info ? ` : ${item.info}` : '';
                    console.log(`  [class] ${item.name}${baseInfo}`);
                    shown++;
                }

                if (classes.length > 20) {
                    console.log(`\n  ... and ${classes.length - 20} more classes`);
                }

                console.log(`\nTotal: ${queue.pending.length} items sorted (${structs.length} structs, ${classes.length} classes)`);
                break;
            }

            default:
                console.log('Queue commands: add, list, next, done, skip, clear, prune, add-type, add-dir, sort');
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
  context <search>        Get full documentation context for a class or struct
  output <search>         Get staging output path for a class or struct
  list <type>             List classes (providers|consumers|instanced|factories|nodes|shared-structs)
  queue add <search>      Add matching classes to queue (skips if doc exists)
  queue add-type <type>   Add all of a type (providers|consumers|instanced|factories|nodes|shared-structs)
  queue add-dir <path>    Add all classes from an index directory
  queue list              Show queue status
  queue next              Start next item and show context
  queue done [class]      Mark item as documented
  queue skip [class]      Skip item
  queue prune             Remove items from queue if doc file already exists
  queue sort              Sort queue by inheritance depth (base classes first)
  queue clear             Clear the queue
  reindex                 Rebuild the source index

Output Path Convention:
  Source: PCGExModule/Public/Category/File.h
  Output: _staging/PCGExModule/Category/File.md

Examples:
  node pcgex-doc.js context "Heuristics : Steepness"
  node pcgex-doc.js output "Pathfinding : Edges"
  node pcgex-doc.js list providers
  node pcgex-doc.js queue add Heuristic
  node pcgex-doc.js queue add-type providers
  node pcgex-doc.js queue add-dir PCGExHeuristics/Heuristics
  node pcgex-doc.js queue add-dir PCGExPickers
  node pcgex-doc.js queue prune
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
