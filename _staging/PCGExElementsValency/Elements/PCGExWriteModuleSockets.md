---
icon: diagram-project
description: 'Valency : Write Module Sockets - Outputs module sockets as points for chained solving'
---

# Valency : Write Module Sockets

Outputs module sockets as points for chained solving.

## Overview

After a cluster has been solved by Valency Staging, this node reads the solved module assignments and emits one new point per output socket defined on each module. The output points carry packed socket references and transforms, enabling a second solving pass that connects modules via typed sockets rather than directional orbitals.

## How It Works

1. **Read Module Data**: Reads the packed module data attribute written by Valency Staging.
2. **Resolve Sockets**: For each solved Vtx, looks up the assigned module's socket definitions in the Bonding Rules.
3. **Emit Socket Points**: Creates one output point per output socket, positioned at the Vtx transform combined with the socket's offset.
4. **Write Attributes**: Each output point receives a packed socket reference (rules index + socket index), and optionally the source vertex index, socket name, and socket type.

#### Usage Notes

- **Chained Solving**: This node bridges two solving passes. The first pass assigns modules via orbitals; this node then outputs socket points that feed into a second Write Valency Orbitals → Staging chain operating in socket mode.
- **Socket Rules Required**: References a Socket Rules asset that defines socket types and compatibility. The socket rules determine which socket types can connect in the downstream pass.
- **Output Sockets Only**: Only sockets marked as output sockets (`bIsOutputSocket = true`) on the module definition generate points. Input sockets are consumed by the downstream solver.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Solved cluster vertices (with module data attributes) |
| **Edges** | Points | Cluster edges |

## Settings

<details>
<summary><strong>Socket Rules</strong> <code>TSoftObjectPtr&lt;UPCGExValencySocketRules&gt;</code></summary>

Reference to the socket rules asset defining socket types and compatibility matrix.

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Module Data Attribute Name</strong> <code>FName</code></summary>

Name of the attribute containing packed module data from the Valency Staging output.

Default: `PCGEx/V/Module/Main`

⚡ PCG Overridable

</details>

### Output

<details>
<summary><strong>Socket Output Attribute Name</strong> <code>FName</code></summary>

Name of the packed socket reference attribute written to output points.

Default: `PCGEx/V/Socket/Main`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Source Index</strong> <code>bool</code></summary>

Write an attribute containing the original Vtx index that this socket came from.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Source Index Attribute Name</strong> <code>FName</code></summary>

Attribute name for the source vertex index.

Default: `SourceIndex`

📋 *Visible when Output Source Index is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Socket Name</strong> <code>bool</code></summary>

Write the socket instance name as an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Socket Name Attribute Name</strong> <code>FName</code></summary>

Attribute name for the socket name.

Default: `SocketName`

📋 *Visible when Output Socket Name is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output Socket Type</strong> <code>bool</code></summary>

Write the socket type name as an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Socket Type Attribute Name</strong> <code>FName</code></summary>

Attribute name for the socket type.

Default: `SocketType`

📋 *Visible when Output Socket Type is enabled*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Quiet Missing Socket Rules</strong> <code>bool</code></summary>

Suppress warnings when no Socket Rules asset is assigned.

Default: `false`

</details>

### Inherited Settings

This node inherits settings from its base classes.

→ See [Valency Processor](../Core/PCGExValencyProcessor.md) for: Bonding Rules reference
→ See **Clusters Processor Settings** for: Vtx/Edge handling, cluster output options

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Sockets** | Points | One point per output socket, with packed socket references and transforms |

---

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsValency-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Elements/PCGExWriteModuleSockets.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Elements/PCGExWriteModuleSockets.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 10 documented (SocketRules, ModuleDataAttributeName, SocketOutputAttributeName, bOutputSourceIndex, SourceIndexAttributeName, bOutputSocketName, SocketNameAttributeName, bOutputSocketType, SocketTypeAttributeName, bQuietMissingSocketRules)
Inherited Properties: Referenced to UPCGExValencyProcessorSettings
Inputs: Vtx, Edges
Outputs: Sockets
Nested Types: None unique to this node
-->
