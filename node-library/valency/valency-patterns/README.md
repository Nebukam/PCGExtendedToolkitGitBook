---
icon: circle
---

# Valency : Patterns

Detects patterns in solved clusters and transforms matched points.

### Overview

This node scans a solved cluster for topological patterns defined in the Bonding Rules asset. It uses a pluggable matcher sub-node to identify which pattern appears where, then annotates matched points with pattern name and match index attributes. Optionally outputs matched points to a secondary pin for further processing.

### How It Works

1. **Load Patterns**: Reads compiled pattern definitions from the Bonding Rules asset.
2. **Build Orbital Cache**: Constructs orbital mapping from the cluster's Vtx and edge data.
3. **Match**: The connected matcher sub-node scans cluster nodes against the pattern set, identifying topology matches.
4. **Annotate**: Writes `PatternName` and `PatternMatchIndex` attributes to matched Vtx.
5. **Output**: Passes through the cluster with annotations. If enabled, matched points are also output on a secondary pin.

**Usage Notes**

* **Requires Solved Cluster**: This node operates on clusters that have already been solved by a valency solver (e.g., Valency Staging). It reads the module index data written during solving.
* **Matcher Sub-Node**: Connect a pattern matcher (entropy, priority, etc.) to the Matcher pin to control matching strategy. Without a matcher, the node warns and skips matching.
* **Exclusive vs Additive**: Patterns compiled as exclusive claim their matched nodes — subsequent matchers in a chain won't re-match them. Additive patterns allow overlapping matches.

### Inputs

| Pin         | Type     | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| **Vtx**     | Points   | Cluster vertices (with solved module data)             |
| **Edges**   | Points   | Cluster edges                                          |
| **Matcher** | Sub-node | Pattern matcher factory defining the matching strategy |

### Settings

<details>

<summary><strong>Output Matched Points</strong> <code>bool</code></summary>

When enabled, outputs matched points to a secondary output pin. Useful for isolating matched regions for separate processing.

Default: `true`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pattern Name Attribute Name</strong> <code>FName</code></summary>

Name of the attribute written to matched Vtx containing the pattern name string.

Default: `PatternName`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pattern Match Index Attribute Name</strong> <code>FName</code></summary>

Name of the attribute written to matched Vtx containing the match occurrence index — distinguishes between multiple instances of the same pattern.

Default: `PatternMatchIndex`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet No Patterns</strong> <code>bool</code></summary>

Suppress warnings when the Bonding Rules asset contains no compiled patterns.

Default: `false`

</details>

<details>

<summary><strong>Quiet No Matcher</strong> <code>bool</code></summary>

Suppress warnings when no matcher sub-node is connected.

Default: `false`

</details>

#### Inherited Settings

This node inherits settings from its base classes.

→ See Valency Processor for: Orbital Set, Bonding Rules references → See **Clusters Processor Settings** for: Vtx/Edge handling, cluster output options

### Outputs

| Pin         | Type   | Description                                                 |
| ----------- | ------ | ----------------------------------------------------------- |
| **Vtx**     | Points | Cluster vertices with pattern annotations                   |
| **Edges**   | Points | Cluster edges (pass-through)                                |
| **Matched** | Points | Matched points only (when Output Matched Points is enabled) |

***

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsValency-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Elements/PCGExValencyPatternReplacement.h)
