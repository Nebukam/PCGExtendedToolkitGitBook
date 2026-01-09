---
icon: sliders
---

# Orient : Weighted

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates an orientation operation that orients points along a path using a weighted average of adjacent segment directions.

### Overview

This factory generates an orientation action that orients points based on the weighted direction between adjacent path segments. It's commonly used for creating smooth, natural-looking rotations along paths where the orientation should follow the path's curvature.

{% hint style="info" %}
Connects to **Orient** nodes that accept action factories
{% endhint %}

### How It Works

The factory calculates a weighted average of the directions from the previous and next path segments. The weight is determined by the relative lengths of these segments, with shorter segments having more influence on the final orientation. This creates smooth transitions along the path that follow its natural curvature.

When enabled, the inverse weight option flips the weighting so that longer segments have more influence instead.

### Configuration

***

#### Settings

**Inverse Weight**

_When enabled, the weighting is inverted._

Instead of giving more influence to shorter segments, longer segments will have more influence on the final orientation. This can create different visual effects along the path.

### Inputs

* **Path**: Input path to orient points along
* **Points**: Points to be oriented

### Outputs

* **Action**: Orientation action that can be used by **Orient** nodes

### Usage Example

Use this factory with an **Orient** node to create smooth rotations along a path. For example, you could use it to orient trees or objects along a winding river, where the orientation follows the river's curvature naturally. The inverse weight option allows you to fine-tune how much influence adjacent segments have on the final rotation.

### Notes

* This factory works best with paths that have sufficient point density for meaningful segment comparisons
* The weighting algorithm prevents extreme directional shifts by using a normalized ratio of segment lengths
* Consider using this with **Orient** nodes that support action factories to achieve smooth path-following rotations
