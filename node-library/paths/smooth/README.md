---
description: 'In editor :: PCGEx | Path : Smooth'
icon: circle
---

# Smooth

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Smooths the points of input paths to create more natural-looking curves.

### Overview

This node applies smoothing operations to the points of paths, making them appear less angular and more fluid. It's particularly useful for creating organic-looking terrain, roads, rivers, or any procedural geometry that benefits from smooth transitions between waypoints.

The smoothing algorithm can be customized through different methods and parameters, allowing you to control how much influence each point has on its neighbors and how many points are considered during the smoothing operation.

{% hint style="info" %}
Smoothing is applied per-path, so each path will be processed independently. This ensures that paths don't interfere with each other during the smoothing process.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input (Default)**: Points representing paths to smooth
* **Point Filters**: Optional filters to specify which points in the input should be smoothed

</details>

<details>

<summary>Outputs</summary>

* **Main Output (Default)**: Smoothed paths with updated point positions

</details>

### Properties Overview

Controls how smoothing is applied to your paths.

***

#### General Settings

Controls core behavior for how paths are smoothed.

**Preserve Start**

_When enabled, the first point of each path will not be modified by the smoothing operation._

* Ensures that the starting position of paths remains unchanged
* Useful when you want to maintain specific anchor points

**Preserve End**

_When enabled, the last point of each path will not be modified by the smoothing operation._

* Ensures that the ending position of paths remains unchanged
* Useful when you want to maintain specific anchor points

**Smoothing Method**

_Specifies which algorithm is used to smooth the points._

* Choose from various smoothing algorithms (e.g., linear, cubic, etc.)
* Different methods produce different visual results and performance characteristics

**Influence Input Type**

_Determines whether the influence value is constant or read from an attribute._

* **Constant**: Use a fixed value for all points
* **Attribute**: Read influence values from a point attribute

**Influence Attribute**

_The name of the point attribute to use as influence values when "Influence Input Type" is set to "Attribute."_

* Only visible when "Influence Input Type" is set to "Attribute"
* Controls how much each point influences its neighbors during smoothing

**Influence (Constant)**

_The fixed amount of influence applied to all points when "Influence Input Type" is set to "Constant."_

* Value range: -1 to 1
* Negative values can reverse the direction of smoothing
* Higher absolute values result in more pronounced smoothing effects

**Smoothing Amount Input Type**

_Determines whether the smoothing amount is constant or read from an attribute._

* **Constant**: Use a fixed value for all points
* **Attribute**: Read smoothing amounts from a point attribute

**Smoothing Amount Attribute**

_The name of the point attribute to use as smoothing values when "Smoothing Amount Input Type" is set to "Attribute."_

* Only visible when "Smoothing Amount Input Type" is set to "Attribute"
* Controls how many neighbors are considered during the smoothing operation

**Smoothing (Constant)**

_The fixed amount of smoothing applied to all points when "Smoothing Amount Input Type" is set to "Constant."_

* Value range: 1 and above
* Higher values result in more smoothing
* The exact effect depends on the chosen smoothing method

**Scale Smoothing Amount Attribute**

_A multiplier applied to the smoothing amount attribute._

* Value range: 0.001 and above
* Allows scaling of smoothing intensity without changing the attribute values

***

#### Blending Settings

Controls how attributes are blended during smoothing.

**Blending Interface**

_Determines how data blending is handled across points._

* **Individual**: Each point's attributes are blended independently
* **Monolithic**: All attributes are blended together as a group

**Blending Settings**

_Configuration for how attribute values are combined during smoothing._

* Only visible when "Blending Interface" is set to "Monolithic"
* Defines the blending operation used for each attribute (e.g., average, weighted sum)
