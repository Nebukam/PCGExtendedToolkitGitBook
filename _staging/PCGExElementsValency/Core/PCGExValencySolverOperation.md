---
icon: puzzle-piece
description: 'Solver Factory - Abstract base factory for valency constraint solver operations'
---

# Solver Factory

Abstract base factory for creating valency solver operations. Concrete solvers (entropy, priority, etc.) derive from this to implement different constraint-solving strategies.

## Overview

This is the base factory class for valency solvers. A solver receives cluster nodes with orbital masks and neighbor mappings, then assigns a module to each node such that all connectivity constraints are satisfied. The factory creates the solver operation instance, and optionally pre-loads point attributes needed by the solver (e.g., priority values).

## How It Works

1. **Factory Creation**: The Valency Staging node instantiates the solver factory from its sub-node pin.
2. **Buffer Registration**: The factory declares which vertex attributes the solver needs pre-loaded (override `RegisterPrimaryBuffersDependencies`).
3. **Allocations**: After buffers load, the factory builds solver-specific data structures from vertex data (override `CreateAllocations`).
4. **Operation Creation**: `CreateOperation()` returns a solver operation instance.
5. **Solving**: The operation receives compiled bonding rules, valency states, and the orbital cache, then runs its algorithm to assign modules.

#### Usage Notes

- **Abstract Base**: This class is not used directly. Concrete solver factories (Entropy Solver, Priority Solver, etc.) derive from it.
- **Distribution Constraints**: All solvers share a `FDistributionTracker` that enforces per-module min/max spawn counts defined in the bonding rules.
- **Weighted Selection**: The base solver provides `SelectWeightedRandom()` which respects module weights and automatically boosts modules that need more spawns to meet their minimum.
- **Determinism**: Solvers use a seeded random stream, producing reproducible results for the same input and seed.

## Settings

No settings on the base factory itself. Solver-specific settings are defined on derived factories.

### Inherited Settings

This factory inherits common settings from `UPCGExInstancedFactory`.

---

📦 **Module**: `PCGExElementsValency` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Core/PCGExValencySolverOperation.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 (abstract base, no own UPROPERTYs)
Inherited Properties: Referenced to UPCGExInstancedFactory
Inputs: N/A (factory, not a PCG node)
Outputs: N/A (factory, not a PCG node)
Nested Types: FSolverAllocations, FDistributionTracker, FSolveResult, FSlotBudget (internal runtime types)
-->
