---
description: 'In editor :: PCGEx | Write States'
icon: scrubber
---

# Write States

Writes point states as a int64 flag mask

**How It Works**

> AI-Generated, needs proofreading

* The node computes and writes point states into an int64 flag mask.
* It outputs these flags to a specified attribute defined by the "Flag Attribute" setting.
* Initial flags are set according to the "Initial Flags" configuration provided.
* The processing follows parameters outlined in the "Config" setting, which is of type PCGExStateConfigBase.

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

<details>

<summary><strong>Config</strong> <code>PCGExStateConfigBase</code></summary>

Controls config.

📦 See: StateConfigBase configuration

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsMeta\Public\Elements\PCGExWriteStates.h`
