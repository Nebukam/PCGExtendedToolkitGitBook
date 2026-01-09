---
icon: circle-dashed
---

# G-Probe : Gradient Flow

{% hint style="info" %}
### AI-generated page -- to be reviewed

While not 100% accurate, it should properly capture what the node/factory does. It stills needs to be proofread by a human.
{% endhint %}

> Creates a global probe that connects points based on gradient flow direction, finding the steepest uphill or downhill neighbors.

### Overview

This factory generates a specialized probe operation that builds connections between points based on a flow attribute's gradient. It finds K-nearest neighbors and creates edges from each point to its steepest neighbor(s) in the direction of flow.

{% hint style="info" %}
Connects to **Filter** pins on processing nodes like "Connect Points" or "Build Graph"
{% endhint %}

### How It Works

This probe analyzes a flow attribute (like density, height, or custom values) across all points and creates connections based on gradient direction. For each point, it finds its nearest neighbors and determines the steepest uphill or downhill direction to connect to.

* **Uphill Only**: Connects only to higher flow values
* **Downhill Only**: Connects only to lower flow values
* **Mutual Connections**: Creates bidirectional links between connected points

### Configuration

***

#### General

**Uphill Only**

_When enabled, only connects to points with higher flow values._

Creates unidirectional connections from low to high flow values.

**Steepest Only**

_When enabled, only connects to the steepest neighbor._

Limits connections to the single most significant gradient direction.

**Flow Attribute**

_Selects which attribute to use for gradient calculations._

Defaults to `$Density` if not specified. Must be a numeric attribute with meaningful values across points.

### Usage Example

Use this factory in a "Connect Points" node to create flow-based networks:

1. Add a "G-Probe : Gradient Flow" factory to your graph
2. Set the **Flow Attribute** to a height or density field
3. Enable **Uphill Only** if you want connections flowing upward
4. Connect this factory to the **Filter** pin of a "Connect Points" node
5. The result will be a network where each point connects to its steepest uphill neighbor

This is useful for creating river networks, flow paths, or terrain-based connectivity.

### Notes

* Requires a numeric attribute with meaningful values across points
* Uses an octree for efficient neighbor searches
* Works best with continuous data like heightmaps or density fields
* Can be combined with other filters to refine connection criteria
* The **Steepest Only** option significantly reduces connections and can create cleaner flow networks

### Inputs

* **Points**: Input point collection to process
* **Filter**: Optional input for filtering which points to include in the probe

### Outputs

* **Connections**: Output connection data representing the gradient flow network
* **Filtered Points**: Output of points that were included in the probe operation
