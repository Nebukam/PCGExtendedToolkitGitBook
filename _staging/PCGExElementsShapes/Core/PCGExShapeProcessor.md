---
icon: gears
description: 'Shape Processor - Base processor for shape generation'
---

# Shape Processor

Base processor that generates points from shape builder definitions.

## Overview

This is the abstract base class for shape processing nodes. It consumes shape builder factories and generates point collections according to the shape definitions. The primary implementation is the Create Shapes node. The output mode controls how generated shapes are organized into point collections.

## How It Works

1. **Load Builders**: Receives shape builder factories from input.
2. **Process Seeds**: Iterates through source seed points.
3. **Generate Shapes**: Creates points using each shape builder.
4. **Output Results**: Organizes output based on output mode.

#### Usage Notes

- **Abstract Base**: This is extended by concrete implementations like Create Shapes.
- **Output Modes**: Control how shapes are grouped in output collections.
- **Multiple Builders**: Can process multiple shape builder types simultaneously.

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Points | Seed points for shape generation |
| **Shape Builders** | Shape | Shape builder definitions |
| **Point Filters** | Params | Optional filters for seed points |

## Settings

### Output Configuration

<details>
<summary><strong>Output Mode</strong> <code>EPCGExShapeOutputMode</code></summary>

How to organize generated shapes into output collections.

| Option | Description |
|--------|-------------|
| **Per Dataset** | All shapes merged into one collection per input |
| **Per Seed** | One collection per seed point |
| **Per Shape** | One collection per shape builder definition |

Default: `Per Seed`

⚡ PCG Overridable

</details>

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Points | Generated shape points |

---

📦 **Module**: `PCGExElementsShapes` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsShapes/Public/Core/PCGExShapeProcessor.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented
  - OutputMode
Inherited Properties: From UPCGExPointsProcessorSettings
Inputs: In (Points), Shape Builders (Shape), Point Filters (Params)
Outputs: Out (Points)
Consumed Factories: FPCGExDataTypeInfoShape
Nested Types: EPCGExShapeOutputMode
-->
