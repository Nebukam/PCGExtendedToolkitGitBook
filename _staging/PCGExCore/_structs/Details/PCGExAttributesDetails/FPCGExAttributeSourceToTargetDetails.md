---
icon: arrow-right-arrow-left
description: 'Attribute Source To Target Details - Map source attributes to target names'
---

# Attribute Source To Target Details

Configures the mapping between a source attribute and its output destination.

## Overview

This settings block defines a source-to-target attribute mapping, allowing operations to read from one attribute and optionally write results to a differently-named attribute. This is useful when you want to preserve the original attribute while creating a modified version, or when standardizing attribute names across different data sets.

## How It Works

1. **Read Source**: Specifies which attribute to read from
2. **Choose Output**: Optionally redirect output to a different attribute name
3. **Write Result**: Operation writes to either the source name or the specified target

## Behavior

```
Same Name (bOutputToDifferentName = false):
  Source: "Height" → Process → Output: "Height"

Different Name (bOutputToDifferentName = true):
  Source: "Height" → Process → Output: "NormalizedHeight"
  (Original "Height" preserved, new attribute created)
```

## Settings

<details>
<summary><strong>Source</strong> <code>FName</code></summary>

The name of the attribute to read from. This attribute must exist on the input points.

Default: `None`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Output To Different Name</strong> <code>bool</code></summary>

When enabled, results are written to a separate target attribute instead of overwriting the source.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Target</strong> <code>FName</code></summary>

The name of the attribute to write results to. If this attribute doesn't exist, it will be created.

Default: `None`

📋 *Visible when Output To Different Name = true*

⚡ PCG Overridable

</details>

---

![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Details/PCGExAttributesDetails.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Details/PCGExAttributesDetails.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 3 documented (Source, bOutputToDifferentName, Target)
Inherited Properties: None
Nested Types: None
Used By: Attribute Remap, Reduce Data, Uber Noise
-->
