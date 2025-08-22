---
description: Stability Update
icon: tag
---

# v0.68

> 0.68 has few completely new features, but instead is a more stability & QoL-focused one. I've been trying to reduce compile times & binary size (with little success), address some recurring pain points etc.

## Compilation time improvements

This is probably the biggest change with this update. \
**While compilation time is still long**, a lot of refactoring in various places, include cleanups, reduced templatization etc, translated into _major_ improvements between this release and 0.66.

First time compilation (depending on hardware, but you get a sense of scale)

* Unity Build : <mark style="color:$success;">**\~150s**</mark> <mark style="color:$info;">(down from 500-600s)</mark>
* Non-unity Build : <mark style="color:$success;">**\~450s**</mark> <mark style="color:$info;">(down from 2800-3000s)</mark>

Also as a collateral of this exercise, FAB binaries have shrunk down from \~<mark style="color:$info;">2gb</mark> to \~<mark style="color:$success;">**1.3gb**</mark>! 🔥

## Deprecation x Replacements

In order to make the codebase more maintainable, a couple of filters have been deprecated in favor of alternatives that handle all use cases more efficiently.

### [Filter : Inclusion](../../../node-library/filters/filters-points/spatial/inclusion.md)

{% hint style="success" %}
Targets accepts any path-like data such as **Paths**, **Splines**, and soon **Polygon2D**.
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (70).png" alt=""><figcaption></figcaption></figure>

Replaces [Filter : Path Inclusion](../../../node-library/filters/filters-points/spatial/path-inclusion.md), [Filter : Spline Inclusion](../../../node-library/filters/filters-points/spatial/spline-inclusion.md) and [Filter : Polygon 2D Inclusion](../../../node-library/filters/filters-points/spatial/polygon-2d-inclusion.md). It's almost a drop-in replacement : you can copy-paste most settings from the old nodes to the new one by doing the `right-click/left-click trick` on the **Settings** subsection of the detail panels.

### [Filter : Time](../../../node-library/filters/filters-points/spatial/time.md)

**Same as above**, but for [Filter : Path Alpha](../../../node-library/filters/filters-points/spatial/path-alpha.md) and [Filter : Spline Alpha](../../../node-library/filters/filters-points/spatial/spline-alpha.md)

### [Spatial Triage](../../../node-library/quality-of-life/spatial-triage.md)

<figure><img src="../../../.gitbook/assets/image (73).png" alt=""><figcaption></figcaption></figure>

A small quality of life helper that sort spatial data in three main categories against a unique (partition) bound object.

* Inside, if the center of the data bounds lies inside the bounds.
* Touching, if the data bounds intersect
* Discarded, if the data is neither inside or touching

## Cleanup & Bugfixes

* Factories (a.k.a subnodes) that rely have inputs  no longer forward their input data when disabled. _This was a minor annoyance when iterating with filters, where you'd get a "unsupported type" warning because it would forward the input of the filters/factores "as an factory"._
* Fixed a minor bug with the FloodFill node that would ignore "preserve PCGEx data" when forwarding seed data. This would cause issues if the seed were Vtx, as they would override the valid `PCGEx/VData` with the value stored on the seed.
* Some nodes now properly cleanup the @Data.IsClosed attribute where relevant — there's probably a few places I've missed.
* Minor fixes on range pickers where it failed to process ranges of 1 in the form N..N where N would be the same index.
* Fixed a rare crash occurring with Delaunay 2D with certain specific point configurations (overlaps)
* Fixed a long-time issue when filtering out cluster output by min/max element count (to remove too small or too large cluster) that would cause vtx to be at the wrong locations. It comes as a slight cost to performance compared to previous code but it's relatively negligible.
* Path processors now don't output invalid paths.  A few of them did output invalid, 1-point or empty data; this is no longer the case.

## New Examples

> Added a few more examples as part of the example project

### Houses & Gardens

Showcases how to find & filter cells, and create a path from a point inside a cell to a random location on the cell path.

<figure><img src="../../../.gitbook/assets/image (71).png" alt=""><figcaption></figcaption></figure>

### Runtime Partitoned Spline Meshes

Showcases one way to deal with partitioned splines meshes : isolate the relevant section of a spline that's inside a partition and tighly cut it against partition bounds

<figure><img src="../../../.gitbook/assets/image (72).png" alt=""><figcaption></figcaption></figure>
