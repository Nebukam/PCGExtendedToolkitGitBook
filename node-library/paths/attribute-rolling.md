---
description: 'In editor :: PCGEx | Path : Attribute Rolling'
icon: circle
---

# Attribute Rolling

Does a rolling blending of properties & attributes.

**How It Works**

> AI-Generated, needs proofreading

* The node blends properties and attributes over a defined path using a rolling mechanism controlled by specified range and value settings.
* It initializes with an initial value set through the Initial Value Mode setting, which determines how the starting toggle value is applied.
* During processing, the node applies rolling adjustments to the values based on the Range Control and Value Control parameters, modifying attributes along the defined path accordingly.
* If Reverse Rolling is enabled, the node processes the rolling order in reverse, altering the sequence of modifications applied to the properties and attributes.

#### Configuration

<details>

<summary><strong>Range Control</strong> <code>PCGExRollingRangeControl</code></summary>

Rolling range control

**Values:**

* **Start/Stop**: Uses two separate set of filters to start & stop rolling
* **Toggle**: Uses a single set of filter that switches roll on/off whenever a point passes

</details>

<details>

<summary><strong>Value Control</strong> <code>PCGExRollingValueControl</code></summary>

Rolling value control

**Values:**

* **Pin**: Uses filter to determine when a point should be used as reference for rolling
* **Previous**: Use the previous point' value
* **Range Start**: Use the first point of a range

</details>

<details>

<summary><strong>Initial Value Mode</strong> <code>PCGExRollingToggleInitialValue</code></summary>

Controls initial value mode.

**Values:**

* **Constant**: Use a constant value.
* **Constant Preserve**
* **From Point**: Use the first point starting value.

</details>

<details>

<summary><strong>Initial Value</strong> <code>bool</code></summary>

Starting toggle value.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Reverse Rolling</strong> <code>bool</code></summary>

Reverse rolling order

⚡ PCG Overridable

</details>

<details>

<summary><strong>Blend Outside Range</strong> <code>bool</code></summary>

Enable blend operations to be processed outside the rolling range. This can be useful in some cases.

</details>

<details>

<summary><strong>Blend Stop Element</strong> <code>bool</code></summary>

Controls blend stop element.

</details>

**Output**

<details>

<summary><strong>Write Range Start</strong> <code>bool</code></summary>

Controls write range start.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Start</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write range start to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Range Stop</strong> <code>bool</code></summary>

Controls write range stop.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Stop</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write range stop to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Range Pole</strong> <code>bool</code></summary>

Controls write range pole.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Pole</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write range pole to. A pole is either start or stop.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Range Index</strong> <code>bool</code></summary>

Controls write range index.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Index</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write range index to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Index Offset</strong> <code>int32</code></summary>

Let you add an offset to the range index value. Since it's an index, its default value is -1, and the first index is 0; a default value of 0 or above may be more desirable for some usecases.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Is Inside Range</strong> <code>bool</code></summary>

Controls write is inside range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Is Inside Range</strong> <code>Name</code></summary>

Name of the 'bool' attribute to write whether a point is inside the range or not.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Index Inside Range</strong> <code>bool</code></summary>

Controls write index inside range.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Index inside Range</strong> <code>Name</code></summary>

Name of the 'int32' attribute to write range index to.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsPaths\Public\Elements\PCGExAttributeRolling.h`
