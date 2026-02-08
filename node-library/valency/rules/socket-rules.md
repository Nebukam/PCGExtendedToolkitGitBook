---
icon: book
---

# Socket Rules

Defines socket types and their compatibility rules for non-directional valency connections. The socket-based counterpart to Orbital Sets.

### Overview

Socket Rules is a `UDataAsset` that defines named socket types and a compatibility matrix describing which types can connect. While Orbital Sets match connections by spatial direction, sockets match by type identity — making them suited for connections where direction doesn't matter or where you want explicit control over which module ports can pair.

### How It Works

1. **Define Socket Types**: Each entry names a socket type (e.g., "Input", "Output", "Power") with an optional default transform offset and debug color.
2. **Set Compatibility**: The compatibility matrix declares which socket types can connect to each other. Stored as per-type bitmasks for fast lookup.
3. **Module Assignment**: Modules declare sockets (via `FPCGExValencyModuleSocket` entries) that reference these type names.
4. **Compilation**: During bonding rules compilation, each socket type is assigned an orbital index (0–63). The solver then treats sockets identically to directional orbitals.

**Usage Notes**

* **Non-Directional**: Sockets are matched by type compatibility, not spatial direction. Use Orbital Sets for directional connections and Socket Rules for typed connections.
* **Chained Solving**: Sockets enable multi-pass solving — solve pass A writes module sockets, then pass B solves against those sockets using different rules.
* **Mesh Socket Extraction**: Socket types can auto-match against `UStaticMesh` sockets by name or tag, enabling automatic socket discovery from mesh assets.
* **Max 64 Types**: Socket types are stored as bitmasks, limiting each Socket Rules asset to 64 types.
* **Bidirectional by Default**: Compatibility is set per direction. Use `SetCompatibility` with `bBidirectional = true` for symmetric connections (e.g., Input↔Output).

### Settings

<details>

<summary><strong>Layer Name</strong> <code>FName</code></summary>

Name of this socket layer. Determines attribute naming — socket references are written as `PCGEx/V/Socket/{LayerName}`.

Default: `Main`

</details>

<details>

<summary><strong>Socket Types</strong> <code>TArray&#x3C;FPCGExValencySocketDefinition></code></summary>

The list of socket type definitions (max 64). Each entry contains:

| Field              | Type           | Description                                                                             |
| ------------------ | -------------- | --------------------------------------------------------------------------------------- |
| **Socket Type**    | `FName`        | Type name used for matching and compatibility lookup                                    |
| **Display Name**   | `FText`        | Optional UI name. Falls back to Socket Type if empty                                    |
| **Default Offset** | `FTransform`   | Default transform offset relative to module origin. Can be overridden per-module socket |
| **Debug Color**    | `FLinearColor` | Color for debug visualization                                                           |

Default: empty

</details>

<details>

<summary><strong>Compatibility Matrix</strong> <code>TArray&#x3C;int64></code></summary>

Per-type bitmasks defining which socket types can connect. Index corresponds to socket type index; bit N set means compatible with socket type N.

Example with types \["Input", "Output", "BiDir"]:

* `Matrix[0] = 0b010` — Input compatible with Output
* `Matrix[1] = 0b001` — Output compatible with Input
* `Matrix[2] = 0b100` — BiDir compatible with itself

Default: empty (populated during compilation from editor-friendly CompatibleTypeIds)

</details>

***

📦 **Module**: `PCGExElementsValency` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Core/PCGExValencySocketRules.h)
