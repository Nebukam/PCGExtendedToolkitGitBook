---
description: 'In editor :: PCGEx | Uber Branch'
icon: scrubber
---

# Uber Branch

Branch collections based on multiple rules & conditions.

**How It Works**

> AI-Generated, needs proofreading

* The Uber Branch node evaluates multiple rules and conditions to branch collections into different outputs based on specified criteria.
* When "Num Branches" is set to write results to point instead of splitting outputs, the node consolidates all branching outcomes into individual points within a single output collection.
* The "Async Chunk Size" setting determines how many collections are processed in parallel; setting it to 0 forces sequential processing, which can be advantageous when dealing with simple filters or conditions.

#### Configuration

<details>

<summary><strong>Num Branches</strong> <code>int32</code></summary>

Write result to point instead of split outputs

⚡ PCG Overridable

</details>

<details>

<summary><strong>Async Chunk Size</strong> <code>int32</code></summary>

Number of collections to check for in parallel. Use 0 to force execution in a single go. Can be beneficial if filters are simple enough.

</details>

***

Source: `Source\PCGExFoundations\Public\Elements\ControlFlow\PCGExUberBranch.h`
