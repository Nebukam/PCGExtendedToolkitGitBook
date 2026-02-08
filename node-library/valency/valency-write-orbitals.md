---
icon: circle
---

# Valency : Write Orbitals

Computes and writes orbital masks and indices for Valency solving.

### Overview

The preparation step before valency solving. This node examines each cluster edge, matches it to an orbital (by direction or socket type), and writes per-Vtx orbital bitmasks and per-edge orbital indices as attributes. Downstream nodes like Valency Staging read these attributes to determine which modules can fit at each Vtx.

### How It Works

#### Direction Mode

1. **Load Orbital Set**: Loads the orbital set asset and pre-computes dot thresholds for direction matching.
2. **Match Edges**: For each edge at each Vtx, computes the edge direction and finds the orbital whose direction is within the angle threshold.
3. **Write Masks**: Builds a per-Vtx bitmask where each set bit represents an occupied orbital. Written as `PCGEx/V/Mask/{LayerName}`.
4. **Write Indices**: Writes packed orbital indices per edge as `PCGEx/V/Orbital/{LayerName}`.

#### Socket Mode

1. **Load Socket Rules**: Loads the socket rules asset and maps each socket type to an orbital index.
2. **Read Socket Attributes**: Reads packed socket references from edge attributes (written by a previous Write Module Sockets step).
3. **Map to Orbitals**: Converts socket type indices to orbital indices using the mapping table.
4. **Write Masks/Indices**: Same attribute output as direction mode, enabling the solver to work identically regardless of assignment mode.

**Usage Notes**

* **First Node in Pipeline**: This is typically the first valency node in a PCG graph. It writes the attributes that all subsequent valency nodes depend on.
* **Direction vs Socket**: Use Direction mode for the initial solve (matching edge geometry to orbital directions). Use Socket mode for chained solving (matching socket types from a previous solve pass).
* **Orbital Cache**: When enabled, builds and caches orbital lookup data for downstream nodes, avoiding redundant computation.
* **Unmatched Edges**: Edges that don't match any orbital are assigned `NO_ORBITAL_MATCH` (0xFF). Enable warnings to identify configuration issues.

### Inputs

| Pin       | Type   | Description      |
| --------- | ------ | ---------------- |
| **Vtx**   | Points | Cluster vertices |
| **Edges** | Points | Cluster edges    |

### Settings

<details>

<summary><strong>Assignment Mode</strong> <code>EPCGExOrbitalAssignmentMode</code></summary>

How orbital indices are assigned to edges.

| Option        | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| **Direction** | Match edge direction against orbital directions using dot product and angle threshold |
| **Socket**    | Match socket type from an edge attribute to an orbital index                          |

Default: `Direction`

</details>

<details>

<summary><strong>Orbital Set</strong> <code>TSoftObjectPtr&#x3C;UPCGExValencyOrbitalSet></code></summary>

The orbital set defining layer name, orbital directions, and angle threshold for matching.

Default: `None`

📋 _Visible when Assignment Mode = Direction_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Socket Rules</strong> <code>TSoftObjectPtr&#x3C;UPCGExValencySocketRules></code></summary>

Socket rules defining socket types and their mapping to orbital indices.

Default: `None`

📋 _Visible when Assignment Mode = Socket_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Socket Attribute Name</strong> <code>FName</code></summary>

Edge attribute containing packed socket references (written by Write Module Sockets or user-defined).

Default: `PCGEx/V/Socket/Main`

📋 _Visible when Assignment Mode = Socket_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Build Orbital Cache</strong> <code>bool</code></summary>

Build and cache orbital lookup data for downstream valency nodes. Avoids redundant computation in the Valency Staging node.

Default: `true`

</details>

<details>

<summary><strong>Warn On No Match</strong> <code>bool</code></summary>

Output warnings for edges that don't match any orbital direction or socket type.

Default: `true`

</details>

<details>

<summary><strong>Quiet Missing Orbital Set</strong> <code>bool</code></summary>

Suppress errors when no orbital set is assigned in Direction mode.

Default: `false`

</details>

<details>

<summary><strong>Quiet Missing Socket Attribute</strong> <code>bool</code></summary>

Suppress warnings when the socket attribute is missing from edges in Socket mode.

Default: `false`

📋 _Visible when Assignment Mode = Socket_

</details>

#### Inherited Settings

This node inherits cluster processing settings from its base class.

→ See **Clusters Processor Settings** for: Vtx/Edge handling, cluster output options

### Outputs

| Pin       | Type   | Description                                                                 |
| --------- | ------ | --------------------------------------------------------------------------- |
| **Vtx**   | Points | Cluster vertices with orbital mask attributes (`PCGEx/V/Mask/{LayerName}`)  |
| **Edges** | Points | Cluster edges with orbital index attributes (`PCGEx/V/Orbital/{LayerName}`) |

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Elements/PCGExWriteValencyOrbitals.h)


