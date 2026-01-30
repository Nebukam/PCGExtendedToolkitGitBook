---
icon: diagram-project
description: 'Refine : Line Trace'
---

# Refine : Line Trace

Remove edges that are **blocked by world geometry** using collision line traces.

## Overview

Line Trace refinement performs collision queries along each edge and removes edges that hit world geometry. This is useful for creating visibility graphs, removing edges that pass through walls, or filtering connections by physical accessibility.

## Key Behavior

```
Before:                      After Line Trace:
    ●───────●                    ●       ●
    │ ┌───┐ │                    │ ┌───┐ │
    │ │   │ │        →           │ │   │ │
    │ └───┘ │                    │ └───┘ │
    ●───────●                    ●       ●

 Edge through wall            Edge blocked → removed
```

## How It Works

1. **For each edge**: Cast a line from start to end vertex
2. **Check collision**: Test against configured collision channels
3. **Two-way check** (optional): Also test from end to start (handles backfaces)
4. **Scatter** (optional): Multiple traces around endpoint for reliability
5. **Mark validity**: Remove edges that hit geometry

## Settings

### Collision Settings

<details>
<summary><strong>Collision Settings</strong> <code>FPCGExCollisionDetails</code></summary>

Configure which objects and channels to test against.

- **Collision Channel**: Physics channel to trace against
- **Collision Profile**: Named collision profile to use
- **Ignore Actors**: Actor references to ignore during traces

⚡ PCG Overridable

</details>

### Trace Options

<details>
<summary><strong>Two Way Check</strong> <code>bool</code></summary>

If the first line trace fails (no hit), try the reverse direction. This helps catch backfacing geometry that might be missed in one direction.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Scatter</strong> <code>bool</code></summary>

Cast multiple traces around the endpoint to improve hit detection reliability. Useful when edges nearly graze geometry.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Samples</strong> <code>double</code></summary>

Number of scattered traces to cast.

Default: `10`

⚡ PCG Overridable
📋 Visible when: `Scatter = true`

</details>

<details>
<summary><strong>Radius</strong> <code>double</code></summary>

Radius around the endpoint for scattered traces.

Default: `10`

⚡ PCG Overridable
📋 Visible when: `Scatter = true`

</details>

### Output

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the refinement result. When enabled, keeps edges that hit geometry and removes clear edges.

Default: `false`

⚡ PCG Overridable

</details>

## Performance

**Note**: This operation must execute on the main thread due to physics queries. It can be expensive for large clusters.

## Examples

**Visibility graph**:
- Trace against all static geometry
- Result: Only edges with clear line of sight

**Walkable connections**:
- Trace against Pawn channel
- Result: Edges a character could traverse

---

📦 **Parent**: [Refine Edges](./README.md) · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsClusters/Public/Elements/Refining/PCGExEdgeRefineLineTrace.h)
