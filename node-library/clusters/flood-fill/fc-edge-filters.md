---
description: 'In editor :: PCGEx | Fill Control : Edge Filters'
icon: circle-dashed
---

# FC : Edge Filters

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Filters edges along which the diffusion can occur.

### Overview

This factory creates a **fill control** that restricts how flood fill operations spread by filtering the edges between points. It uses point filters to determine whether an edge should be considered valid for diffusion.

{% hint style="info" %}
Connects to **Fill Control** pins on flood fill nodes
{% endhint %}

### How It Works

This factory defines a set of rules that control which connections (edges) between points are allowed during a flood fill operation. Instead of spreading freely, the diffusion is constrained by filters applied to the edges. This allows for complex behaviors like:

* Only allowing diffusion along specific geometric relationships
* Restricting spread based on point attributes
* Creating barriers or pathways in your procedural generation

### Inputs

#### Config

_The configuration settings that define how this fill control operates._

Controls the core behavior of the edge filtering system.

#### Filter Factories

_List of point filters to apply to edges._

Each filter defines a condition that must be met for an edge to be considered valid. Multiple filters can be combined, and they all must pass for an edge to be allowed.

### Outputs

#### Fill Control

_The resulting fill control that can be connected to flood fill nodes._

This output provides the configured edge filtering behavior that controls how diffusion spreads through your point cloud.

### Configuration

***

#### General

**Config**

_The configuration settings that define how this fill control operates._

Controls the core behavior of the edge filtering system.

**Filter Factories**

_List of point filters to apply to edges._

Each filter defines a condition that must be met for an edge to be considered valid. Multiple filters can be combined, and they all must pass for an edge to be allowed.

### Usage Example

Use this factory with a **Flood Fill** node to create a diffusion that only spreads along specific connections. For example:

1. Create a point cloud representing terrain
2. Add a **Fill Control : Edge Filters** node
3. Connect a **Filter : Distance** node to the filter input
4. Set the distance threshold to 2 units
5. Connect this to a Flood Fill node

Result: The flood fill will only spread between points that are within 2 units of each other, creating a localized diffusion pattern.

### Notes

* This factory works by evaluating filters on the edges connecting points during the flood fill process
* Multiple filters can be combined to create complex edge restrictions
* Filters are applied in order, and all must pass for an edge to be valid
* The filter inputs should be connected to point filter factories that define your edge conditions
