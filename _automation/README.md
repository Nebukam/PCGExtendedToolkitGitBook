# PCGEx Documentation Automation System

## Quick Start

```bash
# 1. Queue up nodes to document
node _automation/scripts/pcgex-doc.js queue add "Heuristics :"

# 2. Start a Claude Code session (optionally with Sonnet for cost savings)
claude --model sonnet

# 3. Tell Claude:
#    "Read _automation/CLAUDE.md and document the next 10 nodes in the queue"
```

## Running Documentation Sessions

### With Claude Code CLI

1. **Queue up nodes** (can use any model):
   ```bash
   cd D:\GIT\PCGExtendedToolkitGitBook\_automation
   node scripts/pcgex-doc.js queue add "Heuristics :"
   node scripts/pcgex-doc.js queue list   # Verify queue
   ```

2. **Start a Claude Code session**:
   ```bash
   # Use Sonnet for bulk documentation (cheaper)
   claude --model sonnet

   # Or Opus for complex nodes
   claude --model opus
   ```

3. **Tell Claude what to do**:
   ```
   Read D:\GIT\PCGExtendedToolkitGitBook\_automation\CLAUDE.md
   and document the next 10 nodes in the queue.
   ```

4. **Claude autonomously**:
   - Runs `queue next` to get context
   - Writes doc to the Output Path
   - Runs `queue done`
   - Repeats for each node

### Resume Later

The queue persists in `queue.json`. Start a new session anytime:
```bash
claude --model sonnet
# "Continue documenting nodes from the queue"
```

## Commands Reference

| Command | Description |
|---------|-------------|
| `context <search>` | Get full documentation context for a class |
| `output <search>` | Get staging output path for a class |
| `list <type>` | List classes (providers\|consumers\|instanced\|factories\|nodes) |
| `queue add <search>` | Add all matching classes to queue |
| `queue list` | Show queue status |
| `queue next` | Start next item and output context |
| `queue done [class]` | Mark item as documented |
| `queue skip [class]` | Skip item |
| `queue clear` | Clear the queue |
| `reindex` | Rebuild the source index |

## Output Path Convention

Documentation files go to `_staging/` mirroring the source structure:

```
Source:  PCGExModule/Public/Category/File.h
Output:  _staging/PCGExModule/Category/File.md
```

Examples:
- `PCGExElementsPathfinding/Public/Elements/PCGExPathfindingEdges.h`
  → `_staging/PCGExElementsPathfinding/Elements/PCGExPathfindingEdges.md`
- `PCGExHeuristics/Public/Heuristics/PCGExHeuristicSteepness.h`
  → `_staging/PCGExHeuristics/Heuristics/PCGExHeuristicSteepness.md`

## Context Output

The `context` command outputs:

- **Classification**: Type, class name, base class, module
- **Output Path**: Where to write the doc (in `_staging/`)
- **Doc Path**: Original path hint (from `PCGExNodeLibraryDoc` meta)
- **Description**: From `PCGEX_NODE_INFOS`
- **Instanced Factories**: With available implementations
- **Consumed Factory Pins**: What factories this node accepts
- **Input/Output Pins**: Node pins
- **Own Properties**: Table format
- **Nested Types**: Expanded structs/enums with inheritance
- **Full Source**: Header and cpp files

## Index Statistics

After running `reindex`:

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

| Type | Description | Example |
|------|-------------|---------|
| **Provider** | Outputs factory for other nodes | `UPCGExHeuristicsSteepnessProviderSettings` |
| **Consumer** | Accepts factory pins | `UPCGExPathfindingEdgesSettings` |
| **Instanced Factory** | Inline sub-node in detail panel | `UPCGExGoalPicker`, `UPCGExSearchAStar` |
| **Factory Data** | Data passed on wire between nodes | `UPCGExHeuristicsFactoryData` |
| **Node Settings** | Regular PCG node | `UPCGExBevelPathSettings` |

## File Structure

```
_automation/
├── README.md                          # This file
├── CLAUDE.md                          # Instructions for Claude sessions
├── queue.json                         # Persistent queue state
├── index/                             # Per-file JSONs mirroring source
│   ├── _class-index.json
│   ├── _struct-index.json
│   ├── _enum-index.json
│   ├── _inheritance.json
│   ├── _classification.json
│   └── [Module]/[Path]/[File].json
├── scripts/
│   ├── pcgex-doc.js                   # Main CLI (use this!)
│   ├── index-generator.js             # Build index
│   └── get-context.js                 # Legacy context builder
└── prompts/
    ├── doc-agent.md                   # Documentation format rules
    └── review-agent.md                # Review instructions
```

## Key Patterns

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

// For documentation: document node-specific Config properties only
// Reference inherited settings via link to shared page
```

## Documentation Rules

1. **Use-case agnostic**: Describe WHAT the node does, not WHY you'd use it
2. **Behavior before settings**: Visual examples right after "How It Works"
3. **No duplication**: Reference inherited settings, don't repeat them
4. **Correct defaults**: Copy exact values from source
5. **Visibility conditions**: Mark with `📋 *Visible when...*`
6. **Overridable markers**: Mark with `⚡ PCG Overridable`
