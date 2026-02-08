---
icon: cog
description: 'Bonding Rules - Compiled data asset containing all module definitions, orbital relationships, and constraint data for the valency system'
---

# Bonding Rules

The central data asset for the valency system. Contains compiled module definitions, orbital neighbor relationships, patterns, and property registries — everything the solver needs at runtime.

## Overview

Bonding Rules is a `UDataAsset` that bridges authoring and execution. You don't hand-edit this asset; it's populated by the **Builder** when you compile from Context Volumes. The asset stores flattened, cache-efficient arrays of module data, orbital bitmasks, and neighbor lookups that the solver reads during constraint propagation.

## How It Works

1. **Authoring**: You place cages and palettes in the level, configure orbitals and connections.
2. **Compilation**: The Builder (triggered from a Context Volume) scans all cages, extracts modules, computes orbital masks, builds neighbor tables, and writes everything into this asset.
3. **Runtime**: PCG nodes reference this asset. The solver loads it, reads compiled data, and uses it to assign modules to cluster Vtx.

#### Usage Notes

- **Read-Only at Runtime**: Most properties are populated by the Builder. You configure the system through cages and palettes, not by editing this asset directly.
- **Multiple Volumes**: Several Context Volumes can reference the same Bonding Rules asset. The Builder aggregates all volumes with matching references into one compilation.
- **Compile On Rebuild**: When enabled, the asset recompiles automatically when the Builder runs. Disable for large systems where you want explicit control over compilation timing.
- **Generated Collections**: The `GeneratedMeshCollection` and `GeneratedActorCollection` are auto-created during compilation — they map module indices to spawnable assets for the staging system.

## Settings

### Valency | Layers

<details>
<summary><strong>Orbital Sets</strong> <code>TArray&lt;TObjectPtr&lt;UPCGExValencyOrbitalSet&gt;&gt;</code></summary>

References to orbital set assets that define the directional layers for this rule set. Each orbital set defines a layer with its own orbital directions and angle thresholds.

Default: empty

</details>

### Valency | Modules

<details>
<summary><strong>Modules</strong> <code>TArray&lt;FPCGExValencyModuleDefinition&gt;</code></summary>

All unique module definitions discovered during compilation. Each module entry contains:
- Asset reference and type
- Orbital masks per layer (which orbitals have connections)
- Local transform variants
- Material variant configuration
- Socket definitions
- Weight, spawn constraints, tags, and properties

Default: empty (populated by Builder)

</details>

### Generated Collections

<details>
<summary><strong>Generated Mesh Collection</strong> <code>TObjectPtr&lt;UPCGExMeshCollection&gt;</code></summary>

Auto-generated mesh collection mapping module indices to static mesh assets. Created during compilation for modules whose asset type is Mesh.

Default: `None` (auto-populated)

</details>

<details>
<summary><strong>Generated Actor Collection</strong> <code>TObjectPtr&lt;UPCGExActorCollection&gt;</code></summary>

Auto-generated actor collection mapping module indices to actor classes. Created during compilation for modules whose asset type is Actor.

Default: `None` (auto-populated)

</details>

### Valency | Patterns

<details>
<summary><strong>Patterns</strong> <code>FPCGExValencyPatternSetCompiled</code></summary>

Compiled pattern definitions for post-solve pattern matching. Contains all pattern topologies, sorted into exclusive (claim nodes) and additive (can overlap) groups.

Default: empty (populated by Builder if pattern cages exist)

</details>

### Valency | Properties

<details>
<summary><strong>Default Properties</strong> <code>FPCGExPropertySchemaCollection</code></summary>

Default property schemas applied to modules that don't specify their own values. Provides fallback values for the property system.

Default: empty

</details>

<details>
<summary><strong>Property Registry</strong> <code>TArray&lt;FPCGExPropertyRegistryEntry&gt;</code></summary>

Registry of all unique properties discovered across modules. Each entry records the property name, type, and whether it supports attribute output. Used by the solver to allocate and write property attributes.

Default: empty (populated by Builder)

</details>

### Valency | Compilation

<details>
<summary><strong>Compile On Rebuild</strong> <code>bool</code></summary>

Whether to automatically compile the bonding rules when the Builder runs. Disable for large systems where you want manual control over when compilation happens.

Default: `true`

</details>

### Build Info

<details>
<summary><strong>Last Build Level Path</strong> <code>FString</code></summary>

Path of the level where the last compilation was triggered. Read-only metadata for tracking which level produced this data.

</details>

<details>
<summary><strong>Last Build Volume Name</strong> <code>FString</code></summary>

Name of the Context Volume that triggered the last compilation.

</details>

<details>
<summary><strong>Last Build Time</strong> <code>FDateTime</code></summary>

Timestamp of the last successful compilation.

</details>

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Core/PCGExValencyBondingRules.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 11 documented (OrbitalSets, Modules, GeneratedMeshCollection, GeneratedActorCollection, Patterns, DefaultProperties, PropertyRegistry, bCompileOnRebuild, LastBuildLevelPath, LastBuildVolumeName, LastBuildTime)
Inherited Properties: None (UDataAsset base)
Inputs: N/A (data asset, not a PCG node)
Outputs: N/A (data asset, not a PCG node)
Nested Types: FPCGExValencyModuleDefinition, FPCGExValencyPatternSetCompiled, FPCGExPropertySchemaCollection, FPCGExPropertyRegistryEntry
-->
