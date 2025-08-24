---
description: Technical design node on Asset Collections
hidden: true
icon: microchip
---

# Technical Note : Asset Collections

The original reason for asset collections to exist is to facilitate randomized, weighted distribution of meshes to points, and mutate the target points so they match the size of the asset once spawned, **without spawning them right away**.

> In a lot of situations you'll want to spawn assets and then prune some of them based on overlap, or do more things accounting for the bounds of said assets. With the stock workflow, you'd need to implement a system of PCG Loop to loop over mesh references, load them, compute their bounds, and the match-and-set and whatnot.

Collections are designed so each entry cache its asset bounds, so only the collection has to be loaded (once!) in order to know about those and do spatial math with them.

Collections have evolved over time, and they now support a much wider range of features & data, such as sockets, material randomization, transform variations, tags etc — **all using soft references** — and all centralized into a handy one-stop data asset.



## Collection Map

The collection map outputs packed data into a int64 on the point, as well as an attribute set.

The `int64` contains the following data:

`[ Collection Index , [ Entry Index, Material Pick ] ]`

* <mark style="color:$info;">Higher 32 bits</mark> : Collection GUID (stored in the map, associated with that collection' data asset path)
* <mark style="color:$info;">Lower 32 bits</mark>:
  * <mark style="color:$info;">Higher 16 bits</mark> : Index of the entry within the collection
  * <mark style="color:$info;">Lower 16 bits</mark> : Index of the picked materials, if any

Since we now have direct access to the collection data, we can leverage the entry descriptors as-is, with full customizability; add per-mesh tag on the components very easily, and so much more <mark style="background-color:$success;">**without ever needing that information to be stored on expensive attributes**</mark>.

{% hint style="success" %}
This makes it so collection maps can be safely merged, as their ID is unique there will be no overlap.
{% endhint %}

The main advantage of using that approach is that points can be staged and prepared for spawning and greatly reduce the number of data object sent to a unique spawner — ensuring ISMC uniqueness and swift update. When GPU is not an option, **this ensure the smallest achievable minimum of drawcalls per unique mesh configuration**.

