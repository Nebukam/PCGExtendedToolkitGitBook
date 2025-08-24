---
icon: arrow-down-to-dotted-line
---

# Distribution

This page covers the **distribution** settings  of the nodes using [collections](../../node-library/assets-management/collections/ "mention").

<figure><img src="../../.gitbook/assets/image (80).png" alt=""><figcaption></figcaption></figure>

Distribution settings drive how an entry will be selected for a given point. There are three main modes, which work in parallel of categories:

* <mark style="color:$info;">**Index**</mark> lets you select entries by index, as ordered within the collection. It's more flexible than it sounds like.
* <mark style="color:$info;">**Random**</mark> is purely seed-driven and ignores weight.
* <mark style="color:$info;">**Weighted Random**</mark> is seed-driven, and uses the entry Weight value, relative to other entries of the collection : higher weight means greater probability to be picked, lower weight means smaller probability of being picked. _Zero weight means entry is disabled and will be ignored._

### Using Categories

Categories let you create internal buckets of entries — each bucket is filled with entries that share the same Category; effectively partitioning the collection. If the use of categories is disabled, then all entries share a single, uncategorized bucket.

<mark style="color:$success;">**Whatever distribution method is selected, it will become relative to the category bucket the point belongs to**</mark><mark style="color:$success;">.</mark>

{% hint style="info" %}
Note that using categories is entirely optional, it's there to offer a very precise layer of control over distribution.
{% endhint %}

<details>

<summary>Defining which category an entry belongs to</summary>

Is very straightforward :

<figure><img src="../../.gitbook/assets/image (82).png" alt=""><figcaption><p>Category property in an entry' details</p></figcaption></figure>

Simply use anything other than `None` in the category field.&#x20;

{% hint style="info" %}
This field is case-sensitive, so beware of typos.
{% endhint %}

</details>

<details>

<summary>Using categories on the <a data-mention href="../../node-library/assets-management/asset-staging/">asset-staging</a> node</summary>

Simply enable the `Use Categories` toggle and select how to choose the category.

<figure><img src="../../.gitbook/assets/image (81).png" alt=""><figcaption><p>Category selector — constant (top) vs attribute (bottom)</p></figcaption></figure>

Constant means you only target a single category with that node; while Attribute lets you use the value of an attribute to choose the category for that point.

{% hint style="info" %}
Note that if the category doesn't exist, no asset will be assigned to the points.
{% endhint %}

</details>

