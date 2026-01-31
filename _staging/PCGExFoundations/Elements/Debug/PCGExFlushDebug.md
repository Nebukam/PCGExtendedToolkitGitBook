---
icon: broom
description: 'Flush Debug - Clears persistent debug lines from the viewport.'
---

# Flush Debug

Clears persistent debug lines from the viewport.

## Overview

This utility node removes all persistent debug drawing elements from the editor viewport. It provides a clean way to clear accumulated debug visualizations without manually toggling individual debug nodes or restarting the editor. The node can be placed at strategic points in the graph to reset debug state between processing stages.

## How It Works

1. **Debug Check**: Verifies if debug drawing is enabled (bPCGExDebug)
2. **Flush Command**: Issues viewport clear command for persistent debug lines
3. **Passthrough**: Forwards input data to output unchanged


#### Usage Notes

- **When to Use**: Place this node before Draw Attributes nodes when you want to start with a clean viewport, or after debug-heavy sections to prevent visual clutter.
- **Performance**: Flushing debug lines is a lightweight operation with minimal performance impact.
- **Editor Only**: Debug drawing only affects editor viewports and has no effect in Play mode or builds.

## Behavior

#### Before Flush:
```
Viewport contains debug lines from previous nodes:
- Direction vectors from DrawAttributes node
- Connection lines from pathfinding visualization
- Sphere markers from position debugging
```

#### After Flush Debug:
```
All persistent debug lines cleared from viewport
Viewport is clean for new debug visualizations
```

#### Typical Usage Pattern:
```
[Data Processing]
  ↓
[Draw Attributes] → Debug lines appear
  ↓
[More Processing]
  ↓
[Flush Debug] → Clear old debug lines
  ↓
[Draw Attributes] → New debug lines without clutter
```

Good for: viewport cleanup, debug state reset, iterative debugging, clearing accumulated visualizations

## Settings

<details>
<summary><strong>PCGEx Debug</strong> <code>bool</code></summary>

Master toggle for debug flushing.

When enabled, clears persistent debug lines on execution. When disabled, the node does nothing (passthrough only).

Useful for external control in subgraphs or conditional debug clearing.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Custom Color</strong> <code>FLinearColor</code></summary>

Custom color for the node title in the graph editor.

Cosmetic setting to help visually identify debug nodes in complex graphs.

Default: `Magenta (1.0, 0.0, 1.0, 1.0)`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Any | Input data to pass through (accepts any PCG data type) |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Same as input | Pass-through of input data (unmodified) |

---

📦 **Module**: `PCGExFoundations` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Debug/PCGExFlushDebug.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (bPCGExDebug, CustomColor)
Inherited Properties: UPCGExSettings base class
Inputs: Any PCG data type
Outputs: Pass-through of input
Node Type: Debug utility
Primary Function: Clear persistent debug lines from viewport
Use Cases: Viewport cleanup, debug reset, visualization management
Editor Only: No runtime effect
-->
