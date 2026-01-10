---
description: 'In editor :: PCGEx | State : Cluster'
icon: circle-dashed
---

# State : Cluster

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a filter-driven cluster state that can be used to flag or mark clusters based on specific conditions.

#### How It Works

This subnode evaluates clusters and assigns flags or states based on defined criteria. It works by:

1. Checking each cluster against a set of conditions you define.
2. If a cluster meets the specified requirements, it gets flagged or tagged with a state.
3. These flags can then be used later in your graph to sort, route, or process clusters differently based on their assigned states.

The evaluation happens at the cluster level, meaning it looks at properties of the entire cluster rather than individual points or edges within it. You configure which conditions must be met for a cluster to receive a flag, allowing you to categorize and manage your data effectively.

#### Configuration

<details>

<summary><strong>Name</strong><br><em>The name of this state definition.</em></summary>

Assigns a unique identifier for this state. This helps in organizing and referencing multiple states within a graph.

</details>

<details>

<summary><strong>Priority</strong><br><em>Determines the order in which filters are applied.</em></summary>

Controls the execution order when multiple filter subnodes are used together. Lower numbers execute first.

</details>

<details>

<summary><strong>Config</strong><br><em>Filter configuration settings for this cluster state.</em></summary>

Defines how the cluster is evaluated. This includes parameters that control which clusters pass or fail the test, such as thresholds or conditions based on cluster properties.

</details>

#### Usage Example

You want to flag all clusters with more than 50 points as "Large". You would use this subnode and configure it to check the point count of each cluster. If a cluster has more than 50 points, it gets flagged with the "Large" state. Later in your graph, you can route these flagged clusters to a different processing branch for special handling.

#### Notes

* This subnode is designed for use at the cluster level.
* It works best when combined with other filter subnodes to create complex conditional logic.
* The performance impact depends on the complexity of the filters used within the Config settings.
