---
icon: circle-dashed
---

# Noise : Voronoi

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates Voronoi cell patterns with multiple output modes for procedural content generation.

### Overview

This factory generates Voronoi noise, which produces cellular patterns based on randomly distributed points in 3D space. The resulting pattern creates distinct regions (cells) around each point, with boundaries forming natural-looking cell walls.

{% hint style="info" %}
Connects to **Noise** input pins on other nodes that require procedural value sampling.
{% endhint %}

### How It Works

Voronoi noise works by generating a set of random points in 3D space. For any given position, it calculates the distance to the nearest point and returns a value based on that distance or cell characteristics. The pattern creates natural-looking cellular structures with sharp boundaries between regions.

The factory supports multiple output modes:

* **Cell Value**: Returns a unique scalar value for each cell
* **Distance to Center**: Returns the distance from input position to the center of its cell
* **Edge Distance**: Returns the distance to the nearest cell boundary
* **Crackle**: Returns the difference between the two closest distances (F2-F1)

### Configuration

***

#### General

**Output Type**

_Controls what value is returned for each cell._

When set to:

* **Cell Value**: Each cell returns a unique scalar value
* **Distance to Center**: Distance from input position to cell center
* **Edge Distance**: Distance from input position to nearest cell boundary
* **Crackle (F2-F1)**: Difference between two closest distances

**Jitter Amount**

_Control how much randomness is applied to cell positions._

A value of 0.0 creates perfectly aligned cells, while 1.0 creates maximum randomness in cell placement. Values between 0 and 1 allow for controlled variation in cell patterns.

**Smoothness**

_Control the smoothness of cell boundaries._

When set to 0.0, cell boundaries are sharp and angular. Higher values (0.1-1.0) create smoother transitions between cells, making the pattern appear more organic and less grid-like. Use this to control how "crisp" or "soft" the cell edges appear.

### Usage Example

Use this factory to create natural-looking terrain features like:

* Stone or tile patterns with distinct regions
* Organic growth patterns for vegetation placement
* Displacement maps for rock or terrain texturing
* Procedural material variations based on cell membership

Connect the output to a **Noise** pin on nodes like **Point Noise**, **Attribute Noise**, or **Mesh Noise** to apply the Voronoi pattern to point positions or attributes.

### Notes

* Higher jitter values create more organic, less structured patterns
* Smoothness controls how much cell boundaries blend into each other
* Edge Distance output is ideal for creating natural-looking borders or outlines
* Crackle mode can be used to create interesting texture variations by emphasizing differences between neighboring cells
* Combine multiple Voronoi noise sources with different settings for complex layered patterns

### Inputs

* **Noise** (Optional): Input noise to use as base for the Voronoi pattern. If not connected, the node generates its own random points.

### Outputs

* **Noise**: The generated Voronoi noise pattern that can be connected to other nodes requiring procedural value sampling.
