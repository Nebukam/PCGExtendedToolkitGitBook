---
icon: circle-dashed
---

# FC : Attribute Threshold

Stop diffusion when vertex/edge attribute crosses a threshold.

### Overview

This fill control sub-node evaluates an attribute value against a threshold using a comparison operator. When the comparison fails, the candidate vertex or edge is rejected and diffusion does not continue in that direction. This allows creating boundaries in the flood fill based on attribute values.

### How It Works

1. **Read Attribute**: For each candidate, reads the specified attribute from the vertex or edge.
2. **Compare**: Tests the value against the threshold using the selected comparison operator.
3. **Validate**: If the comparison succeeds, the candidate is valid. If it fails, diffusion stops.

**Usage Notes**

* **Boundary Creation**: Use this to stop diffusion at attribute value boundaries (e.g., stop at vertices where height > 100).
* **Seed Validation**: When applied at the Seed step, this can filter which seed points are valid starting locations.
* **Probe vs Candidate**: This control validates both probes (initial checks) and candidates (expansion checks).

### Behavior

```
Threshold Check (Comparison: StrictlySmaller, Threshold: 0.5):

Cluster with attribute values:
  [0.2]───[0.4]───[0.3]───[0.6]───[0.8]
                           ↑
                     Stops here (0.6 >= 0.5)

Seed → [0.2] ✓ → [0.4] ✓ → [0.3] ✓ → [0.6] ✗ STOP

Different Comparisons:
  StrictlyGreater (> 0.5):  Only accept values above threshold
  StrictlySmaller (< 0.5):  Only accept values below threshold
  Equals (== 0.5):          Only accept exact matches
  NotEquals (!= 0.5):       Accept any value except threshold
```

### Settings

<details>

<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to check against the threshold.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Source</strong> <code>EPCGExClusterElement</code></summary>

Where to read the attribute from.

| Option   | Description                |
| -------- | -------------------------- |
| **Vtx**  | Read from cluster vertices |
| **Edge** | Read from cluster edges    |

Default: `Vtx`

</details>

<details>

<summary><strong>Threshold Input</strong> <code>EPCGExInputValueType</code></summary>

Whether the threshold comes from a constant or attribute.

| Option        | Description                      |
| ------------- | -------------------------------- |
| **Constant**  | Use a fixed threshold value      |
| **Attribute** | Read threshold from an attribute |

Default: `Constant`

</details>

<details>

<summary><strong>Threshold (Attr)</strong> <code>FName</code></summary>

Attribute name to read the threshold from.

Default: `Threshold`

📋 _Visible when Threshold Input = Attribute_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Threshold</strong> <code>double</code></summary>

The threshold value to compare against.

Default: `0.5`

📋 _Visible when Threshold Input = Constant_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>EPCGExComparison</code></summary>

The comparison operator. Candidate is valid if: `AttributeValue [Comparison] Threshold`

| Option              | Description                                  |
| ------------------- | -------------------------------------------- |
| **StrictlyGreater** | Valid if value > threshold                   |
| **StrictlySmaller** | Valid if value < threshold                   |
| **GreaterOrEquals** | Valid if value >= threshold                  |
| **SmallerOrEquals** | Valid if value <= threshold                  |
| **Equals**          | Valid if value == threshold (with tolerance) |
| **NotEquals**       | Valid if value != threshold (with tolerance) |

Default: `StrictlySmaller`

</details>

#### Inherited Settings

→ See Fill Controls Base for: Source, Steps

***

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsFloodFill-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsFloodFill/Public/FillControls/PCGExFillControlAttributeThreshold.h)


