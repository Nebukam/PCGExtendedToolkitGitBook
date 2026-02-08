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
   and document the next 5 nodes in the queue.
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

### Class/Node Commands

| Command | Description |
|---------|-------------|
| `context <search>` | Get full documentation context for a class or struct |
| `output <search>` | Get staging output path for a class |
| `list <type>` | List classes by type (see types below) |

### Queue Commands

| Command | Description |
|---------|-------------|
| `queue add <search>` | Add matching classes AND shared structs to queue |
| `queue add-type <type>` | Add all classes/structs of a type |
| `queue add-dir <path>` | Add all classes AND shared structs from an index directory |
| `queue list` | Show queue status (distinguishes [class] vs [struct]) |
| `queue next` | Start next item and output context (auto-detects type) |
| `queue done [item]` | Mark item as documented |
| `queue skip [item]` | Skip item |
| `queue sort` | Sort queue: shared structs first (by user count), then classes by inheritance depth |
| `queue prune` | Remove items from queue if doc file already exists |
| `queue clear` | Clear the queue |

**Note:** The queue handles both classes and shared structs. When you search or add from directories, shared structs are automatically included. The `queue list` and `queue next` commands show `[class]` or `[struct]` labels to distinguish item types.

**Sorting:** Use `queue sort` to ensure shared structs are documented before the classes that use them. Structs are sorted by user count (most-used first), classes by inheritance depth (base classes first).

### Index Commands

| Command | Description |
|---------|-------------|
| `reindex` | Rebuild the source index |

### List Types

Available types for `list` and `queue add-type`:

| Type | Description |
|------|-------------|
| `providers` | Nodes that output factories |
| `consumers` | Nodes that accept factory pins |
| `instanced` | Inline sub-nodes in detail panels |
| `factories` | Factory data types passed on wires |
| `nodes` | Regular PCG nodes |
| `abstract` | Abstract base classes |
| `shared-structs` | Structs shared across multiple node hierarchies |

### Directory Paths for `queue add-dir`

The index folder mirrors the source structure. You can use shorthand paths:

```bash
# These are equivalent:
node scripts/pcgex-doc.js queue add-dir PCGExHeuristics/Heuristics
node scripts/pcgex-doc.js queue add-dir PCGExHeuristics/Public/Heuristics

# Add entire module:
node scripts/pcgex-doc.js queue add-dir PCGExPickers
```

## Shared Structs System

The indexer identifies **shared structs** - configuration structs used across multiple unrelated node hierarchies. These structs get their own documentation pages to avoid duplication.

### How It Works

The system analyzes struct usage patterns:

1. **Origin Detection**: Finds the highest ancestor class in each inheritance chain that declares the struct
2. **User-Facing Filtering**: Counts how many non-abstract nodes/factories use the struct
3. **Sharing Threshold**: A struct is "shared" if it has 2+ user-facing origins from different hierarchies

### Documentation Routing

Each struct is assigned a documentation destination:

| Scenario | Documentation Location |
|----------|----------------------|
| **Shared** (2+ user-facing origins) | Own dedicated page |
| **Single documentable origin** | Inlined with that class's page |
| **Nested in shared struct only** | Inlined with parent shared struct |

### Viewing Shared Structs

```bash
# List all shared structs (sorted by user-facing usage)
node scripts/pcgex-doc.js list shared-structs

# Get full context for a shared struct
node scripts/pcgex-doc.js context FPCGExBlendingDetails
```

Example output:
```
=== SHARED-STRUCTS (37) ===

FPCGExGeo2DProjectionDetails
  File: PCGExCore/Public/Math/PCGExProjectionDetails.h
  User-facing: 19 classes across 18 hierarchies
  Total refs: 28 classes across 25 hierarchies

FPCGExGraphBuilderDetails
  File: PCGExGraphs/Public/Graphs/PCGExGraphDetails.h
  User-facing: 17 classes across 17 hierarchies
  Total refs: 19 classes across 19 hierarchies
```

### Generated Context for Shared Structs

When you run `context` on a shared struct, you get:

- **Usage Statistics**: User-facing count vs total references
- **Primary Users**: List of user-facing classes that use it
- **Example Usage Patterns**: Shows how 3 primary users declare/use the struct (property names, display names, conditions)
- **Properties Table**: All properties with types, defaults, and conditions
- **Nested Types**:
  - Shared structs → referenced with link
  - Nested-only structs → fully inlined
  - Documented elsewhere → reference to parent class/struct
- **Source Definition**: Original C++ code

Example of usage patterns in context output:
```markdown
### Example Usage Patterns

How this struct is used by primary classes:

**Cluster : Dual Graph** (`UPCGExBuildDualGraphSettings`):
- Property: `VtxBlendingDetails` as `VtxBlendingDetails`
- Property: `EdgeBlendingDetails` as `EdgeBlendingDetails`

**Path : To Clusters** (`UPCGExPathToClustersSettings`):
- Property: `DefaultPointsBlendingDetails` as `DefaultPointsBlendingDetails` *(when bFusePaths)*
```

### How Classes Reference Shared Structs

When generating class context, struct properties are categorized:

1. **Shared Type References**: Links to dedicated struct pages
2. **Types Documented Elsewhere**: Links to parent class/struct documentation
3. **Nested Type Definitions**: Fully inlined (enums, non-shared structs)

Example in class context output:
```markdown
## Shared Type References

The following types are shared across multiple nodes and have dedicated documentation:

- **FPCGExGraphBuilderDetails** - Used by 17 user-facing classes across 17 hierarchies

## Types Documented Elsewhere

The following types are documented with their primary defining class/struct:

- **FPCGExBasicEdgeSolidificationDetails** - See documentation for shared struct `FPCGExGraphBuilderDetails`
```

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

### For Classes
- **Classification**: Type, class name, base class, module
- **Output Path**: Where to write the doc (in `_staging/`)
- **Doc Path**: Original path hint (from `PCGExNodeLibraryDoc` meta)
- **Description**: From `PCGEX_NODE_INFOS`
- **Pins**: Input/output pins including filter inputs
- **Instanced Factories**: With available implementations
- **Consumed Factory Pins**: What factories this node accepts
- **Own Properties**: Table format with overridable markers
- **Shared Type References**: Links to shared struct pages
- **Types Documented Elsewhere**: References to parent class/struct
- **Nested Type Definitions**: Inlined enums and non-shared structs
- **Full Source**: Header and cpp files

### For Shared Structs
- **Type Info**: File location, config status, inheritance
- **Usage Statistics**: User-facing vs total references
- **Primary Users**: User-facing classes list
- **Other References**: Internal/inherited usages
- **Properties Table**: With overridable markers and conditions
- **Nested Types**: With proper routing (shared/elsewhere/inline)
- **Source Definition**: C++ struct definition

## Rebuilding the Index

The index must be rebuilt whenever the PCGEx source code changes.

```bash
cd D:\GIT\PCGExtendedToolkitGitBook\_automation

# Rebuild the index
node scripts/pcgex-doc.js reindex
```

This runs `index-generator.js` which:
1. Scans all `.h` and `.cpp` files in the PCGEx Source folder
2. Parses classes, structs, enums, UPROPERTYs, and macros
3. Detects filter inputs from headers (`PCGEX_NODE_POINT_FILTER`) and cpp (`PCGEX_PIN_FILTERS`)
4. Generates per-file JSON mirrors in `_automation/index/`
5. Builds aggregate indexes
6. Classifies nodes (providers, consumers, instanced factories, etc.)
7. Maps inheritance chains
8. **Analyzes struct usage patterns** to identify shared structs
9. **Computes documentation routing** (`document_with` assignments)

**When to rebuild:**
- After pulling new PCGEx source changes
- After adding/removing/renaming nodes
- If `context` output seems stale or missing data

**Source path** (configured in scripts): `D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source`

## Index Statistics

After running `reindex`:

```
Classes:              ~600
  - Providers:        ~125   (nodes that output factories)
  - Factory Data:     ~160   (factory types passed on wires)
  - Instanced:        ~50    (inline sub-nodes in detail panels)
  - Node Settings:    ~225   (regular PCG nodes)
  - Consumers:        ~85    (nodes accepting factory pins)
  - Abstract Bases:   ~130   (base classes for documentation)
Structs:              ~350
  - Config structs:   ~150   (FPCGEx*Config patterns)
  - Shared structs:   37     (used across 2+ hierarchies)
Enums:                ~340
```

## Index Files Reference

| File | Purpose |
|------|---------|
| `_class-index.json` | Class name → file, type, display name |
| `_struct-index.json` | Struct name → file, usage count, is_shared, document_with |
| `_struct-usage.json` | Detailed struct usage: origins, user-facing counts, routing |
| `_shared-structs.json` | List of shared structs sorted by usage |
| `_enum-index.json` | Enum name → file, value count |
| `_inheritance.json` | Base class → derived classes mapping |
| `_classification.json` | Classes grouped by type |

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
│   ├── _class-index.json              # Class lookup
│   ├── _struct-index.json             # Struct lookup with routing
│   ├── _struct-usage.json             # Detailed struct analysis
│   ├── _shared-structs.json           # Shared structs list
│   ├── _enum-index.json               # Enum lookup
│   ├── _inheritance.json              # Inheritance mapping
│   ├── _classification.json           # Type classification
│   └── [Module]/[Path]/[File].json    # Per-file data
├── mapping.json                       # Generated staging ↔ library ↔ source mapping
├── scripts/
│   ├── pcgex-doc.js                   # Main CLI (use this!)
│   ├── build-mapping.js               # Staging ↔ node-library ↔ source mapping
│   ├── index-generator.js             # Build index
│   └── get-context.js                 # Legacy context builder
└── prompts/
    ├── doc-agent.md                   # Documentation format rules
    └── review-agent.md                # Review instructions
```

## Staging ↔ Node-Library Mapping

The `build-mapping.js` script links three locations together: `_staging/*.md` docs, `node-library/*.md` published pages, and the C++ source `.h` files. The linking key is the GitHub source URL in each markdown file's footer.

### Commands

```bash
cd D:\GIT\PCGExtendedToolkitGitBook\_automation

# Build (or rebuild) mapping.json
node scripts/build-mapping.js

# List staging files with no node-library counterpart, grouped by module
node scripts/build-mapping.js audit

# List PCGExNodeLibraryDoc mismatches between source .h files and node-library paths
node scripts/build-mapping.js check

# Preview what source .h files would be updated
node scripts/build-mapping.js update-source

# Actually write the corrected PCGExNodeLibraryDoc values into .h files
node scripts/build-mapping.js update-source --write
```

### How It Works

1. Scans `_staging/**/*.md` and `node-library/**/*.md` for `[Source](https://github.com/.../Source/...)` links
2. Normalizes each URL to a relative `.h` path (fixing the one `.cpp` → `.h` edge case)
3. Matches files that point to the same source header
4. Reads `PCGExNodeLibraryDoc` metadata from each `.h` file and compares it to the expected value derived from the node-library file path

### Output: `mapping.json`

Each entry contains:

| Field | Description |
|-------|-------------|
| `source_relative` | Path relative to the Source root (e.g. `PCGExModule/Public/Path/File.h`) |
| `source_disk` | Absolute path to the `.h` file on disk |
| `staging` | Relative path to the staging `.md`, or `null` |
| `node_library` | Relative path to the node-library `.md`, or `null` |
| `doc_path` | Expected `PCGExNodeLibraryDoc` value (from node-library path) |
| `current_doc_meta` | Current `PCGExNodeLibraryDoc` value in the `.h` file |
| `status` | `ok`, `staging_only`, `library_only`, `meta_mismatch`, or `meta_missing` |

The file also includes a `summary` block with aggregate counts.

### `update-source`

Replaces existing `PCGExNodeLibraryDoc="old"` values with the correct path derived from the node-library file structure. Entries where the metadata is missing entirely (no `PCGExNodeLibraryDoc` in the UCLASS macro) are skipped with a note — those require manual addition.

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

### Shared Struct Documentation Pattern

```cpp
// Multiple unrelated nodes use:
UPROPERTY()
FPCGExBlendingDetails Blending;

// The struct gets its own documentation page
// Node pages reference it instead of duplicating content
```

### Nested Struct Pattern

```cpp
// Parent shared struct:
USTRUCT()
struct FPCGExGraphBuilderDetails {
    UPROPERTY()
    FPCGExBasicEdgeSolidificationDetails BasicEdgeSolidification;
};

// Nested struct documented WITH parent (not separately)
// Both appear on FPCGExGraphBuilderDetails page
```

## Documentation Rules

1. **Use-case agnostic**: Describe WHAT the node does, not WHY you'd use it
2. **Behavior before settings**: Visual examples right after "How It Works"
3. **No duplication**: Reference shared structs, don't repeat their content
4. **Correct defaults**: Copy exact values from source
5. **Visibility conditions**: Mark with `📋 *Visible when...*`
6. **Overridable markers**: Mark with `⚡ PCG Overridable`
7. **Shared struct links**: Use consistent link format to struct pages

## Workflow: Documenting Shared Structs

Shared structs should be documented before the nodes that use them:

```bash
# 1. Queue all shared structs
node scripts/pcgex-doc.js queue add-type shared-structs

# 2. Or add specific struct by search
node scripts/pcgex-doc.js queue add "BlendingDetails"

# 3. Or add structs from a directory (also adds classes)
node scripts/pcgex-doc.js queue add-dir PCGExGraphs/Graphs

# 4. Start documenting
node scripts/pcgex-doc.js queue next
# Outputs struct context with usage stats, nested types, etc.

# 5. After writing the doc, mark done
node scripts/pcgex-doc.js queue done
```

## Workflow: Bulk Documentation

```bash
# 1. Queue all nodes of a type
node scripts/pcgex-doc.js queue add-type nodes

# 2. Or queue by search pattern (includes matching structs!)
node scripts/pcgex-doc.js queue add "Pathfinding"

# 3. Or add from directory (includes structs in that dir)
node scripts/pcgex-doc.js queue add-dir PCGExElementsPathfinding

# 4. Prune already-documented items
node scripts/pcgex-doc.js queue prune

# 5. Check queue status (shows [class] and [struct] labels)
node scripts/pcgex-doc.js queue list

# 6. Start Claude session
claude --model sonnet
# "Document the next 10 items in the queue"
```
