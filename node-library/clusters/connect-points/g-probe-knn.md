---
icon: circle-dashed
---

# G-Probe : KNN

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Finds K nearest neighbors for each point and creates connections based on proximity.

#### How It Works

This subnode searches through all points in your data set to identify the K closest points to each individual point. It then establishes connections between each point and its selected neighbors based on spatial distance.

For every point, the system calculates how far it is from every other point in the set. These distances are sorted, and the K nearest points are chosen as neighbors. Connections are created between each point and its K closest neighbors.

If the mode is set to **Mutual**, both points in a connection will have an edge pointing to each other. If set to **Default**, only one direction of the connection is created, typically from the point to its neighbor.

#### Configuration

<details>

<summary><strong>K</strong><br><em>Number of neighbors to find.</em></summary>

Defines how many nearest neighbors each point will connect to. A higher value creates denser networks with more connections per point.

**Values**: Any positive integer

</details>

<details>

<summary><strong>Mode</strong><br><em>Connection direction behavior.</em></summary>

Controls whether connections are mutual or unidirectional.

**Values**:

* **Default**: Creates a one-way connection from each point to its neighbor.
* **Mutual**: Creates bidirectional connections between points and their neighbors.

</details>

#### Usage Example

Use this subnode in a graph where you want to create a network of nearby points. For example, connect points representing cities to their 5 closest neighbors to form a transportation network or social graph.

#### Notes

* This is a global probe, so it processes all points and creates connections across the entire data set.
* Performance may degrade with large datasets due to the O(n²) distance calculations.
* The K value affects how dense your resulting network will be.
