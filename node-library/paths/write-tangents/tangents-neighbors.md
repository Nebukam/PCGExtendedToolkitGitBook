---
icon: sliders
---

# Tangents : Neighbors

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates tangent vectors based on the direction of neighboring points in a sequence.

### Overview

This factory generates tangents by analyzing the relative positions of adjacent points in a data set. It calculates the average direction between the previous and next points, creating smooth transitions that follow the natural flow of the point sequence.

{% hint style="info" %}
Connects to **Tangent** input pins on nodes like **Write Tangents** or **Transform Points**
{% endhint %}

### Inputs

* **Points**: The main input containing the point data to process
* **Previous Point**: Reference to the preceding point in the sequence
* **Next Point**: Reference to the following point in the sequence

### Outputs

* **Tangent**: The calculated tangent vector for each point
* **Tangent Scale**: Optional scaling factor applied to the tangent magnitude

### How It Works

The factory computes tangents by:

1. Taking the vector from the previous point toward the current point
2. Taking the vector from the current point toward the next point
3. Averaging these two vectors to create a smooth tangent direction
4. Applying scale factors to control the magnitude of the resulting tangent vectors

This approach creates natural-looking curves that follow the path of neighboring points, making it ideal for generating smooth paths or guiding procedural transformations.

### Configuration

***

#### General Settings

**Closed Loop**

_When enabled, the first point connects to the last point in the sequence._

Useful when working with circular paths or closed shapes where the end should smoothly connect back to the start.

***

#### Tangent Settings

**Scale**

_Adjusts the magnitude of the calculated tangent vectors._

Higher values create more pronounced tangents, while lower values produce subtler directional influences.

**Weight**

_Control the influence of neighboring points on the final tangent calculation._

A weight of 1.0 uses equal influence from both adjacent points, while values above or below 1.0 adjust this balance.

### Usage Example

Create a smooth curve by:

1. Using **From Neighbors** as an action factory in a **Write Tangents** node
2. Connecting your point data to the main input
3. Setting up the tangent output attributes (e.g., "TangentArrive", "TangentLeave")
4. The result will generate smooth, flowing tangents that follow the natural progression of your points

This is particularly useful for creating smooth paths, guiding particle systems along curves, or generating natural-looking motion trajectories.

### Notes

* Tangents are calculated per-point using local neighborhood information
* Works best with ordered point sequences where spatial relationships matter
* Can be combined with other tangent factories to create more complex tangent behaviors
* The **Closed Loop** option is essential when creating circular paths or continuous loops
