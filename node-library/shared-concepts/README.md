---
description: A list of things that are true for every PCGEx node.
icon: info
---

# Common Settings

There is a handful of recurring settings blocs that are exposed by a lot of different nodes; you can find more about these in their own page. Individual nodes will be pointing back at them _and avoid duplicating the same doc in a lot of places_.

> To in order to highlight the different, common settings are accessible via buttons (_instead of regular links_) like so:
>
> <a href="comparisons.md" class="button secondary">Comparison Settings</a>  -  <a href="fitting.md" class="button secondary">Fitting Settings</a>  -  <a href="blending/" class="button secondary">Blending Settings</a>

### Note on Dynamic Parameters

A lot of parameters support either a constant value or can grab a per-point value from the attributes. This is often presented as a dropdown that swaps two fields:

<figure><img src="../../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

Selecting `Constant` will read value from the constant field, which can be overridden with the pin of the same name; while selecting `Attribute` will read the value from the specified attribute. Attribute selection can be overridden using the override pin named `{property} (Attr)`

{% hint style="info" %}
If you are using override pins, **make sure that the input selection in the detail panel matches the override you want**, as it won't automatically switch for you.
{% endhint %}

***

## Shared Settings

Most PCGEx nodes share the same base class implementation when it comes to processing points, hence there are a few settings that are exposed by default on each and every node.

These lets you tweak very low-level processing behaviors & patterns.

{% content-ref url="performance.md" %}
[performance.md](performance.md)
{% endcontent-ref %}

{% content-ref url="cleanup.md" %}
[cleanup.md](cleanup.md)
{% endcontent-ref %}

### Warning and Errors

This section exposes controls that allow you to quiet some warnings and errors. When nodes are used inside dynamic subgraphs, there are situation where some error are expected, and despite you handling them gracefully, the nodes will still complain that something is wrong (_this is also true of vanilla nodes, it's not a PCGEx thing_).&#x20;

Error/warning toggle exist to that effect : they will quiet logging code from shouting at you.

<details>

<summary>Propagate Aborted Execution</summary>

A very aggressive way to cancel/cull graphs to any connected child nodes.

</details>

<details>

<summary>Quiet Invalid Input Warning</summary>



</details>

<details>

<summary>Quiet Cancellation Error</summary>



</details>

<details>

<summary>Quite Missing Input Error</summary>



</details>
