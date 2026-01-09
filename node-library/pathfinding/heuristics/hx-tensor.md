---
description: 'In editor :: PCGEx | Heuristics : Tensor'
icon: circle-dashed
---

# HX : Tensor

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates a heuristic filter based on tensor field sampling, used to evaluate point suitability in pathfinding operations.

### Overview

This factory generates a heuristic that evaluates points using tensor field data. It's designed to be connected to pathfinding nodes like A\* or Dijkstra to influence which paths are considered during graph traversal.

{% hint style="info" %}
Connects to **Filter** pins on pathfinding processing nodes
{% endhint %}

### Inputs

* **Point**: Input points to evaluate
* **Tensor Field**: Tensor field data used for sampling
* **Settings**: Configuration parameters for the heuristic

### Outputs

* **Heuristic**: Evaluated scores for each input point

### How It Works

This heuristic evaluates points by sampling tensor fields at their location. The result is a score that represents how favorable a point is for pathfinding, with the score being either higher or lower depending on your configuration. The tensor sampling can be configured to use different methods and parameters.

### Configuration

***

#### General

**Absolute**

_When enabled, the heuristic score will be computed using absolute values._

When enabled, the heuristic uses absolute tensor field values for scoring. When disabled, it may use relative or normalized values depending on the tensor type.

**Tensor Sampling Settings**

_Tensor sampling settings. Note that these are applied on the flattened sample, e.g after & on top of individual tensors' mutations._

**Radius**

_Sampling radius._

The distance from each point to sample the tensor field. Larger values will consider more distant data but may be slower to compute.

**Min Step Fraction**

_Minimum step size as fraction of base radius._

Controls how small steps can be when sampling the tensor field. Smaller values allow for finer resolution but increase computation time.

**Max Step Fraction**

_Maximum step size as fraction of base radius._

Controls how large steps can be when sampling the tensor field. Larger values speed up computation but may miss fine details.

**Error Tolerance**

_Error tolerance for step size adaptation._

How much error is acceptable in adaptive sampling. Lower values mean more precise but slower sampling.

**Max Sub-Steps**

_Maximum sub-steps per sample._

Maximum number of subdivisions allowed when adapting step sizes during tensor sampling.

### Usage Example

Use this factory with an A\* pathfinding node to create a heuristic that considers tensor field data like terrain difficulty or flow direction. For example, you could use it to make paths prefer areas with higher "walkability" scores from a tensor field representing terrain quality.

### Notes

* The tensor sampling settings affect performance and accuracy
* This factory works best when connected to pathfinding nodes that support custom heuristics
* Scores are normalized based on your configured "Lower is Better" or "Higher is Better" setting
* Multiple tensor factories can be connected for complex heuristic combinations
