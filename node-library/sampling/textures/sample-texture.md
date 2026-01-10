---
description: 'In editor :: PCGEx | Sample : Texture'
icon: circle
---

# Sample Texture

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Sample texture data using UV coordinates.

#### How It Works

This node retrieves color or scalar values from textures at specific UV coordinates and assigns them as attributes to points. For each point, it uses the UV coordinates stored in an attribute to look up corresponding texture values. It can sample multiple textures simultaneously, mapping the results into different output attributes based on channel settings.

The node supports tagging points that successfully or unsuccessfully sampled from textures. If enabled, it can also remove points that failed to sample any data from the output.

#### Configuration

<details>

<summary><strong>UVSource</strong><br><em>Attribute used to retrieve UV coordinates for sampling.</em></summary>

Specifies the attribute that contains the UV coordinates (typically a Vector2D) from which texture samples are taken.

</details>

<details>

<summary><strong>bTagIfHasSuccesses</strong><br><em>When enabled, tag points that successfully sampled at least once.</em></summary>

When enabled, adds a boolean tag to points that had at least one successful sample. The tag name is defined by `HasSuccessesTag`.

</details>

<details>

<summary><strong>HasSuccessesTag</strong><br><em>Name of the tag added to points with at least one successful sample.</em></summary>

The name of the boolean attribute that gets set to true for points that successfully sampled from at least one texture.

</details>

<details>

<summary><strong>bTagIfHasNoSuccesses</strong><br><em>When enabled, tag points that failed to sample from all textures.</em></summary>

When enabled, adds a boolean tag to points that did not successfully sample from any texture. The tag name is defined by `HasNoSuccessesTag`.

</details>

<details>

<summary><strong>HasNoSuccessesTag</strong><br><em>Name of the tag added to points with no successful samples.</em></summary>

The name of the boolean attribute that gets set to true for points that failed to sample from any texture.

</details>

<details>

<summary><strong>bProcessFilteredOutAsFails</strong><br><em>If enabled, mark filtered out points as "failed". Otherwise, skip the processing altogether.</em></summary>

Controls whether points that are filtered out by point filters are treated as failed samples. If disabled, existing attribute values are preserved for those points.

</details>

<details>

<summary><strong>bPruneFailedSamples</strong><br><em>If enabled, points that failed to sample anything will be pruned.</em></summary>

When enabled, removes points from the output if they did not successfully sample any texture data.

</details>

<details>

<summary><strong>bQuietDuplicateSampleNamesWarning</strong><br><em>Suppress warnings about duplicate sample attribute names.</em></summary>

If enabled, suppresses warnings that appear when multiple samplers try to write to attributes with the same name.

</details>
