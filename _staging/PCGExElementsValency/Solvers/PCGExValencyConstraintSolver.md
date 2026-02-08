---
icon: puzzle-piece
description: 'Constraint Solver - Constraint-aware WFC solver with guaranteed min spawn satisfaction'
---

# Constraint Solver

Constraint-aware WFC solver with guaranteed minimum spawn satisfaction when possible.

## Overview

An enhanced entropy-based solver that tracks available placement slots per module and forces selection when a module is at risk of not meeting its minimum spawn count. It uses the same lowest-entropy-first collapse order as the Entropy Solver, but adds urgency-based boosting and forced picks to satisfy distribution constraints.

## How It Works

1. **Initialize Candidates**: For each unresolved Vtx, computes the set of modules whose orbital masks fit the node's orbital configuration.
2. **Build Slot Budget**: Counts how many unresolved Vtx each module could still fit, tracking when minimums are at risk.
3. **Collapse Loop**: Pops the lowest-entropy (fewest candidates) Vtx from the priority queue.
4. **Constraint-Aware Selection**: Checks if any candidate *must* be selected now (urgency >= 1.0, meaning no slots to spare). If so, forces that module. Otherwise, selects via weighted random with urgency-based weight boosting.
5. **Propagation**: After collapsing a Vtx, propagates constraints to neighbors — filtering their candidates to maintain compatibility. Updates slot budget and entropy.
6. **Repeat** until all Vtx are resolved or a contradiction is detected.

#### Usage Notes

- **Guaranteed Minimums**: Unlike the Entropy Solver, this solver actively tracks slot availability and forces module selection when necessary to meet minimum spawn counts defined in the bonding rules.
- **Early Contradiction Detection**: Detects unsolvable states early when urgency exceeds 1.0 (module needs more spawns than available slots).
- **Arc Consistency**: Checks whether selecting a candidate would leave any neighbor with zero valid candidates, avoiding cascading contradictions.
- **Higher Overhead**: Slot budget tracking adds computational cost compared to the simpler Entropy Solver. Use when distribution constraints matter.

## Settings

<details>
<summary><strong>Urgency Boost Multiplier</strong> <code>float</code></summary>

Multiplier for urgency-based weight boosting during selection. When a module is approaching its minimum spawn deadline, its selection weight is boosted by `1 + urgency * UrgencyBoostMultiplier`. Higher values more aggressively prioritize constrained modules.

Default: `10.0`

Min: `1.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Minimum Spawn Weight Boost</strong> <code>float</code></summary>

Fallback weight multiplier for modules that still need spawns to meet their minimum. Applied when urgency is below 1.0 (not yet critical). Acts as a gentle bias toward under-represented modules.

Default: `2.0`

Min: `1.0`

⚡ PCG Overridable

</details>

### Inherited Settings

This solver inherits from the base solver factory.

→ See [Solver Factory](../Core/PCGExValencySolverOperation.md) for: base solver interface

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Solvers/PCGExValencyConstraintSolver.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Solvers/PCGExValencyConstraintSolver.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (UrgencyBoostMultiplier, MinimumSpawnWeightBoost)
Inherited Properties: Referenced to UPCGExValencySolverInstancedFactory
Inputs: N/A (instanced factory sub-node)
Outputs: N/A (instanced factory sub-node)
Nested Types: FConstraintStateData (internal), FSlotBudget (from base)
-->
