---
icon: circle-dashed
---

# G-Probe : Level Set

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Connects points with similar scalar values (isolines/contours).

#### Overview

The G-Probe : Level Set subnode defines how points connect based on their scalar field similarity. Instead of connecting points based on proximity alone, it looks for points that share similar values along a specified attribute — such as elevation, height, or any numeric property. This is useful for creating contour lines, level-based connections, or isoline networks in procedural generation.

This probe subnode is ideal when you want to build structures or paths that follow scalar thresholds — like terrain contours, water levels, or heat zones. It's particularly powerful when combined with graph-building nodes such as "Connect Points" or "Build Graph."

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes.
{% endhint %}

#### How It Works

This probe subnode evaluates a scalar attribute (like height or elevation) for each point in the input data. It then connects points that have similar scalar values, within a defined tolerance. The algorithm works by:

1. Reading the scalar value from the specified attribute on each point.
2. Comparing these values to determine which points are "close enough" based on the **MaxLevelDifference** setting.
3. Optionally normalizing the scalar values to a 0–1 range if **bNormalizeLevels** is enabled, for consistent comparisons across different scales.
4. For each point, it identifies up to **MaxConnectionsPerPoint** neighbors that meet the level similarity criteria and creates connections between them.

This process effectively builds a network of points that share similar scalar values — forming isolines or contour-like structures.

<details>

<summary>Inputs</summary>

Expects a set of points with an attribute containing scalar values (e.g., height, temperature).

</details>

<details>

<summary>Outputs</summary>

Creates connections between points that have similar scalar values within the tolerance defined by MaxLevelDifference.

</details>

#### Configuration

<details>

<summary><strong>LevelAttribute</strong><br><em>Attribute defining the scalar field.</em></summary>

Specifies which attribute to use for determining scalar similarity. For example, you can use `$Position.Z` to base connections on elevation or a custom attribute like `$Heat`.

</details>

<details>

<summary><strong>MaxLevelDifference</strong><br><em>Max difference in scalar value to allow connection.</em></summary>

Controls how much variation in scalar values is allowed for two points to be connected. A higher value means more points will connect, even if their scalar values differ significantly.

**Example**: If set to `5.0`, points with scalar values of `10` and `14` will be connected, but `10` and `16` will not.

</details>

<details>

<summary><strong>bNormalizeLevels</strong><br><em>If true, normalizes level values to 0-1 range before comparison.</em></summary>

When enabled, scalar values are normalized to a 0–1 range before comparison. This ensures consistent behavior regardless of the original scale of your attribute.

**Example**: If your elevation data ranges from `0` to `100`, and you set MaxLevelDifference to `10`, normalization makes it equivalent to a difference of `0.1`.

</details>

<details>

<summary><strong>MaxConnectionsPerPoint</strong><br><em>Connect K nearest within level tolerance.</em></summary>

Limits the number of connections each point can make to its neighbors with similar scalar values.

**Example**: If set to `3`, each point will connect to at most 3 other points that are within the level tolerance.

</details>

#### Usage Example

You're generating a terrain with elevation data and want to create contour lines. You use this probe subnode with:

* **LevelAttribute**: `$Position.Z`
* **MaxLevelDifference**: `5.0`
* **MaxConnectionsPerPoint**: `6`

This creates connections between points that are within 5 units of elevation, forming smooth contour paths across the terrain.

#### Notes

* This probe is best used when scalar values vary smoothly, like elevation or temperature.
* Normalization can help ensure consistent behavior across datasets with different value ranges.
* For large datasets, consider reducing **MaxConnectionsPerPoint** to improve performance.
