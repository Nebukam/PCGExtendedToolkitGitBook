---
icon: puzzle-piece
description: 'Priority Solver - Priority-based WFC solver that collapses states in order of an attribute value'
---

# Priority Solver

Priority-based WFC solver. Collapses states in order of an attribute value (highest first).

## Overview

A solver variant that uses a point attribute to determine collapse order instead of entropy. Vtx with the highest priority value are solved first, giving you explicit control over which parts of the cluster resolve before others. Within equal priorities, the solver falls back to entropy (fewest candidates) as a tiebreaker.

## How It Works

1. **Read Priority**: Pre-loads the priority attribute from Vtx data and builds a sorted node list (highest priority first).
2. **Initialize Candidates**: For each unresolved Vtx, computes which modules fit based on orbital mask matching.
3. **Collapse Loop**: Walks the priority-sorted list, picking the next unresolved Vtx.
4. **Select Module**: Chooses from candidates using weighted random selection. Modules below their minimum spawn count receive a weight boost.
5. **Propagate**: Filters neighbor candidate lists to maintain compatibility. Unlike the Entropy Solver, the queue order doesn't change — it stays priority-driven.
6. **Arc Consistency**: Before committing a selection, checks that it won't leave any neighbor with zero candidates.
7. **Repeat** until all Vtx are resolved or a contradiction is detected.

#### Usage Notes

- **User-Controlled Order**: Paint or compute a priority attribute to control exactly which regions solve first. High-traffic intersections, structural anchors, or visually important Vtx can be prioritized.
- **Invert Priority**: Enable to treat lower values as higher priority (useful when your attribute represents cost or distance rather than importance).
- **Soft Distribution**: Like the Entropy Solver, the weight boost for minimum spawns is a soft bias. Use the Constraint Solver for guaranteed satisfaction.
- **Attribute Pre-Loading**: The priority attribute is pre-loaded during buffer registration, so it must exist on the Vtx data before the node executes.

## Settings

<details>
<summary><strong>Priority Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The Vtx attribute to read priority values from. Higher values are solved first (unless Invert Priority is enabled). Supports any numeric attribute type.

⚡ PCG Overridable

</details>

<details>
<summary><strong>Minimum Spawn Weight Boost</strong> <code>float</code></summary>

Weight multiplier for modules that still need spawns to meet their minimum count. Higher values make the solver more likely to pick under-represented modules.

Default: `2.0`

Min: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert Priority</strong> <code>bool</code></summary>

When enabled, lower attribute values are treated as higher priority. Useful when the attribute represents cost, distance, or another metric where smaller is more important.

Default: `false`

⚡ PCG Overridable

</details>

### Inherited Settings

This solver inherits from the base solver factory.

→ See [Solver Factory](../Core/PCGExValencySolverOperation.md) for: base solver interface

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Solvers/PCGExValencyPrioritySolver.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Solvers/PCGExValencyPrioritySolver.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 3 documented (PriorityAttribute, MinimumSpawnWeightBoost, bInvertPriority)
Inherited Properties: Referenced to UPCGExValencySolverInstancedFactory
Inputs: N/A (instanced factory sub-node)
Outputs: N/A (instanced factory sub-node)
Nested Types: FPrioritySolverAllocations, FPriorityStateData (internal)
-->
