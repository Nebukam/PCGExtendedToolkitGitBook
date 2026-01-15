---
description: 'In editor :: PCGEx | Meta Cleanup'
icon: circle
---

# Meta Cleanup

Keep/Remove tags & attributes using string queries.

**How It Works**

> AI-Generated, needs proofreading

* The Meta Cleanup node processes input data by evaluating tags and attributes against specified string queries.
* It iterates over each tag and attribute in the input to determine if they match any of the filters listed under Key settings: Filters.
* For each matching filter, the corresponding attributes are removed from the output; all other elements remain unchanged.
* The node outputs a cleaned-up version of the input data with specified attributes deleted as per the provided list.

#### Configuration

<details>

<summary><strong>Filters</strong> <code>PCGExCarryOverDetails</code></summary>

List of attributes to delete.

📦 See: CarryOver configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExMetaCleanup.h`
