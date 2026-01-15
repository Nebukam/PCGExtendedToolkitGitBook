---
description: 'In editor :: PCGEx | Sample : Texture'
icon: circle
---

# Sample Texture

Sample texture data using UV coordinates.

**How It Works**

> AI-Generated, needs proofreading

* The node samples texture data based on UV coordinates provided by the selected attribute property input selector (UVSource).
* It checks if the sampling operation is successful and applies a tag specified in "Has Successes Tag" to elements that succeed if "Tag If Has Successes" is enabled.
* For elements where the sampling does not succeed, it applies a different tag specified in "Has No Successes Tag", provided that "Tag If Has No Successes" is enabled.

#### Configuration

<details>

<summary><strong>Process Filtered Out As Fails</strong> <code>bool</code></summary>

If enabled, mark filtered out points as "failed". Otherwise, just skip the processing altogether. Only uncheck this if you want to ensure existing attribute values are preserved.

</details>

<details>

<summary><strong>Prune Failed Samples</strong> <code>bool</code></summary>

If enabled, points that failed to sample anything will be pruned.

</details>

<details>

<summary><strong>Quiet Duplicate Sample Names Warning</strong> <code>bool</code></summary>

Controls quiet duplicate sample names warning.

</details>

**Tagging**

<details>

<summary><strong>UVSource</strong> <code>PCGAttributePropertyInputSelector</code></summary>

Controls uvsource.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Tag If Has Successes</strong> <code>bool</code></summary>

Controls tag if has successes.

</details>

<details>

<summary><strong>Has Successes Tag</strong> <code>String</code></summary>

Controls has successes tag.

</details>

<details>

<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

Controls tag if has no successes.

</details>

<details>

<summary><strong>Has No Successes Tag</strong> <code>String</code></summary>

Controls has no successes tag.

</details>

***

Source: `Source\PCGExElementsSampling\Public\Elements\PCGExSampleTexture.h`
