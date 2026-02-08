---
icon: puzzle-piece
description: 'Entropy Solver - Entropy-based WFC solver that collapses states with fewest candidates first'
---

# Entropy Solver

Entropy-based WFC solver. Collapses states with the fewest candidates first.

## Overview

The standard Wave Function Collapse solver for the valency system. It maintains a priority queue ordered by entropy (number of valid candidates per Vtx) and collapses the most constrained Vtx first. After each collapse, constraints propagate to neighbors — filtering their candidate lists and updating entropy values. This produces natural-looking results where tightly constrained regions resolve first and inform the rest.

## How It Works

1. **Initialize Candidates**: For each unresolved Vtx, computes which modules fit based on orbital mask matching.
2. **Compute Entropy**: Entropy equals the candidate count, with neighbor resolution ratio as a tiebreaker (Vtx with more resolved neighbors break ties).
3. **Collapse Loop**: Pops the lowest-entropy Vtx from the priority queue.
4. **Select Module**: Chooses from candidates using weighted random selection. Modules below their minimum spawn count receive a weight boost.
5. **Propagate**: Filters neighbor candidate lists to maintain compatibility with the just-resolved module. Updates entropy values and re-sorts the queue.
6. **Arc Consistency**: Before committing a selection, checks that it won't leave any neighbor with zero candidates (preventing immediate contradictions).
7. **Repeat** until all Vtx are resolved or a contradiction is detected.

#### Usage Notes

- **Lowest Entropy First**: This is the classic WFC heuristic. Vtx with fewer valid candidates are more constrained and resolved first, reducing the chance of contradictions later.
- **Soft Distribution**: The weight boost for under-represented modules is a soft bias, not a guarantee. For guaranteed minimum satisfaction, use the Constraint Solver instead.
- **Deterministic**: Results are reproducible for the same input data and seed.

## Settings

<details>
<summary><strong>Minimum Spawn Weight Boost</strong> <code>float</code></summary>

Weight multiplier for modules that still need spawns to meet their minimum count. Higher values make the solver more likely to pick under-represented modules, but don't guarantee satisfaction.

Default: `2.0`

Min: `1.0`

⚡ PCG Overridable

</details>

### Inherited Settings

This solver inherits from the base solver factory.

→ See [Solver Factory](../Core/PCGExValencySolverOperation.md) for: base solver interface

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Solvers/PCGExValencyEntropySolver.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Solvers/PCGExValencyEntropySolver.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (MinimumSpawnWeightBoost)
Inherited Properties: Referenced to UPCGExValencySolverInstancedFactory
Inputs: N/A (instanced factory sub-node)
Outputs: N/A (instanced factory sub-node)
Nested Types: FWFCStateData (internal)
-->
