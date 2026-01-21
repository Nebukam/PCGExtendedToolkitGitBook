---
icon: gauge-low
---

# Performance

There's a couple of settings and options exposed on all PCGEx nodes; some of them allow you to tweak really low level behaviors that isn't always fully supported, so be careful with these and make sure you fully understand the technical implications when tweaking them.

{% hint style="success" %}
Some settings may improve or degrade performance — there's no one-size-fits-all and I couldn't come up with best guesses. Plugin defaults should be find in most cases.
{% endhint %}

{% hint style="info" %}
Most of these settings can have their default value (_used by all PCGEx nodes as a default, unless specified otherwise on the node_) in the plugin **project settings**.
{% endhint %}

<details>

<summary>Bulk Init Data</summary>

This is especially useful for point processors that will generate and output lots of data objects. By default, new objects are created on a per-need basis; which open happens inside threads. Unreal isn't multi-threading friendly; especially with UObjects (_PCG Data are UObjects_); enabling **Bulk Init Data creates all the data the node is going to need in one go and then move onto processing it**.

> This is not always desirable because spamming UObject creation puts a lot of strain on the garbage collection system, but can greatly speed up certain nodes.

</details>

<details>

<summary>Cache Data</summary>

Whether you want that node to cache its data; skipping execution during regeneration without flush.

</details>

<details>

<summary>Scoped Attribute Get</summary>

Whether to read attribute data in "scopes" or all at once. May improve or degrade performance depending on your data.

</details>

<details>

<summary>Steal Data</summary>

Steal data is really powerful but really risky — be extra careful when using it.

The nodes that expose this option usually do "editing in place", copy the data as-is, change a few properties, output the copy.

When stealing the data is enabled, the node doesn't copy the data and instead modifies the input directly. This saves you from having more extra objects in memory, and is often very welcome.

{% hint style="danger" %}
If stealing data, make absolutely sure that the data pinned into the stealer is exclusively used by that node and no other.
{% endhint %}

</details>

<details>

<summary>Execution Policy</summary>

By defaullt, PCGEx spread works on multiple threads and pauses the current node execution while it works; allowing for neighbor branches to execute in parallel. You may change that behavior to request that the execution avoids pausing : this can result in **significantly faster** (but blocking) execution and lower wall times.

> It also blocks in loops, breaking possible parallelism; hence the variant in the dropdown.

</details>
