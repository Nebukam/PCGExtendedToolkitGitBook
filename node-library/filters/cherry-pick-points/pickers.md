---
icon: comment-dots
---

# Pickers

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines how index-based picks are interpreted and processed for use in other nodes.

#### Overview

This subnode defines a picker configuration that determines how indices are selected from a set of data. It supports both discrete indices and relative values, allowing you to define flexible selection behaviors. You can configure how out-of-bounds indices are handled and whether relative picks should be truncated. This is used in other nodes that require index-based selection, such as sampling or filtering operations.

{% hint style="info" %}
Connects to **Picker** input pins on processing nodes.
{% endhint %}

#### How It Works

This subnode defines the logic for interpreting index selections. It supports two modes of picking:

1. **Discrete Picks**: Direct integer indices that are used as-is. These are typically used when you want to select specific items by their position in a list or array.
2. **Relative Picks**: Floating-point values between 0 and 1, which are interpreted as relative positions. These are useful for selecting items based on normalized ranges.

When using relative picks, the subnode can truncate these values using different modes (round, floor, ceiling) to convert them into integer indices. It also defines how out-of-bounds indices are handled via a safety mode, such as clamping, tiling, or mirroring.

The configuration allows you to define whether the values should be treated as discrete or relative, and how to sanitize invalid indices that may result from the selection process.

<details>

<summary>Inputs</summary>

This subnode does not consume any input data directly. It defines a picker behavior that is used by other nodes.

</details>

<details>

<summary>Outputs</summary>

This subnode outputs a Picker definition that can be consumed by nodes requiring index-based selection.

</details>

#### Configuration

***

**bTreatAsNormalized**

_Whether to treat values as discrete indices or relative ones._

When enabled, the picks are interpreted as normalized values between 0 and 1. When disabled, they are treated as direct integer indices.

**Values**:

* **False**: Treats picks as discrete indices.
* **True**: Treats picks as relative values.

**TruncateMode**

_How to truncate relative picks._

Controls how fractional parts of relative picks are handled when converting them into discrete indices.

**Values**:

* **Round**: Rounds to the nearest integer.
* **Floor**: Truncates toward negative infinity.
* **Ceiling**: Truncates toward positive infinity.

**Safety**

_How to sanitize index pick when they're out-of-bounds._

Defines how to handle indices that fall outside the valid range of available items.

**Values**:

* **Ignore**: Ignores invalid picks.
* **Tile**: Wraps around to valid indices (e.g., index 5 becomes 2 if there are only 3 items).
* **Clamp**: Clamps invalid indices to the nearest valid value (e.g., index 5 becomes 2 if there are only 3 items).
* **Yoyo**: Mirrors the index back and forth (e.g., index 5 becomes 1 if there are only 3 items).

**DiscretePicks**

_List of discrete integer picks._

A list of direct indices to be selected. Only used when `bTreatAsNormalized` is disabled.

**RelativePicks**

_List of relative picks between 0 and 1._

A list of normalized values that will be converted into indices based on the number of available items. Only used when `bTreatAsNormalized` is enabled.

#### Usage Example

Use this subnode to define a picker for selecting random points from a collection. Configure `DiscretePicks` with specific indices, or use `RelativePicks` to select points based on normalized positions (e.g., 0.25, 0.5, 0.75). Set the `Safety` mode to clamp invalid picks to prevent errors.

#### Notes

* This subnode is used as a configuration input for other nodes that require index-based selection.
* The picker behavior can be reused across multiple nodes by connecting this subnode to their Picker pins.
* When using relative picks, ensure your data has enough items to avoid out-of-bounds issues if not properly sanitized.
