/**
 * PCGEx Source Code Index Generator
 *
 * Features:
 * - Outputs per-file JSON mirroring source structure
 * - Classifies nodes (Standalone, Provider, Consumer, Hybrid)
 * - Detects Provider → Factory → Operation chains
 * - Detects Instanced factories and their implementations
 * - Tracks Config struct inheritance
 * - Detects factory pin consumption (PCGEX_PIN_FACTORIES, PCGEX_PIN_FILTERS)
 * - Walks inheritance chains for complete property/pin lists
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_PATH = process.argv[2] || 'D:\\GIT\\PCGExWorkbench\\Plugins\\PCGExtendedToolkit\\Source';
const OUTPUT_PATH = process.argv[3] || 'D:\\GIT\\PCGExtendedToolkitGitBook\\_automation\\index';

// Global registries (for cross-referencing)
const classRegistry = {};      // All classes by name
const structRegistry = {};     // All structs by name
const enumRegistry = {};       // All enums by name
const inheritanceMap = {};     // parent -> [children]
const fileIndex = {};          // relativePath -> parsed data

/**
 * Ensure directory exists
 */
function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

/**
 * Find all source files recursively
 */
function findSourceFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!file.includes('ThirdParty') && !file.includes('Clipper2Lib')) {
                findSourceFiles(filePath, fileList);
            }
        } else if (file.endsWith('.h') || file.endsWith('.cpp')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

/**
 * Extract content between balanced braces
 */
function extractBalancedBraces(content, startPos) {
    let depth = 0;
    let started = false;
    let start = startPos;

    for (let i = startPos; i < content.length; i++) {
        if (content[i] === '{') {
            if (!started) start = i;
            depth++;
            started = true;
        } else if (content[i] === '}') {
            depth--;
            if (depth === 0 && started) {
                return content.substring(start, i + 1);
            }
        }
    }
    return null;
}

/**
 * Parse UPROPERTY meta specifiers
 */
function parseUPropertyMeta(metaString) {
    const meta = {
        overridable: metaString.includes('PCG_Overridable'),
        not_overridable: metaString.includes('PCG_NotOverridable'),
        instanced: metaString.includes('Instanced'),
        show_only_inner: metaString.includes('ShowOnlyInnerProperties'),
        display_name: null,
        edit_condition: null,
        edit_condition_hides: metaString.includes('EditConditionHides'),
        category: null,
        advanced: metaString.includes('AdvancedDisplay')
    };

    const displayMatch = metaString.match(/DisplayName\s*=\s*"([^"]+)"/);
    if (displayMatch) meta.display_name = displayMatch[1];

    const editCondMatch = metaString.match(/EditCondition\s*=\s*"([^"]+)"/);
    if (editCondMatch) meta.edit_condition = editCondMatch[1];

    const catMatch = metaString.match(/Category\s*=\s*"([^"]+)"/);
    if (catMatch) meta.category = catMatch[1];

    return meta;
}

/**
 * Extract UPROPERTYs from a class/struct body
 */
function extractUProperties(body) {
    const props = [];
    const propRegex = /UPROPERTY\s*\(([^)]+(?:\([^)]*\)[^)]*)*)\)\s*\r?\n?\s*([\w<>:,\s\*]+?)\s+(\w+)(?:\s*=\s*([^;]+))?;/g;

    let match;
    while ((match = propRegex.exec(body)) !== null) {
        const metaString = match[1];
        let propType = match[2].trim().replace(/\s+/g, ' ');
        const propName = match[3];
        let defaultValue = match[4] ? match[4].trim() : null;

        const meta = parseUPropertyMeta(metaString);

        props.push({
            name: propName,
            display_name: meta.display_name || propName,
            type: propType,
            default: defaultValue,
            overridable: meta.overridable,
            instanced: meta.instanced,
            show_only_inner: meta.show_only_inner,
            edit_condition: meta.edit_condition,
            edit_condition_hides: meta.edit_condition_hides,
            category: meta.category,
            advanced: meta.advanced
        });
    }

    return props;
}

/**
 * Classify a class based on patterns
 */
function classifyClass(className, baseClass, body, headerContent) {
    const classification = {
        type: 'unknown',
        is_abstract: headerContent.includes(`UCLASS(Abstract`) || body.includes('virtual') && body.includes('= 0'),
        is_provider: false,
        is_consumer: false,
        is_instanced_factory: false,
        is_factory_data: false,
        is_config_struct: false,
        factory_type: null,
        consumed_factory_types: [],
        instanced_properties: []
    };

    // Provider detection
    if (className.includes('ProviderSettings') || className.includes('FactoryProviderSettings')) {
        classification.type = 'provider';
        classification.is_provider = true;
    }
    // Factory data detection
    else if (className.includes('FactoryData') || (className.includes('Factory') && baseClass && baseClass.includes('FactoryData'))) {
        classification.type = 'factory_data';
        classification.is_factory_data = true;
    }
    // Instanced factory detection
    else if (baseClass === 'UPCGExInstancedFactory' || (baseClass && baseClass.includes('InstancedFactory'))) {
        classification.type = 'instanced_factory';
        classification.is_instanced_factory = true;
    }
    // Node settings detection
    else if (className.endsWith('Settings') && className.startsWith('UPCGEx')) {
        classification.type = 'node_settings';

        // Check for instanced properties
        const instancedRegex = /UPROPERTY\s*\([^)]*Instanced[^)]*\)\s*\r?\n?\s*TObjectPtr<(\w+)>\s+(\w+)/g;
        let instMatch;
        while ((instMatch = instancedRegex.exec(body)) !== null) {
            classification.instanced_properties.push({
                type: instMatch[1],
                name: instMatch[2]
            });
        }

        if (classification.instanced_properties.length > 0) {
            classification.is_consumer = true;
        }
    }

    return classification;
}

/**
 * Parse a header file
 */
function parseHeaderFile(filePath, relativePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const module = relativePath.split(/[\\/]/)[0];

    const fileData = {
        path: relativePath,
        module: module,
        type: 'header',
        enums: [],
        structs: [],
        classes: [],
        operations: [],  // Non-UCLASS classes (FPCGEx...)
        namespaces: {}
    };

    // Parse UENUMs
    const enumRegex = /UENUM\s*\([^)]*\)\s*enum\s+(?:class\s+)?(\w+)(?:\s*:\s*\w+)?\s*\{([^}]+)\}/g;
    let match;
    while ((match = enumRegex.exec(content)) !== null) {
        const enumName = match[1];
        const enumBody = match[2];
        const values = [];

        // Split by lines and parse each enum value line
        const lines = enumBody.split('\n');
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('//')) continue;

            // Match: ValueName = number UMETA(...) or just ValueName UMETA(...)
            const lineMatch = trimmed.match(/^(\w+)\s*(?:=\s*\d+)?\s*(?:UMETA\s*\(([^)]*)\))?/);
            if (lineMatch && lineMatch[1]) {
                const valueName = lineMatch[1];
                // Skip if it looks like a keyword or garbage
                if (['GENERATED_BODY', 'UPROPERTY', 'UFUNCTION'].includes(valueName)) continue;

                let displayName = valueName;
                if (lineMatch[2]) {
                    const displayMatch = lineMatch[2].match(/DisplayName\s*=\s*"([^"]+)"/);
                    if (displayMatch) displayName = displayMatch[1];
                }

                values.push({
                    name: valueName,
                    display_name: displayName
                });
            }
        }

        if (values.length > 0) {
            const enumData = {
                name: enumName,
                values: values,
                used_by: []
            };
            fileData.enums.push(enumData);
            enumRegistry[enumName] = { ...enumData, file: relativePath };
        }
    }

    // Parse USTRUCTs
    const structRegex = /USTRUCT\s*\([^)]*\)\s*struct\s+(?:\w+_API\s+)?(\w+)(?:\s*:\s*public\s+(\w+))?\s*\{/g;
    while ((match = structRegex.exec(content)) !== null) {
        const structName = match[1];
        const baseClass = match[2] || null;
        const startPos = match.index + match[0].length - 1;
        const body = extractBalancedBraces(content, startPos);
        if (!body) continue;

        const uprops = extractUProperties(body);

        // Detect config structs
        const isConfig = structName.includes('Config') && structName.startsWith('FPCGEx');

        const structData = {
            name: structName,
            base_class: baseClass,
            uproperties: uprops,
            is_config: isConfig,
            used_by: []
        };

        fileData.structs.push(structData);
        structRegistry[structName] = { ...structData, file: relativePath };

        // Track inheritance
        if (baseClass) {
            if (!inheritanceMap[baseClass]) inheritanceMap[baseClass] = [];
            inheritanceMap[baseClass].push(structName);
        }
    }

    // Parse UCLASSes
    // Use a simpler regex to find UCLASS, then extract meta with balanced parens
    const classStartRegex = /UCLASS\s*\(/g;
    while ((match = classStartRegex.exec(content)) !== null) {
        // Extract balanced parentheses for UCLASS meta (handles nested parens in quoted strings)
        const metaStart = match.index + match[0].length - 1; // position of opening (
        let depth = 1;
        let metaEnd = metaStart + 1;
        let inQuote = false;
        while (metaEnd < content.length && depth > 0) {
            const char = content[metaEnd];
            if (char === '"' && content[metaEnd - 1] !== '\\') {
                inQuote = !inQuote;
            } else if (!inQuote) {
                if (char === '(') depth++;
                else if (char === ')') depth--;
            }
            metaEnd++;
        }
        if (depth !== 0) continue; // malformed UCLASS

        const uclassMeta = content.substring(metaStart + 1, metaEnd - 1);

        // Now find the class declaration after UCLASS(...)
        const afterMeta = content.substring(metaEnd);
        const classMatch = afterMeta.match(/^\s*class\s+(?:\w+_API\s+)?(\w+)\s*:\s*public\s+(\w+)/);
        if (!classMatch) continue;

        const className = classMatch[1];
        const baseClass = classMatch[2];

        const startPos = content.indexOf('{', metaEnd + classMatch[0].length);
        if (startPos === -1) continue;

        const body = extractBalancedBraces(content, startPos);
        if (!body) continue;

        // Get display name (handles PCGEX_NODE_INFOS and PCGEX_NODE_INFOS_CUSTOM_SUBTITLE)
        let displayName = className;
        let description = '';
        const infoMatch = body.match(/PCGEX_NODE_INFOS(?:_CUSTOM_SUBTITLE)?\s*\(\s*\w+\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"/);
        if (infoMatch) {
            displayName = infoMatch[1];
            description = infoMatch[2];
        }

        const uprops = extractUProperties(body);
        const classification = classifyClass(className, baseClass, body, content);

        // Detect point filter macro (header-defined filter inputs)
        // PCGEX_NODE_POINT_FILTER(Label, Tooltip, FactoryType, bRequired)
        const pointFilterMatch = body.match(/PCGEX_NODE_POINT_FILTER\s*\(\s*([^,]+)\s*,\s*"([^"]+)"\s*,\s*([^,]+)\s*,\s*(\w+)\s*\)/);

        // Collect all header-defined filter inputs
        const headerFilterInputs = [];
        if (pointFilterMatch) {
            headerFilterInputs.push({
                label: pointFilterMatch[1].trim(),
                tooltip: pointFilterMatch[2],
                factory_type: pointFilterMatch[3].trim(),
                required: pointFilterMatch[4].trim() === 'true'
            });
        }

        const classData = {
            name: className,
            display_name: displayName,
            description: description,
            base_class: baseClass,
            uclass_meta: uclassMeta,
            uproperties: uprops,
            classification: classification,
            has_point_filter: !!pointFilterMatch,
            point_filter_label: pointFilterMatch ? pointFilterMatch[1].trim() : null,
            filter_inputs: headerFilterInputs,
            inputs: [],
            outputs: [],
            consumed_factories: [],
            consumed_filters: []
        };

        fileData.classes.push(classData);
        classRegistry[className] = { ...classData, file: relativePath };

        // Track inheritance
        if (!inheritanceMap[baseClass]) inheritanceMap[baseClass] = [];
        inheritanceMap[baseClass].push(className);
    }

    // Parse non-UCLASS classes (Operations, etc.)
    // These are typically: class MODULENAME_API FPCGEx... : public FPCGEx...
    const operationRegex = /(?<!U)class\s+(?:\w+_API\s+)?(FPCGEx\w+)\s*(?:final\s*)?:\s*public\s+(\w+)/g;
    while ((match = operationRegex.exec(content)) !== null) {
        const className = match[1];
        const baseClass = match[2];

        // Skip if already parsed as UCLASS
        if (classRegistry[className]) continue;

        fileData.operations.push({
            name: className,
            base_class: baseClass
        });

        // Track inheritance
        if (!inheritanceMap[baseClass]) inheritanceMap[baseClass] = [];
        inheritanceMap[baseClass].push(className);
    }

    // Parse namespace constants (for pin labels)
    const namespaceRegex = /namespace\s+(\w+)\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g;
    while ((match = namespaceRegex.exec(content)) !== null) {
        const nsName = match[1];
        const nsBody = match[2];

        const constants = {};
        const constRegex = /const\s+FName\s+(\w+)\s*=\s*(?:TEXT\s*\()?"([^"]+)"/g;
        let constMatch;
        while ((constMatch = constRegex.exec(nsBody)) !== null) {
            constants[constMatch[1]] = constMatch[2];
        }

        if (Object.keys(constants).length > 0) {
            fileData.namespaces[nsName] = constants;
        }
    }

    return fileData;
}

/**
 * Parse a cpp file for additional info
 */
function parseCppFile(filePath, relativePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const module = relativePath.split(/[\\/]/)[0];

    const cppData = {
        path: relativePath,
        module: module,
        type: 'cpp',
        class_implementations: {}
    };

    // Find which classes this cpp implements
    const implRegex = /(\w+)::(\w+)\s*\(/g;
    const classesFound = new Set();
    let match;
    while ((match = implRegex.exec(content)) !== null) {
        if (match[1].startsWith('UPCGEx') || match[1].startsWith('FPCGEx')) {
            classesFound.add(match[1]);
        }
    }

    for (const className of classesFound) {
        const implData = {
            inputs: [],
            outputs: [],
            consumed_factories: [],
            consumed_filters: []
        };

        // Input pins
        const inputMatch = content.match(new RegExp(`${className}::InputPinProperties[\\s\\S]*?\\{([\\s\\S]*?)\\n\\treturn`));
        if (inputMatch) {
            const pinBody = inputMatch[1];

            // FName patterns
            const fnameMatches = pinBody.matchAll(/FName\s*\(\s*(?:TEXT\s*\()?"([^"]+)"/g);
            for (const pm of fnameMatches) {
                if (!implData.inputs.includes(pm[1])) implData.inputs.push(pm[1]);
            }

            // PCGEX_PIN_* macros with namespace
            const macroMatches = pinBody.matchAll(/PCGEX_PIN_\w+\s*\(\s*(\w+::\w+)/g);
            for (const pm of macroMatches) {
                const constName = pm[1].split('::')[1];
                if (constName && !implData.inputs.includes(constName)) {
                    implData.inputs.push(constName);
                }
            }

            // PCGEX_PIN_* with string literal
            const stringMatches = pinBody.matchAll(/PCGEX_PIN_\w+\s*\(\s*"([^"]+)"/g);
            for (const pm of stringMatches) {
                if (!implData.inputs.includes(pm[1])) implData.inputs.push(pm[1]);
            }

            // PCGEX_PIN_FACTORIES detection
            const factoryMatches = pinBody.matchAll(/PCGEX_PIN_FACTORIES\s*\(\s*(\w+::\w+)[^,]*,[^,]*,[^,]*,\s*(\w+)::AsId/g);
            for (const pm of factoryMatches) {
                implData.consumed_factories.push({
                    label: pm[1],
                    type_info: pm[2]
                });
            }

            // PCGEX_PIN_FILTERS detection
            // PCGEX_PIN_FILTERS(Label, Tooltip, RequiredStatus)
            const filterMatches = pinBody.matchAll(/PCGEX_PIN_FILTERS\s*\(\s*([^,]+)\s*,\s*"([^"]+)"\s*,\s*(\w+)\s*\)/g);
            for (const pm of filterMatches) {
                implData.consumed_filters.push({
                    label: pm[1].trim(),
                    tooltip: pm[2],
                    required: pm[3].trim()
                });
            }
        }

        // Output pins
        const outputMatch = content.match(new RegExp(`${className}::OutputPinProperties[\\s\\S]*?\\{([\\s\\S]*?)\\n\\treturn`));
        if (outputMatch) {
            const pinBody = outputMatch[1];

            const fnameMatches = pinBody.matchAll(/FName\s*\(\s*(?:TEXT\s*\()?"([^"]+)"/g);
            for (const pm of fnameMatches) {
                if (!implData.outputs.includes(pm[1])) implData.outputs.push(pm[1]);
            }

            const macroMatches = pinBody.matchAll(/PCGEX_PIN_\w+\s*\(\s*(\w+::\w+)/g);
            for (const pm of macroMatches) {
                const constName = pm[1].split('::')[1];
                if (constName && !implData.outputs.includes(constName)) {
                    implData.outputs.push(constName);
                }
            }

            const stringMatches = pinBody.matchAll(/PCGEX_PIN_\w+\s*\(\s*"([^"]+)"/g);
            for (const pm of stringMatches) {
                if (!implData.outputs.includes(pm[1])) implData.outputs.push(pm[1]);
            }
        }

        cppData.class_implementations[className] = implData;
    }

    return cppData;
}

/**
 * Merge cpp data into header data
 */
function mergeHeaderAndCpp(headerData, cppData) {
    if (!cppData) return headerData;

    for (const classData of headerData.classes) {
        const impl = cppData.class_implementations[classData.name];
        if (impl) {
            classData.inputs = [...new Set([...classData.inputs, ...impl.inputs])];
            classData.outputs = [...new Set([...classData.outputs, ...impl.outputs])];
            classData.consumed_factories = impl.consumed_factories;

            // Merge filter inputs: combine header-defined (filter_inputs) with cpp-defined (consumed_filters)
            classData.consumed_filters = [...(classData.filter_inputs || []), ...impl.consumed_filters];

            // Update classification
            if (impl.consumed_factories.length > 0 || classData.consumed_filters.length > 0) {
                classData.classification.is_consumer = true;
            }
        } else {
            // No cpp implementation found, but we may still have header-defined filter inputs
            if (classData.filter_inputs && classData.filter_inputs.length > 0) {
                classData.consumed_filters = [...classData.filter_inputs];
                classData.classification.is_consumer = true;
            }
        }
    }

    return headerData;
}

/**
 * Walk inheritance chain to get all inherited properties
 */
function getInheritedProperties(className, visited = new Set()) {
    if (visited.has(className)) return [];
    visited.add(className);

    const classData = classRegistry[className] || structRegistry[className];
    if (!classData) return [];

    let props = [...(classData.uproperties || [])];

    if (classData.base_class) {
        const inheritedProps = getInheritedProperties(classData.base_class, visited);
        props = [...inheritedProps, ...props];
    }

    return props;
}

/**
 * Get all implementations of a base class
 */
function getImplementations(baseClassName) {
    const implementations = [];
    const children = inheritanceMap[baseClassName] || [];

    for (const child of children) {
        const childData = classRegistry[child];
        if (childData) {
            if (childData.classification?.is_abstract) {
                // Recurse into abstract classes
                implementations.push(...getImplementations(child));
            } else {
                implementations.push(child);
            }
        } else {
            // Might be a struct or operation
            implementations.push(child);
        }
    }

    return implementations;
}

// Main execution
console.log('=== PCGEx Index Generator v2 ===');
console.log(`Source: ${SOURCE_PATH}`);
console.log(`Output: ${OUTPUT_PATH}`);
console.log();

// Ensure output directory
ensureDir(OUTPUT_PATH);

// Find all source files
const allFiles = findSourceFiles(SOURCE_PATH);
const headers = allFiles.filter(f => f.endsWith('.h'));
const cpps = allFiles.filter(f => f.endsWith('.cpp'));

console.log(`Found ${headers.length} headers and ${cpps.length} cpp files`);
console.log();

// Phase 1: Parse all headers
console.log('Phase 1: Parsing headers...');
const headerDataMap = {};
let processed = 0;
for (const header of headers) {
    const relativePath = path.relative(SOURCE_PATH, header).replace(/\\/g, '/');
    headerDataMap[relativePath] = parseHeaderFile(header, relativePath);
    processed++;
    if (processed % 100 === 0) {
        console.log(`  Parsed ${processed}/${headers.length} headers`);
    }
}
console.log(`  Parsed ${headers.length} headers`);

// Phase 2: Parse cpp files
console.log('Phase 2: Parsing cpp files...');
const cppDataMap = {};
processed = 0;
for (const cpp of cpps) {
    const relativePath = path.relative(SOURCE_PATH, cpp).replace(/\\/g, '/');
    cppDataMap[relativePath] = parseCppFile(cpp, relativePath);
    processed++;
    if (processed % 100 === 0) {
        console.log(`  Parsed ${processed}/${cpps.length} cpp files`);
    }
}
console.log(`  Parsed ${cpps.length} cpp files`);

// Phase 3: Merge header and cpp data
console.log('Phase 3: Merging header and cpp data...');
for (const [headerPath, headerData] of Object.entries(headerDataMap)) {
    const cppPath = headerPath.replace('/Public/', '/Private/').replace('.h', '.cpp');
    const cppData = cppDataMap[cppPath];
    mergeHeaderAndCpp(headerData, cppData);
}

// Phase 4: Resolve inheritance and cross-references
console.log('Phase 4: Resolving inheritance...');
for (const [className, classData] of Object.entries(classRegistry)) {
    // Add inherited properties info
    classData.all_properties = getInheritedProperties(className);

    // For instanced factories, find implementations
    if (classData.classification?.is_instanced_factory && classData.classification?.is_abstract) {
        classData.implementations = getImplementations(className);
    }

    // For providers, try to find associated factory
    if (classData.classification?.is_provider) {
        // Look for Create Factory pattern
        const factoryName = className.replace('ProviderSettings', 'FactoryData')
            .replace('Provider', 'Factory');
        if (classRegistry[factoryName]) {
            classData.produces_factory = factoryName;
        }
    }
}

// Phase 5: Write per-file JSONs
console.log('Phase 5: Writing per-file JSONs...');
for (const [headerPath, headerData] of Object.entries(headerDataMap)) {
    const jsonPath = path.join(OUTPUT_PATH, headerPath.replace('.h', '.json'));
    ensureDir(path.dirname(jsonPath));

    // Enrich with cross-references
    for (const classData of headerData.classes) {
        const fullClassData = classRegistry[classData.name];
        if (fullClassData) {
            classData.all_properties = fullClassData.all_properties;
            classData.implementations = fullClassData.implementations;
            classData.produces_factory = fullClassData.produces_factory;
        }
    }

    fs.writeFileSync(jsonPath, JSON.stringify(headerData, null, 2));
}

// Phase 6: Write summary files
console.log('Phase 6: Writing summary files...');

// Class index
const classIndex = {};
for (const [name, data] of Object.entries(classRegistry)) {
    classIndex[name] = {
        file: data.file,
        type: data.classification?.type || 'unknown',
        base_class: data.base_class,
        display_name: data.display_name
    };
}
fs.writeFileSync(path.join(OUTPUT_PATH, '_class-index.json'), JSON.stringify(classIndex, null, 2));

// Struct index (will be enriched with usage info after struct analysis)
const structIndex = {};
for (const [name, data] of Object.entries(structRegistry)) {
    structIndex[name] = {
        file: data.file,
        base_class: data.base_class,
        is_config: data.is_config,
        is_shared: false,  // Will be updated after usage analysis
        usage_count: 0
    };
}

// Enum index
const enumIndex = {};
for (const [name, data] of Object.entries(enumRegistry)) {
    enumIndex[name] = {
        file: data.file,
        value_count: data.values.length
    };
}
fs.writeFileSync(path.join(OUTPUT_PATH, '_enum-index.json'), JSON.stringify(enumIndex, null, 2));

// Inheritance map
fs.writeFileSync(path.join(OUTPUT_PATH, '_inheritance.json'), JSON.stringify(inheritanceMap, null, 2));

// Classification summary
const classificationSummary = {
    providers: [],
    factory_data: [],
    instanced_factories: [],
    node_settings: [],
    consumers: [],
    abstract_bases: []
};

for (const [name, data] of Object.entries(classRegistry)) {
    const c = data.classification;
    if (!c) continue;

    if (c.is_abstract) classificationSummary.abstract_bases.push(name);
    if (c.type === 'provider') classificationSummary.providers.push(name);
    if (c.type === 'factory_data') classificationSummary.factory_data.push(name);
    if (c.type === 'instanced_factory') classificationSummary.instanced_factories.push(name);
    if (c.type === 'node_settings') classificationSummary.node_settings.push(name);
    if (c.is_consumer) classificationSummary.consumers.push(name);
}

fs.writeFileSync(path.join(OUTPUT_PATH, '_classification.json'), JSON.stringify(classificationSummary, null, 2));

// Struct usage analysis - identify shared structs used across multiple unrelated classes
console.log('Analyzing struct usage...');
const structUsage = {};  // structName -> { used_by: [className], defining_classes: Set }

// Helper to get the full ancestor chain of a class
function getAncestorChain(className, visited = new Set()) {
    const chain = [];
    let current = className;

    while (current && !visited.has(current)) {
        visited.add(current);
        chain.push(current);

        const classData = classRegistry[current];
        if (!classData || !classData.base_class) break;

        // Stop at non-PCGEx base classes
        if (!classData.base_class.startsWith('UPCGEx') && !classData.base_class.startsWith('FPCGEx')) {
            break;
        }

        current = classData.base_class;
    }

    return chain;
}

// Extract struct types from property type strings
function extractStructTypes(typeName) {
    const types = [];
    // Handle TArray<FStruct>, TObjectPtr<FStruct>, raw FStruct, etc.
    const matches = typeName.match(/FPCGEx\w+/g);
    if (matches) types.push(...matches);
    return types;
}

// Get structs that a class DIRECTLY declares (not inherited)
function getDirectStructs(className) {
    const classData = classRegistry[className];
    if (!classData) return new Set();

    const directProps = classData.uproperties || [];
    const structs = new Set();

    for (const prop of directProps) {
        const structTypes = extractStructTypes(prop.type);
        for (const st of structTypes) {
            if (structRegistry[st]) structs.add(st);
        }
    }

    return structs;
}

// First pass: find which class in each hierarchy DEFINES each struct
// A struct is "defined" at the highest ancestor that declares it directly
const structDefiningClass = {};  // structName -> Set of defining class names

for (const [className, classData] of Object.entries(classRegistry)) {
    const directStructs = getDirectStructs(className);

    for (const structType of directStructs) {
        if (!structDefiningClass[structType]) {
            structDefiningClass[structType] = new Set();
        }
        structDefiningClass[structType].add(className);
    }
}

// For each struct, find the "origin" classes - the highest ancestor in each chain that defines it
function getStructOrigins(structName) {
    const definingClasses = structDefiningClass[structName];
    if (!definingClasses) return new Set();

    const origins = new Set();

    for (const definer of definingClasses) {
        // Walk up the chain and find the highest ancestor that also defines this struct
        const chain = getAncestorChain(definer);
        let origin = definer;

        for (const ancestor of chain) {
            if (ancestor !== definer && definingClasses.has(ancestor)) {
                origin = ancestor;  // Found a higher definer
            }
        }

        origins.add(origin);
    }

    return origins;
}

// Scan all classes for struct usage (for the used_by list)
for (const [className, classData] of Object.entries(classRegistry)) {
    const allProps = classData.all_properties || classData.uproperties || [];

    for (const prop of allProps) {
        const structTypes = extractStructTypes(prop.type);

        for (const structType of structTypes) {
            if (!structRegistry[structType]) continue;  // Not a known struct

            if (!structUsage[structType]) {
                structUsage[structType] = {
                    used_by: [],
                    defining_classes: new Set()
                };
            }

            if (!structUsage[structType].used_by.includes(className)) {
                structUsage[structType].used_by.push(className);
            }
        }
    }
}

// Also scan structs that use other structs
for (const [structName, structData] of Object.entries(structRegistry)) {
    const fileData = headerDataMap[structData.file];
    if (!fileData) continue;

    const structDef = fileData.structs.find(s => s.name === structName);
    if (!structDef) continue;

    for (const prop of (structDef.uproperties || [])) {
        const nestedTypes = extractStructTypes(prop.type);

        for (const nestedType of nestedTypes) {
            if (!structRegistry[nestedType] || nestedType === structName) continue;

            if (!structUsage[nestedType]) {
                structUsage[nestedType] = {
                    used_by: [],
                    defining_classes: new Set()
                };
            }

            // Mark as used by the parent struct
            if (!structUsage[nestedType].used_by.includes(structName)) {
                structUsage[nestedType].used_by.push(structName);
            }
        }
    }
}

// Helper to check if a class is "user-facing" (visible in the editor)
// User-facing = node_settings, instanced_factory, or provider (but not abstract)
function isUserFacing(className) {
    const classData = classRegistry[className];
    if (!classData) return false;

    const c = classData.classification;
    if (!c) return false;

    // Abstract classes are not user-facing
    if (c.is_abstract) return false;

    // Node settings, instanced factories, and providers are user-facing
    return c.type === 'node_settings' || c.type === 'instanced_factory' || c.type === 'provider';
}

// Helper to check if a class is "documentable" (will get its own page)
// Documentable = provider, node_settings, or instanced_factory (including abstract bases)
function isDocumentable(className) {
    const classData = classRegistry[className];
    if (!classData) return false;

    const c = classData.classification;
    if (!c) return false;

    // Documentable types get their own pages (even if abstract - they serve as base documentation)
    return c.type === 'node_settings' || c.type === 'instanced_factory' || c.type === 'provider';
}

// Convert Sets to arrays and identify shared structs
// A struct is "shared" if it has multiple independent origin points (not inherited from common ancestor)
const structUsageIndex = {};
const sharedStructs = [];  // Structs with 2+ independent origin classes

for (const [structName, usage] of Object.entries(structUsage)) {
    const origins = getStructOrigins(structName);
    const originCount = origins.size;
    const usageCount = usage.used_by.length;

    // Count user-facing usages (nodes, factories, providers - not abstract)
    const userFacingUsers = usage.used_by.filter(isUserFacing);
    const userFacingCount = userFacingUsers.length;

    // Count user-facing origins
    const userFacingOrigins = [...origins].filter(isUserFacing);
    const userFacingOriginCount = userFacingOrigins.length;

    // Determine where this struct should be documented
    // - If shared (2+ origins with 2+ user-facing): gets its own page
    // - If single documentable origin: inline with that origin's page
    // - Otherwise: inline wherever used
    let documentWith = null;

    // "Shorthand" structs are utility wrappers (constant vs attribute input)
    // They should never be shared - just treat as fancy property types
    const isShorthandStruct = structName.includes('Shorthand');

    const isShared = !isShorthandStruct && originCount >= 2 && userFacingOriginCount >= 2;

    if (!isShared && originCount === 1) {
        // Single origin - check if it's documentable (provider, node_settings, instanced_factory)
        const singleOrigin = [...origins][0];
        if (isDocumentable(singleOrigin)) {
            documentWith = singleOrigin;
        }
    }

    structUsageIndex[structName] = {
        used_by: usage.used_by,
        origin_count: originCount,
        origins: [...origins],
        usage_count: usageCount,
        user_facing_count: userFacingCount,
        user_facing_origins: userFacingOrigins,
        user_facing_origin_count: userFacingOriginCount,
        is_shared: isShared,
        document_with: documentWith  // null = own page (if shared) or inline everywhere
    };

    if (isShared) {
        sharedStructs.push({
            name: structName,
            file: structRegistry[structName].file,
            origin_count: originCount,
            origins: [...origins],
            usage_count: usageCount,
            user_facing_count: userFacingCount,
            user_facing_origins: userFacingOrigins,
            user_facing_origin_count: userFacingOriginCount
        });
    }
}

// Post-process: Handle nested structs (structs only used by other structs)
// These should be documented with their parent struct
for (const [structName, usage] of Object.entries(structUsageIndex)) {
    if (usage.document_with !== null) continue;  // Already assigned
    if (usage.is_shared) continue;  // Will get its own page

    // Check if this struct is ONLY used by other structs (no class users)
    const structUsers = usage.used_by.filter(user => structRegistry[user]);
    const classUsers = usage.used_by.filter(user => classRegistry[user]);

    if (structUsers.length > 0 && classUsers.length === 0) {
        // Only used by structs - find the parent struct to document with
        // If parent is shared, document with that shared struct
        // If parent has document_with, use that
        for (const parentStruct of structUsers) {
            const parentUsage = structUsageIndex[parentStruct];
            if (parentUsage) {
                if (parentUsage.is_shared) {
                    // Parent is shared - document nested struct with the parent struct
                    usage.document_with = parentStruct;
                    usage.document_with_type = 'struct';
                    break;
                } else if (parentUsage.document_with) {
                    // Parent has a document_with - use same target
                    usage.document_with = parentUsage.document_with;
                    usage.document_with_type = parentUsage.document_with_type || 'class';
                    break;
                }
            }
        }
    }
}

// Sort shared structs by user-facing count (most relevant for documentation)
sharedStructs.sort((a, b) => {
    // Primary: user-facing count
    if (b.user_facing_count !== a.user_facing_count) {
        return b.user_facing_count - a.user_facing_count;
    }
    // Secondary: total usage count
    return b.usage_count - a.usage_count;
});

fs.writeFileSync(path.join(OUTPUT_PATH, '_struct-usage.json'), JSON.stringify(structUsageIndex, null, 2));
fs.writeFileSync(path.join(OUTPUT_PATH, '_shared-structs.json'), JSON.stringify(sharedStructs, null, 2));

// Enrich struct index with usage info
for (const [structName, usage] of Object.entries(structUsageIndex)) {
    if (structIndex[structName]) {
        structIndex[structName].is_shared = usage.is_shared;
        structIndex[structName].usage_count = usage.usage_count;
        structIndex[structName].user_facing_count = usage.user_facing_count;
        structIndex[structName].document_with = usage.document_with;
    }
}
fs.writeFileSync(path.join(OUTPUT_PATH, '_struct-index.json'), JSON.stringify(structIndex, null, 2));

// Summary
console.log();
console.log('=== Summary ===');
console.log(`Classes:              ${Object.keys(classRegistry).length}`);
console.log(`  - Providers:        ${classificationSummary.providers.length}`);
console.log(`  - Factory Data:     ${classificationSummary.factory_data.length}`);
console.log(`  - Instanced:        ${classificationSummary.instanced_factories.length}`);
console.log(`  - Node Settings:    ${classificationSummary.node_settings.length}`);
console.log(`  - Consumers:        ${classificationSummary.consumers.length}`);
console.log(`  - Abstract Bases:   ${classificationSummary.abstract_bases.length}`);
console.log(`Structs:              ${Object.keys(structRegistry).length}`);
console.log(`  - Config structs:   ${Object.values(structRegistry).filter(s => s.is_config).length}`);
console.log(`  - Shared structs:   ${sharedStructs.length}`);
console.log(`Enums:                ${Object.keys(enumRegistry).length}`);
console.log();
console.log(`Output written to: ${OUTPUT_PATH}`);
