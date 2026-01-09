---
icon: circle-dashed
---

# G-Probe : Theta

{% hint style="warning" %}
## AI-generated page -- to be reviewed 
While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a global probe that connects points using angular cone-based logic, forming a Theta or Yao graph structure.

### Overview

This probe factory defines a connection logic that builds spatial graphs by connecting points within angular cones. It's particularly useful for creating structured, directional networks that mimic natural or algorithmic spanning behaviors.

{% hint style="info" %}
Connects to **Probe** pins on graph-building nodes like **Connect Points**, **Build Graph**, and **Spanner**.
{% endhint %}

### How It Works

This probe creates connections between points by defining a set of angular cones around a specified axis. For each point, it looks for nearby points within these cones and connects to the nearest one in each cone.

* **Theta graph**: Uses projected nearest neighbors within cones
* **Yao graph variant**: Uses true nearest neighbors within cones

The result is a structured graph that maintains directional coherence while ensuring connectivity across spatial regions.

### Inputs

* **Points**: Input point cloud to be connected
* **Probe**: Connection logic to apply to the point cloud

### Outputs

* **Graph**: Output graph with connections based on angular cone logic

### Configuration

***

#### General

**Num Cones**

_Number of angular cones to use for connection logic._

Controls how many directions the probe will check for connections. Higher values create denser graphs with more connections but increase processing time.

* **Example**: With 6 cones, each point will attempt to connect to its nearest neighbor in 6 different angular sectors.
* **Recommended range**: 4–32 (default: 6)

**Cone Axis**

_Axis around which the angular cones are built._

Determines the orientation of the cone structure. Points are connected based on their angular position relative to this axis.

* **Example**: Using `UpVector` creates vertical cones, while `ForwardVector` creates horizontal cones.
* **Tip**: Adjusting this can change the graph's directional bias

**Use Yao Variant**

_When enabled, uses Yao graph logic instead of standard Theta graph._

The Yao variant connects to the true nearest neighbor within each cone, rather than a projected one.

* **Theta graph** (default): Faster, projects points onto cone planes for connection
* **Yao graph**: More precise but slower, finds actual nearest neighbors in each cone

### Usage Example

Create a point cloud with random distribution. Connect it to a **Connect Points** node using this probe factory. The result will be a structured graph where each point connects to its nearest neighbor within 6 angular sectors around the up axis, forming a directional network that maintains spatial coherence.

### Notes

* This is ideal for creating natural-looking networks like road systems, branching structures, or directional flow fields
* Higher cone counts create more detailed but computationally expensive graphs
* The Yao variant produces more accurate connections at the cost of performance
* Combine with **Spanner** nodes to control graph density and structure further
