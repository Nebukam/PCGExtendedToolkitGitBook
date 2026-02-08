---
icon: puzzle-piece
description: 'Valency Processor - Abstract base for all valency cluster processing nodes'
---

# Valency Processor

Abstract base class for PCG nodes that operate on clusters with valency data. Provides shared Orbital Set and Bonding Rules asset references.

## Overview

This is the common base for all valency-aware cluster processors. It extends the standard cluster processor with two asset references — an Orbital Set (for direction matching) and a Bonding Rules asset (for solver data). Derived nodes declare which assets they require; properties that aren't needed are hidden automatically.

## How It Works

1. **Asset Loading**: On boot, the node loads the referenced Orbital Set and/or Bonding Rules asset (thread-safe blocking load).
2. **Validation**: Checks that required assets are present and valid. Missing assets produce warnings unless suppressed.
3. **Orbital Cache**: Builds a direction resolver from the Orbital Set, pre-computing dot thresholds for fast orbital matching during processing.
4. **Processing**: Derived nodes receive loaded assets and the orbital cache through the execution context.

#### Usage Notes

- **Abstract Base**: This class is not used directly. Concrete nodes like **Write Valency Orbitals**, **Valency Staging**, and solver nodes derive from it.
- **Conditional Visibility**: The Orbital Set and Bonding Rules properties only appear on nodes that declare a need for them (via `WantsOrbitalSet()` and `WantsBondingRules()` overrides).
- **Inherits Cluster Processing**: All standard cluster processor settings (Vtx/Edge inputs, cluster handling) are inherited from `UPCGExClustersProcessorSettings`.

## Settings

<details>
<summary><strong>Orbital Set</strong> <code>TSoftObjectPtr&lt;UPCGExValencyOrbitalSet&gt;</code></summary>

Reference to the orbital set asset that defines which layer's orbital directions to use for this operation.

Default: `None`

📋 *Visible when the derived node requires an orbital set*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Bonding Rules</strong> <code>TSoftObjectPtr&lt;UPCGExValencyBondingRules&gt;</code></summary>

Reference to the bonding rules data asset containing compiled module definitions, neighbor relationships, and constraint data.

Default: `None`

📋 *Visible when the derived node requires bonding rules*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Quiet Missing Orbital Set</strong> <code>bool</code></summary>

Suppress warnings when no orbital set is assigned. Useful when the orbital set is intentionally omitted in a particular configuration.

Default: `false`

📋 *Visible when the derived node requires an orbital set*

</details>

<details>
<summary><strong>Quiet Missing Bonding Rules</strong> <code>bool</code></summary>

Suppress warnings when no bonding rules asset is assigned.

Default: `false`

📋 *Visible when the derived node requires bonding rules*

</details>

### Inherited Settings

This node inherits cluster processing settings from its base class.

→ See **Clusters Processor Settings** for: Vtx/Edge handling, cluster output options, etc.

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Core/PCGExValencyProcessor.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 4 documented (OrbitalSet, BondingRules, bQuietMissingOrbitalSet, bQuietMissingBondingRules)
Inherited Properties: Referenced to UPCGExClustersProcessorSettings
Inputs: Inherited from cluster processor
Outputs: Inherited from cluster processor
Nested Types: EPCGExOptionState, EPCGExExecutionPolicy (inherited enums, not valency-specific)
-->
