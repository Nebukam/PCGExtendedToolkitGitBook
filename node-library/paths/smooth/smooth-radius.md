---
icon: sliders
---

# Smooth : Radius

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a smoothing operation that influences points within a specified radius, using a falloff effect based on distance.

### Overview

This factory generates a smoothing behavior that affects points within a defined radius around each target point. It's used in path smoothing operations to create natural-looking curves and transitions by blending the positions of nearby points.

{% hint style="info" %}
Connects to **Smoothing** nodes (like "Smooth Path") as their smoothing operation input
{% endhint %}

### How It Works

The radius-based smoothing works by:

1. Taking each point in a path as a target
2. Finding all other points within a specified radius
3. Blending the target's position with nearby points using a distance-based weight
4. Points closer to the target have more influence than those farther away

The blending effect is strongest at the center of the radius and tapers off toward the edges, creating smooth transitions.

### Inputs

* **Source**: Path data to be smoothed
* **Operation**: Smoothing operation to apply (set to "Radius" for this node)

### Outputs

* **Result**: Smoothed path with adjusted point positions

### Configuration

***

#### Smoothing Settings

**Radius**

_Controls how far the smoothing operation reaches from each point._

* **Default**: 100 units (adjust based on your path scale)
* **Effect**: Larger values create broader smoothing effects; smaller values create more localized adjustments
* **Example**: With a radius of 50, only points within 50 units will influence smoothing

**Influence**

_Controls how strongly nearby points affect the target point._

* **Default**: 1.0 (full influence)
* **Effect**: Values between 0 and 1 reduce the strength of the smoothing effect
* **Example**: Setting to 0.5 makes points only partially blend with their neighbors

***

#### Execution Settings

**Execution Policy**

_How this operation handles execution context._

* **Default**: Uses the default PCGEx behavior
* **Effect**: Controls whether execution pauses during processing
* **When enabled**: Execution will not pause context, improving performance in loops

### Usage Example

Use this factory with a "Smooth Path" node to create natural-looking curves:

1. Connect your path data to the "Smooth Path" node
2. Set the smoothing operation to "Radius"
3. Adjust the radius to control how far the smoothing reaches (e.g., 100 units)
4. Set influence to 0.5 for subtle, natural transitions
5. The result will be a smooth path where points near each other gently pull toward one another

### Notes

* Combine with other smoothing factories for complex effects
* Larger radius values may cause performance impact on large datasets
* Use influence values less than 1 for more controlled, subtle smoothing
* The radius is measured in world units, so adjust based on your scene scale
