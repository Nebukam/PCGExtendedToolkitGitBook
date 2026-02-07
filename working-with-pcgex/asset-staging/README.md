---
description: Asset collection workflow
icon: boxes-packing
---

# Asset Staging

PCGEx introduces the concept of [assets-management](../../node-library/assets-management/ "mention"), a small set of features that work together to **heavily streamline managing list of assets and distribute them on points; as well as promote re-usability and easy tooling.**

> In short, a collection a list of entries, each of which has a weight, full ISMC / SM descriptor exposed, material randomization, sockets (including custom entries), transform variations, and a few additional goodies.

{% hint style="info" %}
Asset management is primarily designed for random distribution but can be used with more precise control as well.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### Staging has two main components

{% stepper %}
{% step %}
### Asset Collections

The first part is [collections](../../node-library/assets-management/collections/ "mention").

Asset collections are **data assets** that contain a list of _entries_. Each entry represent a single mesh, actor _or another collection_; and it expose useful parameters.

> There are two main types of collections at the moment: [mesh-collection.md](../../node-library/assets-management/collections/mesh-collection.md "mention") and [actor-collection.md](../../node-library/assets-management/collections/actor-collection.md "mention"). _Each is dedicated to a single type of asset, but you can't mix the two types together — i.e, Mesh-type collection cannot have actor-type subcollections_.
{% endstep %}

{% step %}
### Asset Staging Node

The second part is the [asset-staging](../../node-library/assets-management/asset-staging/ "mention") node.

That node takes a single Collection data asset and use information & attributes stored on those points to _assign_ a single entry to each point; and can do extensive computations based on the selected entry.

> Note that the asset staging doesn't spawn anything — it only prepare the points with all the necessary information for them to spawn later with the stock `Static Mesh Spawner` or `Spawn Actor` nodes.
>
> _Mesh Collections can also be used with_ [spline-mesh](../../node-library/paths/spline-mesh/ "mention")_._
{% endstep %}
{% endstepper %}

{% content-ref url="technical-note-asset-collections.md" %}
[technical-note-asset-collections.md](technical-note-asset-collections.md)
{% endcontent-ref %}

## Basic Collection Management

### Creating Collections

There's two ways of creating a new collection; either a fresh new data asset, or through content browser action from a selection of either mesh or actors.&#x20;

<details>

<summary>New Data Asset</summary>

Simply create a new asset of type **Data Asset** and select either `[PCGEx] Mesh Collection` or `[PCGEx] Actor Collection`, depending on the type of asset you want to work with.

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>



</details>

<details>

<summary>Create Collection from Selection</summary>

Select a bunch of either static mesh or actors in the content browser, right click on any of them and go to `Asset Action > Create Or Update Asset Collection(s)`

This will create a fresh new asset collection with an entry for each item&#x20;

<figure><img src="../../.gitbook/assets/image (3) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Note that if an asset collection asset is part of the content browser selection, **that collection will be updated with the selected items** **instead of creating a new asset**.

_Updating a collection means adding the selected assets to the collection, not replacing them._
{% endhint %}

</details>

### Collection Editor

{% tabs %}
{% tab title="Assets Tab" %}
<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

The Asset tab is selected by default and represent the content of the collection.&#x20;

> Some settings can be set per-item, or instead use global parameter set at the collection level itself.
{% endtab %}

{% tab title="Collection Settings" %}
<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

The Collection Settings contains global settings.&#x20;

> Individual entries may be set-up to use values stored here instead, so it's easier to batch-override values.
{% endtab %}
{% endtabs %}

### Managing entries

Once you have one or more collection running, you'll want to make sure to add one or more _entries_.

{% hint style="danger" %}
When modifying a collection (adding entry, tweaking parameters), **make sure to hit the Rebuild Staging button at the top and save the asset when you're done.**

_This will make sure precomputed data is properly updated before saving._
{% endhint %}

> _We'll be using a Mesh Collection for the example, Actor Collection have a slightly different model but same rules apply._

<figure><img src="../../.gitbook/assets/image (3) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Entries can be either an asset, or another collection!</p></figcaption></figure>

**Entries are a list of potential things that can be associated (**_**or matched**_**) with a point** when that collection is used with the [asset-staging](../../node-library/assets-management/asset-staging/ "mention") node.

What matters the most is the `Static Mesh,` `Weight` and `Category`.             &#x20;

* `Static Mesh` represent the mesh associated with this entry.
* `Weight` is the weight of this entry relative to other entries _within the collection_.
* `Category` is optional, but is a convenient way to "group" entries together inside a collection. _It can play a key role in narrowing distribution._

{% hint style="info" %}
There is no need to set the mesh in the available descriptors; that value will be overwritten with the main Static Mesh.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (6) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

<details>

<summary>Entry properties overview</summary>

Properties are covered in more details in their respective collection' section; but how they are used (or ignored) depends on the context in which the collection is used.

{% hint style="warning" %}
&#x20;Most of these features require the use of both the [Asset Staging](../../node-library/assets-management/asset-staging/) node in _Collection Map_ mode and the [Mesh Selector - Staged](../../node-library/assets-management/asset-staging/mesh-selector-staged.md) on the `Static Mesh Spawner`.
{% endhint %}

* `Is Sub Collection` lets you use **another collection instead of a single mesh**. If that entry gets picked, an entry from that sub-collection will be selected instead. There's no limit to the amount of nesting; <mark style="color:$danger;">but make sure to not create circular dependencies</mark>.
* `ISM descriptor` is only used when working with the `Static Mesh Spawner`.
* `SM descriptor` is only used by Spline Mesh components generated by the [Spline Mesh](../../node-library/paths/spline-mesh/) node
* `Material Variants` lets you setup material randomization; <mark style="color:$info;">for either 1-slot materials or multi-slot with specific indices.</mark>
* `Category` is for when you want more precise control when staging assets, allowing points to only consider entries from a specific category.
* `Tags` will be added on generated components (_ISMC or SplineMeshes_)
* `Variation Mode` & `Variations` are opt-in feature to add some ranged variance to spawned assets, such as slight offsets in position, rotation or scale.
* `Staging` contains the pre-computed data that will be used by the Asset Staging node, as well as sockets gathered from the selected mesh. <mark style="color:$info;">It's mostly read-only for verification purposes; although socket support custom entries</mark>.

{% hint style="success" %}
**A weight value of 0 will disable that entry**, letting you keep all the settings and iterate faster with different settings without loosing data.
{% endhint %}

</details>

## Collection Staging

Preferred Setup - Collection Map

This cover the preferred way of working with the asset collection. If you're after the least "custom" approach, or simply need a random asset path, see [#basic-setup-mesh-path-to-attribute](./#basic-setup-mesh-path-to-attribute "mention").

{% stepper %}
{% step %}
### Stage a collection

Drop the PCGEx' Asset Staging node and select which collection to use and change the `Output Mode` to **Collection Map**.

<figure><img src="../../.gitbook/assets/image (10) (1) (1).png" alt=""><figcaption></figcaption></figure>

This will reveal a new <mark style="color:$warning;">**Map**</mark> pin, and add a non-human readable value to the points data.

<details>

<summary>What's going on here</summary>

Collection map output will write a `int64` attribute on the points as well as output a small attribute set with some data in it.

The `int64` attribute `PCGEx/CollectionEntry` contains packed selection data for that point, in a format that can be very efficiently retrieved by the [mesh-selector-staged.md](../../node-library/assets-management/asset-staging/mesh-selector-staged.md "mention") with the help of the data mapping produced by the node.

You can read more about this in the [technical-note-asset-collections.md](technical-note-asset-collections.md "mention")

</details>
{% endstep %}

{% step %}
### Spawn meshes

Drop a stock `Static Mesh Spawner`, select the [mesh-selector-staged.md](../../node-library/assets-management/asset-staging/mesh-selector-staged.md "mention").

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

Now, expand the node to reveal extra pins, and plug the [asset-staging](../../node-library/assets-management/asset-staging/ "mention")' <mark style="color:$warning;">**Map**</mark> to the the <mark style="color:$warning;">**Overrides**</mark> pin of the spawner.&#x20;

<mark style="color:$success;">That's it.</mark>
{% endstep %}
{% endstepper %}

> Collection Map enable more advanced ways to stage lots of assets and use a single `Static Mesh Spawner` — read more about it in the [chain-staging.md](chain-staging.md "mention") page.

### Basic setup - Mesh path to attribute

The most straightforward way to use Asset Collections is by using them with an Asset Staging node, and output the entry path to an attribute for use with the `Mesh Selector by Attribute`.

{% hint style="info" %}
**This is not the preferred way to work with asset collections** as it prevents you from leveraging the much more efficient workflow covered right after this.
{% endhint %}

<details>

<summary>1 - Stage a collection</summary>

Drop the PCGEx' Asset Staging node and select which collection to use.\
By default, this will write the path of the mesh to a new point attribute named `AssetPath`

_The staging node offer a lot of options and tweaks, which we won't cover here._

<figure><img src="../../.gitbook/assets/image (8) (1) (1).png" alt=""><figcaption></figcaption></figure>

This will distribute entries on the points, writing the asset path to an attribute and optionally modifying the output points so they match the bounds of the mesh when spawned.

</details>

<details>

<summary>2 - Spawn Meshes</summary>

Drop a stock `Static Mesh Spawner`, select the `Mesh Selector by Attribute` and use the attribute your wrote to in the previous step.

<figure><img src="../../.gitbook/assets/image (9) (1) (1).png" alt=""><figcaption></figcaption></figure>

<mark style="color:$success;">That's it.</mark>

</details>

## In depth Staging settings

Now that you have a basic setup running with an asset staging node and a collection distributed to points, let's dig into the meat of that node' features.

* [distribution.md](distribution.md "mention") controls how entries & sub-collections are assigned to individual points.
* [fit-to-size.md](fit-to-size.md "mention") and [justification.md](justification.md "mention") covers how [fitting.md](../../node-library/shared-concepts/fitting.md "mention") settings are used in the context of staging
* [variations.md](variations.md "mention") covers briefly how variations can be leveraged during staging.

