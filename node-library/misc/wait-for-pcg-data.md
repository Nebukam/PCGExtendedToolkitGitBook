---
description: 'In editor :: PCGEx | Wait For PCG Data'
icon: circle
---

# Wait for PCG Data

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Waits for and retrieves data from PCG components that match specified criteria.

#### How It Works

This node searches for PCG components attached to actors in the level, filtering them based on graph instance, generation trigger, and optional tags. It waits for these components to finish generating their output before collecting and forwarding the resulting point data downstream. This ensures that downstream operations only begin once all required procedural content has been fully generated.

The node first identifies actors using a reference attribute or constant value. Then it looks for PCG components attached to those actors that match the specified graph instance and optional filtering criteria. If enabled, it waits for matching components to complete their generation process. Once components are found and generated, it collects point data from them and forwards this data through output pins.

The node supports different generation triggers (like GenerateOnLoad, GenerateOnDemand) by applying specific actions such as ignoring, generating, or refreshing components as needed.

#### Configuration

<details>

<summary><strong>ActorReferenceAttribute</strong><br><em>Actor reference that we will be waiting for PCG Components with the target graph.</em></summary>

The name of the attribute on input points that contains actor references to look for PCG components. Defaults to `ActorReference`.

</details>

<details>

<summary><strong>TemplateInput</strong><br><em>Controls whether the target graph is specified as a constant or read from an attribute.</em></summary>

Controls whether the target graph is specified as a constant or read from an attribute.

**Values**:

* **Constant**: Use a fixed graph instance.
* **Attribute**: Read the graph instance from an attribute on input points.

</details>

<details>

<summary><strong>TemplateGraph</strong><br><em>Graph instance to look for. Will wait until a PCGComponent is found with that instance set, and its output generated.</em></summary>

The graph instance to search for when looking for PCG components. Only used if `TemplateInput` is set to **Constant**.

</details>

<details>

<summary><strong>TemplateGraphAttributeName</strong><br><em>Graph instance to look for. Will wait until a PCGComponent is found with that instance set, and its output generated.</em></summary>

The name of the attribute on input points from which to read the graph instance to search for. Only used if `TemplateInput` is set to **Attribute**.

</details>

<details>

<summary><strong>bMustMatchTemplate</strong><br><em>If enabled, will skip components which graph instances is not the same as the specified template.</em></summary>

When enabled, only components using the exact same graph instance as specified in `TemplateGraph` or `TemplateGraphAttributeName` are considered.

</details>

<details>

<summary><strong>MustHaveTag</strong><br><em>If not None, will only consider components with the specified tag.</em></summary>

If set to a valid tag name, only PCG components that have this tag will be processed.

</details>

<details>

<summary><strong>bDoMatchGenerationTrigger</strong><br><em>If enabled, only process component with the specified generation trigger.</em></summary>

When enabled, filters components based on their generation trigger (e.g., GenerateOnLoad, GenerateOnDemand).

</details>

<details>

<summary><strong>MatchGenerationTrigger</strong><br><em>If enabled, only process component with the specified generation trigger.</em></summary>

The specific generation trigger to match when filtering components. Only used if `bDoMatchGenerationTrigger` is enabled.

**Values**:

* **GenerateOnLoad**: Components that generate on level load.
* **GenerateOnDemand**: Components that generate on demand.
* **GenerateAtRuntime**: Components that generate at runtime.

</details>

<details>

<summary><strong>bInvertGenerationTrigger</strong><br><em>If enabled, only process component that do not match the specified generation trigger</em></summary>

When enabled, inverts the matching logic for `MatchGenerationTrigger`, so components that do NOT match are processed instead.

</details>

<details>

<summary><strong>bWaitForMissingActors</strong><br><em>If enabled, will wait for actor references to exist.</em></summary>

When enabled, waits for actors referenced in the input points to actually exist in the level before proceeding with component searches.

</details>

<details>

<summary><strong>WaitForActorTimeout</strong><br><em>Time after which the search is considered a fail.</em></summary>

The maximum time (in seconds) to wait for actors to be found. Only used if `bWaitForMissingActors` is enabled.

</details>

<details>

<summary><strong>bWaitForMissingComponents</strong><br><em>If enabled, will wait for at least a single PCG component to be found that uses the target Graph. Use carefully, and only if you know for sure it will be found at some point!</em></summary>

When enabled, waits for at least one matching PCG component to exist before proceeding. This can be useful in dynamic scenarios but should be used cautiously.

</details>

<details>

<summary><strong>WaitForComponentTimeout</strong><br><em>Time after which the search is considered a fail.</em></summary>

The maximum time (in seconds) to wait for matching components to be found. Only used if `bWaitForMissingComponents` is enabled.

</details>

<details>

<summary><strong>GenerateOnLoadAction</strong><br><em>How to deal with found components that have the trigger condition 'GenerateOnLoad'</em></summary>

Controls how components with the `GenerateOnLoad` trigger are handled.

**Values**:

* **Ignore**: Skip processing this component.
* **As-is**: Use the data as-is without regenerating.
* **Generate**: Generate and wait for completion if not already generated.
* **ForceGenerate**: Force regeneration and wait for completion.

</details>

<details>

<summary><strong>GenerateOnDemandAction</strong><br><em>How to deal with found components that have the trigger condition 'GenerateOnDemand'</em></summary>

Controls how components with the `GenerateOnDemand` trigger are handled.

**Values**:

* **Ignore**: Skip processing this component.
* **As-is**: Use the data as-is without regenerating.
* **Generate**: Generate and wait for completion if not already generated.
* **ForceGenerate**: Force regeneration and wait for completion.

</details>

<details>

<summary><strong>GenerateAtRuntime</strong><br><em>How to deal with found components that have the trigger condition 'GenerateAtRuntime'</em></summary>

Controls how components with the `GenerateAtRuntime` trigger are handled.

**Values**:

* **Ignore**: Skip processing this component.
* **As-is**: Use the data as-is without refreshing.
* **RefreshFirst**: Refresh and wait for completion.

</details>

<details>

<summary><strong>bIgnoreRequiredPin</strong><br><em>If enabled, available data will be output even if some required pins have no data.</em></summary>

When enabled, allows outputting collected data even if not all expected pins contain valid data.

</details>

<details>

<summary><strong>bDedupeData</strong><br><em>If enabled, only output component data once per unique actor. Otherwise, output data as many time as found. Note that when enabled, TargetIndexToTag will be disabled.</em></summary>

When enabled, ensures each unique actor contributes only one set of point data to the output, even if multiple matching components are found.

</details>

<details>

<summary><strong>bCarryOverTargetTags</strong><br><em>If enabled, target collections' tags will be added to the output data.</em></summary>

When enabled, copies tags from the source PCG components into the output point data.

</details>

<details>

<summary><strong>TargetAttributesToDataTags</strong><br><em>Lets you tag output data with attribute values from target points input</em></summary>

Allows mapping attributes from the input points to tags in the output data.

</details>

<details>

<summary><strong>bOutputRoaming</strong><br><em>If enabled, adds an extra pin that contains all the data that isn't part of the template.</em></summary>

When enabled, creates an additional output pin (`Roaming Data`) containing point data not matching the main template.

</details>

<details>

<summary><strong>RoamingPin</strong><br><em>If enabled, adds an extra pin that contains all the data that isn't part of the template.</em></summary>

The name of the roaming output pin. Only used if `bOutputRoaming` is enabled.

</details>

<details>

<summary><strong>bQuietActorNotFoundWarning</strong><br><em>Suppresses warnings about missing actors.</em></summary>

When enabled, suppresses warning messages when actors referenced in input points are not found.

</details>

<details>

<summary><strong>bQuietComponentNotFoundWarning</strong><br><em>Suppresses warnings about missing components.</em></summary>

When enabled, suppresses warning messages when matching PCG components are not found.

</details>

<details>

<summary><strong>bQuietTimeoutError</strong><br><em>Suppresses errors related to timeouts.</em></summary>

When enabled, suppresses error messages when waiting for actors or components times out.

</details>

#### Usage Example

1. Create a set of points that represent actor locations.
2. Assign an `ActorReference` attribute to each point referencing an actor in the level.
3. Set up the Wait for PCG Data node with:
   * `TemplateInput` = **Attribute**
   * `TemplateGraphAttributeName` = `@Data.MyGraph`
   * `bWaitForMissingActors` = true
   * `bWaitForMissingComponents` = true
4. Connect the points input to your point source.
5. Connect the output pins to downstream nodes that process the collected data.

This setup ensures that all PCG components matching a graph attribute on each point are found, waited for, and their outputs are used in further processing.

#### Notes

* This node is designed for scenarios where PCG components are generated asynchronously or dynamically.
* Be cautious with `bWaitForMissingComponents` as it can block execution indefinitely if the expected component never appears.
* The node supports multi-threaded operations for better performance when dealing with many actors and components.
