---
icon: code
description: 'Cluster : Build Custom Graph - Create clusters using custom blueprint objects'
---

# Cluster : Build Custom Graph

Create clusters using custom blueprint objects.

// TODO : Need more meat + guide one pager for custom graph builder workflow

## Overview

This node enables programmatic creation of cluster graphs through Blueprint-based builders. Rather than generating topology from geometric algorithms, it allows you to define graph connectivity through custom logic - whether from external data sources, procedural algorithms, or any other computation you can express in Blueprints.

## How It Works

1. **Initialization**: The custom builder's `Initialize` function is called to set up graph settings
2. **Graph Building**: For each graph settings object, `BuildGraph` is called where you define nodes and edges
3. **Attribute Initialization**: `InitPointAttributes` is called to set up default attribute values
4. **Point Processing**: `UpdateNodePoint` is called for each node to set transforms and properties
5. **Graph Output**: The final cluster is built and output

#### Usage Notes

- **Blueprint Extension**: Create a Blueprint child of `UPCGExCustomGraphBuilder` and override the execution functions.
- **Multi-threaded Context**: `BuildGraph` and `UpdateNodePoint` run in parallel - use the provided settings object which is thread-safe.
- **Actor References**: Optionally pass actors to the builder for fetching component data during initialization.

{% hint style="info" %}
### Creating Custom Builders

1. Create a new Blueprint inheriting from `[PCGEx] Custom Graph Builder`
2. Override `Initialize` to create one or more Graph Settings objects
3. Override `BuildGraph` to add edges using `AddEdge(StartIdx, EndIdx)`
4. Optionally override `UpdateNodePoint` to customize point transforms
{% endhint %}

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Optional actor reference points (when Mode = Actor References) |

## Settings

### Source Mode

<details>
<summary><strong>Mode</strong> <code>EPCGExCustomGraphActorSourceMode</code></summary>

How to source actors for the builder.

| Option | Description |
|--------|-------------|
| **Owner** | Use the PCG Component's owning actor |
| **Actor References** | Use actors from point attribute references |

Default: `Owner`

</details>

<details>
<summary><strong>Actor Reference Attribute</strong> <code>FName</code></summary>

Attribute name containing actor references when Mode = Actor References.

Default: `ActorReference`

*Visible when Mode = Actor References*

</details>

### Builder

<details>
<summary><strong>Builder</strong> <code>UPCGExCustomGraphBuilder</code></summary>

The custom graph builder instance. This is where you assign your custom Blueprint builder class.

The builder provides these overridable functions:
- **Initialize**: Called once to set up graph settings
- **BuildGraph**: Called per-graph to define nodes and edges
- **CreateGraphSettings**: Helper to create new graph settings objects

</details>

<details>
<summary><strong>Cluster Output Settings</strong> <code>FPCGExGraphBuilderDetails</code></summary>

Write edge midpoint position as an attribute on edge points.

//→ See TODO FPCGExGraphBuilderDetails

</details>

### Warnings and Errors

<details>
<summary><strong>Quiet Unprocessed Settings Warning</strong> <code>bool</code></summary>

Suppress warnings when graph settings remain unprocessed.

Default: `false`

</details>

<details>
<summary><strong>Quiet Failed Build Graph Warning</strong> <code>bool</code></summary>

Suppress warnings when BuildGraph returns false.

Default: `false`

</details>

## Blueprint API

The `UPCGExCustomGraphSettings` class provides these Blueprint-callable functions:

### Edge Management
- `AddEdge(StartIdx, EndIdx)` - Create an edge between two nodes
- `RemoveEdge(StartIdx, EndIdx)` - Remove an edge between two nodes

### Attribute Initialization
- `InitNode[Type](AttributeName, Value)` - Initialize attribute default values
  - Supported types: Int32, Int64, Float, Double, Vector2, Vector, Vector4, Quat, Transform, String, Bool, Rotator, Name, SoftObjectPath, SoftClassPath

### Attribute Setting
- `SetNode[Type](AttributeName, NodeIdx, Value)` - Set attribute value for a specific node
  - Same types as initialization functions

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Vtx** | Points | Cluster vertex points |
| **Edges** | Points | Cluster edge data |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsClusters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/PCGExBuildCustomGraph.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 6 documented
Inherited Properties: Referenced to UPCGExPointsProcessorSettings
Inputs: In (optional for actor references)
Outputs: Vtx, Edges
-->
