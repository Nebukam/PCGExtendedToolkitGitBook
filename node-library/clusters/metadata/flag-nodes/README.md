---
description: 'In editor :: PCGEx | Cluster : Write States'
icon: scrubber
---

# Cluster : Write States

Writes cluster states as a int64 flag mask

**How It Works**

> AI-Generated, needs proofreading

* The Cluster : Write States node processes cluster states by converting them into an int64 flag mask.
* It outputs these flags to a specified attribute defined in the Flag Attribute setting.
* An initial set of flags can be provided through the Initial Flags setting, which serves as a starting point for the flag mask.

#### Configuration

<details>

<summary><strong>Flag Attribute</strong> <code>Name</code></summary>

Attribute to output flags to

⚡ PCG Overridable

</details>

<details>

<summary><strong>Initial Flags</strong> <code>int64</code></summary>

Initial flags

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\States\PCGExClusterWriteStates.h`
