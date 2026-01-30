# PCGEx Documentation Automation System

## Quick Start

```bash
# 1. Generate index (per-file JSONs mirroring source structure)
node _automation/scripts/index-generator.js

# 2. Get context for documentation
node _automation/scripts/get-context.js "Pathfinding : Edges"
node _automation/scripts/get-context.js Bevel
node _automation/scripts/get-context.js UPCGExHeuristicsSteepnessProviderSettings

# 3. List classes by type
node _automation/scripts/get-context.js --list providers
node _automation/scripts/get-context.js --list consumers
node _automation/scripts/get-context.js --list instanced
```

## Index Statistics

After running `index-generator.js`:

```
Classes:              598
  - Providers:        124   (nodes that output factories)
  - Factory Data:     158   (factory types passed on wires)
  - Instanced:        48    (inline sub-nodes in detail panels)
  - Node Settings:    223   (regular PCG nodes)
  - Consumers:        52    (nodes accepting factory pins)
  - Abstract Bases:   128   (base classes for documentation)
Structs:              351
  - Config structs:   152   (FPCGEx*Config patterns)
Enums:                336
```

## Classification System

### Node Types

| Type | Description | Example |
|------|-------------|---------|
| **Provider** | Outputs factory for other nodes | `UPCGExHeuristicsSteepnessProviderSettings` |
| **Consumer** | Accepts factory pins (`PCGEX_PIN_FACTORIES`) | `UPCGExPathfindingEdgesSettings` |
| **Instanced Factory** | Inline sub-node in detail panel | `UPCGExGoalPicker`, `UPCGExSearchAStar` |
| **Factory Data** | Data passed on wire between nodes | `UPCGExHeuristicsFactoryData` |
| **Node Settings** | Regular PCG node | `UPCGExBevelPathSettings` |

### Detection Patterns

```
Provider Detection:
  - Class name contains "ProviderSettings"
  - Inherits from *FactoryProviderSettings

Consumer Detection:
  - Has PCGEX_PIN_FACTORIES(...) in cpp
  - Has PCGEX_PIN_FILTERS(...) in cpp
  - Has PCGEX_NODE_POINT_FILTER(...) in header

Instanced Factory Detection:
  - Inherits from UPCGExInstancedFactory
  - Or inherits from a class that does

Config Struct Detection:
  - Name matches FPCGEx*Config*
  - Used with ShowOnlyInnerProperties meta
```

## File Structure

```
_automation/
├── README.md
├── index/                              # Per-file JSONs mirroring source
│   ├── _class-index.json              # Quick lookup by class name
│   ├── _struct-index.json             # Quick lookup by struct name
│   ├── _enum-index.json               # Quick lookup by enum name
│   ├── _inheritance.json              # Parent → children map
│   ├── _classification.json           # Lists by type
│   ├── PCGExHeuristics/
│   │   └── Public/
│   │       └── Heuristics/
│   │           └── PCGExHeuristicSteepness.json
│   ├── PCGExElementsPathfinding/
│   │   └── Public/
│   │       └── Elements/
│   │           └── PCGExPathfindingEdges.json
│   └── ...
├── scripts/
│   ├── index-generator.js             # Build index
│   └── get-context.js                 # Get documentation context
└── prompts/
    ├── doc-agent.md                   # Documentation instructions
    └── review-agent.md                # Review instructions
```

## Per-File JSON Schema

Each `.json` file in `index/` contains:

```json
{
  "path": "Module/Public/Category/FileName.h",
  "module": "ModuleName",
  "type": "header",
  "enums": [...],
  "structs": [{
    "name": "FPCGExConfigName",
    "base_class": "FPCGExConfigBase",
    "uproperties": [...],
    "is_config": true
  }],
  "classes": [{
    "name": "UPCGExNodeSettings",
    "display_name": "Category : Node Name",
    "description": "What it does",
    "base_class": "UPCGExBaseSettings",
    "classification": {
      "type": "node_settings",
      "is_provider": false,
      "is_consumer": true,
      "is_instanced_factory": false,
      "instanced_properties": [...]
    },
    "uproperties": [...],
    "all_properties": [...],  // Includes inherited
    "inputs": [...],
    "outputs": [...],
    "consumed_factories": [...],
    "consumed_filters": [...]
  }],
  "operations": [...],  // Non-UCLASS classes (FPCGEx...)
  "namespaces": {...}   // Namespace constants
}
```

## Using with Claude Code

### Get Context for a Class

```bash
node _automation/scripts/get-context.js "Pathfinding : Edges"
```

Output includes:
- Classification (Provider/Consumer/Instanced/etc.)
- Instanced factories with available implementations
- Consumed factory pins
- Own properties (table format)
- Nested type definitions (enums, structs)
- Full source header
- Full source implementation

### List All Providers

```bash
node _automation/scripts/get-context.js --list providers
```

### Document a Node

Tell Claude:
> "Document the Pathfinding : Edges node using the automation system"

Claude will:
1. Run `get-context.js` to get full context
2. Read the index JSON for the file
3. Resolve all nested types and implementations
4. Write documentation following the template
5. Include verification report

## Key Insights from Classification

### Provider → Factory → Operation Chain

```
UPCGExHeuristicsSteepnessProviderSettings (user-facing node)
    ├── Owns: FPCGExHeuristicConfigSteepness Config
    └── CreateFactory() → UPCGExHeuristicsFactorySteepness
                              └── CreateOperation() → FPCGExHeuristicSteepness
```

### Instanced Factory Hierarchy

```
UPCGExInstancedFactory (base)
    └── UPCGExGoalPicker (feature-specific base, abstract)
        ├── UPCGExGoalPickerAttribute (implementation)
        ├── UPCGExGoalPickerRandom (implementation)
        └── ...
```

### Config Struct Pattern

```cpp
// Provider has:
UPROPERTY(meta=(ShowOnlyInnerProperties))
FPCGExHeuristicConfigSteepness Config;

// Config inherits shared settings:
FPCGExHeuristicConfigSteepness : public FPCGExHeuristicConfigBase

// For documentation: document Config properties AS the Provider's settings
```
