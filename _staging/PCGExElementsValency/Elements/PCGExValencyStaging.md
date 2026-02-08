---
icon: diagram-project
description: 'Valency : Staging - WFC-like asset staging on cluster vertices using orbital-based compatibility rules'
---

# Valency : Staging

WFC-like asset staging on cluster vertices using orbital-based compatibility rules.

## Overview

The central execution node for the valency system. It takes a cluster with orbital data, loads a Bonding Rules asset, runs a solver to assign compatible modules to each Vtx, then writes the solved module data as point attributes. The output is ready for downstream staging nodes to spawn the actual assets.

## How It Works

1. **Load Assets**: Loads the Orbital Set and Bonding Rules data assets. Extracts mesh and actor collections from the compiled rules.
2. **Build Orbital Cache**: Constructs per-cluster orbital mappings from Vtx masks and edge orbital indices.
3. **Apply Fixed Picks** (optional): Pre-assigns specific modules to Vtx that have a matching name attribute, before the solver runs.
4. **Solve**: The connected solver sub-node assigns a module to each Vtx, respecting orbital compatibility, neighbor constraints, and distribution limits.
5. **Write Output**: Writes module data (packed int64), entry hash, unsolvable markers, module names, local transforms, and cage properties to Vtx attributes.

#### Usage Notes

- **Solver Required**: Connect a solver sub-node (Entropy Solver, Priority Solver, or Constraint Solver) to the Solver property. Each implements a different solving strategy.
- **Per-Cluster Seed**: When enabled, each cluster uses its own seed derived from Vtx data, producing different results per cluster while remaining deterministic.
- **Fixed Picks**: Pre-assign modules to specific Vtx by name. The solver treats these as pre-collapsed nodes and propagates constraints from them. Useful for anchoring specific modules at known positions.
- **Unsolvable Nodes**: Some Vtx may have no valid module (contradictions). These can be marked with an attribute, pruned from output, or both.
- **Fitting**: Scale-to-fit and justification settings control how solved module transforms are adjusted to match Vtx bounds.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices with orbital mask attributes |
| **Edges** | Points | Cluster edges with orbital index attributes |
| **Labels** | Params | Optional label data |

## Settings

### Solver

<details>
<summary><strong>Solver</strong> <code>UPCGExValencySolverInstancedFactory</code></summary>

The solver algorithm to use for module assignment. Available options:

| Solver | Strategy |
|--------|----------|
| **Entropy Solver** | WFC-style — collapses the node with fewest valid candidates first |
| **Priority Solver** | Reads a priority attribute to determine collapse order |
| **Constraint Solver** | Propagates constraints without random selection |

</details>

<details>
<summary><strong>Use Per Cluster Seed</strong> <code>bool</code></summary>

When enabled, each cluster uses a seed derived from its own data, producing varied results across clusters while remaining deterministic.

Default: `false`

⚡ PCG Overridable

</details>

### Output

<details>
<summary><strong>Output Unsolvable Marker</strong> <code>bool</code></summary>

Write a boolean attribute marking nodes that failed to solve (contradictions).

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Unsolvable Attribute Name</strong> <code>FName</code></summary>

Name of the unsolvable marker attribute.

Default: `bUnsolvable`

📋 *Visible when Output Unsolvable Marker is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Prune Unsolvable</strong> <code>bool</code></summary>

Remove nodes that failed to solve from the output entirely.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Module Name</strong> <code>bool</code></summary>

Write the resolved module's name as a string attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Module Name Attribute Name</strong> <code>FName</code></summary>

Name of the module name attribute.

Default: `ModuleName`

📋 *Visible when Output Module Name is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Apply Local Transforms</strong> <code>bool</code></summary>

Apply the module's local transform offset to the Vtx point transform. Modules may define transform variants — one is selected randomly (deterministically) during solving.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Properties Output</strong> <code>FPCGExValencyPropertyOutputSettings</code></summary>

Configuration for outputting cage properties and module tags as attributes.

| Field | Type | Description |
|-------|------|-------------|
| **Configs** | `TArray<FPCGExValencyPropertyOutputConfig>` | Per-property output configuration |
| **Output Module Tags** | `bool` | Write module actor tags as an attribute |
| **Module Tags Attribute Name** | `FName` | Attribute name for tags (default: `ModuleTags`) |

⚡ PCG Overridable

</details>

### Fixed Picks

<details>
<summary><strong>Enable Fixed Picks</strong> <code>bool</code></summary>

Allow pre-assigning modules to specific Vtx before the solver runs.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fixed Pick Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute containing module names for fixed assignment. Vtx with a valid module name are pre-assigned before solving.

📋 *Visible when Enable Fixed Picks is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Fixed Pick Selection Mode</strong> <code>EPCGExFixedPickSelectionMode</code></summary>

How to choose when multiple modules match the fixed pick name.

| Option | Description |
|--------|-------------|
| **Weighted Random** | Select from matching modules using weights (deterministic) |
| **First Match** | Select the first matching module (deterministic) |
| **Best Fit** | Select the module with the best orbital configuration match |

Default: `WeightedRandom`

📋 *Visible when Enable Fixed Picks is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Incompatible Fixed Pick Behavior</strong> <code>EPCGExFixedPickIncompatibleBehavior</code></summary>

What to do when a fixed pick module doesn't fit the node's orbital configuration.

| Option | Description |
|--------|-------------|
| **Skip** | Ignore the fixed pick and let the solver decide |
| **Force** | Force the module regardless of orbital fit |

Default: `Skip`

📋 *Visible when Enable Fixed Picks is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Warn On Unmatched Fixed Pick</strong> <code>bool</code></summary>

Log a warning when a fixed pick name doesn't match any module in the bonding rules.

Default: `false`

📋 *Visible when Enable Fixed Picks is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Warn On Incompatible Fixed Pick</strong> <code>bool</code></summary>

Log a warning when a fixed pick module doesn't fit the node's orbital configuration (only relevant when behavior is Skip).

Default: `true`

📋 *Visible when Enable Fixed Picks is enabled and Incompatible behavior = Skip*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Default Fixed Pick Filter Value</strong> <code>bool</code></summary>

Default filter result when no fixed pick filters are connected. `true` means all points are eligible for fixed picking.

Default: `true`

📋 *Visible when Enable Fixed Picks is enabled*

⚡ PCG Overridable

</details>

### Fitting

<details>
<summary><strong>Scale To Fit</strong> <code>FPCGExScaleToFitDetails</code></summary>

Controls how module transforms are scaled to match Vtx bounds. See shared Scale To Fit documentation.

Default: `None` (no scaling)

⚡ PCG Overridable

</details>

<details>
<summary><strong>Justification</strong> <code>FPCGExJustificationDetails</code></summary>

Controls pivot/alignment of placed modules relative to Vtx position. See shared Justification documentation.

Default: disabled

⚡ PCG Overridable

</details>

### Inherited Settings

This node inherits settings from its base classes.

→ See [Valency Processor](../Core/PCGExValencyProcessor.md) for: Orbital Set, Bonding Rules references
→ See **Clusters Processor Settings** for: Vtx/Edge handling, cluster output options

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertices with solved module data, entry hashes, and property attributes |
| **Edges** | Points | Cluster edges (pass-through) |
| **Labels** | Params | Label data (pass-through) |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Elements/PCGExValencyStaging.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 17 documented (Solver, bUsePerClusterSeed, bOutputUnsolvableMarker, UnsolvableAttributeName, bPruneUnsolvable, bOutputModuleName, ModuleNameAttributeName, bApplyLocalTransforms, PropertiesOutput, bEnableFixedPicks, FixedPickAttribute, FixedPickSelectionMode, IncompatibleFixedPickBehavior, bWarnOnUnmatchedFixedPick, bWarnOnIncompatibleFixedPick, bDefaultFixedPickFilterValue, ScaleToFit, Justification)
Inherited Properties: Referenced to UPCGExValencyProcessorSettings
Inputs: Vtx, Edges, Labels
Outputs: Vtx, Edges, Labels
Nested Types: EPCGExFixedPickSelectionMode, EPCGExFixedPickIncompatibleBehavior, FPCGExValencyPropertyOutputSettings
-->
