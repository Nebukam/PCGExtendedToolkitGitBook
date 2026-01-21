---
icon: broom-wide
---

# Cleanup

<details>

<summary>Flatten Output  <code>bool</code></summary>

If enabled, the node will output flattened data; meaning there is no more parenting or inheritance of the metadata. \
\
**This takes a huge toll on memory usage and should only be used when exporting data to a `PCGDataAsset`.**

</details>

Cleanup settings is exposed everywhere but only supported some specific cases. This idea behind cleanup is to **discard attributes from the output if those attributes were used by the node execution**. It's pure QoL/micro-optimization.

Those are called "consumable attributes" because the whole point of their existence was to be read once and then discarded.

{% hint style="info" %}
More often than not, people will just stack up attributes they don't need, or remove them with an extra "delete attribute" node. This embedded feature lets you do that during processing, removing the need for yet-another-copy of the data.
{% endhint %}

<details>

<summary>Cleanup Consumable Attributes <code>bool</code></summary>

Whether to enable this feature or not.\
When enabled, **any attribute that is read from and not written to** to during execution will be marked as "consumable", and discarded from the output data.\
\
&#xNAN;_&#x54;hese are usually attributes used for per-point operations._

</details>

<details>

<summary>Protected Attributes <code>string</code></summary>

An easily overridable, comma separated list of attributes that should not be discarded even if they are registered as consumable.

</details>

<details>

<summary>Protected Attributes <code>array</code></summary>

A static array of names, each of which will not be discarded even if they were registered as consumables during execution.

</details>
