---
description: 'In editor :: PCGEx | Uber Branch'
icon: scrubber
---

# Uber Branch

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Branch collections based on multiple rules & conditions.

### Overview

The Uber Branch node allows you to split input point data into multiple output collections based on a set of configurable filters. It's particularly useful when you want to route points to different paths in your graph depending on their properties or attributes, enabling complex conditional logic without needing multiple separate nodes.

Each filter defines a condition that points must meet to be included in a specific output collection. You can configure how many filters need to pass (All, Any, or Partial) and set the number of parallel execution chunks for performance tuning.

{% hint style="info" %}
This node supports dynamic pin creation, meaning you can add or remove input/output branches as needed.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Point data to be filtered and branched
* **Optional Filter Inputs**: Additional point data used for filtering conditions (can support multiple inputs)

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: The original input points, optionally filtered by the branch logic
* **Branch Outputs**: Multiple outputs based on filter results

</details>

### Properties Overview

Controls how the branching logic is applied and managed.

***

#### Settings

Configures the core behavior of the branching operation.

**Number of Branches**

_Controls how many output branches are created._

* Determines the number of separate collections to split points into
* Each branch corresponds to one filter condition
* Must be between 1 and 100 (default: 3)

**Async Chunk Size**

_Configures parallel execution for performance._

* Defines how many points are processed in each parallel chunk
* Use 0 to force sequential processing (single-threaded)
* Larger values improve performance with complex filters, smaller values may be better for simple filters or when memory is limited

***

#### Branching Mode

Controls how multiple filter conditions are evaluated.

**Mode**

_Selects the logic used to determine which branch a point belongs to._

**Values**:

* **All**: All filters must pass for a point to enter the branch
* **Any**: At least one filter must pass for a point to enter the branch
* **Partial**: A specified number of filters must pass for a point to enter the branch

***

#### Filter Conditions

Define what criteria points must meet to be routed to each output.

**Filter Inputs**

_The conditions used to evaluate points._

* Each input represents one filter condition
* Points are evaluated against these filters in order
* Filters can use attributes, constants, or other data sources
* The number of inputs determines how many branches are created

**Filter Type**

_Specifies the type of filtering logic to apply._

**Values**:

* **Attribute**: Compare point attributes using a comparison operator
* **Constant**: Use a fixed value for comparison
* **Custom**: Apply custom logic or expressions (if supported by your version)

***

#### Performance Settings

Controls how data is processed and cached.

**Bulk Init Data**

_Controls whether data is pre-allocated for performance._

When enabled, all data is allocated upfront to avoid contention during processing. This can improve performance on large datasets but uses more memory initially.

**Cache Data**

_Toggles whether results are cached for reuse._

When enabled, the node caches its output to avoid recomputing when used multiple times in a graph.

**Scoped Attribute Get**

_Controls attribute access behavior for small datasets._

When disabled, attribute reading is optimized for smaller datasets. This can improve performance on very small point sets but may cause issues with larger ones.
