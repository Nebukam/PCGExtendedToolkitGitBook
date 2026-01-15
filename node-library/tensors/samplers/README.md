---
icon: sliders
---

# Samplers

#### Settings

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

If enabled, sampling direction will be inverted.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Normalize</strong> <code>bool</code></summary>

If enabled, normalize sampling. This effectively negates the influence of effectors potency.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Size Input</strong> <code>EPCGExInputValueType</code></summary>

Type of Size

</details>

<details>

<summary><strong>└─ Size (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Start Offset Attribute (Vector 2 expected)

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Size</strong> <code>double</code></summary>

Constant size applied after normalization. This will be scaled

⚡ PCG Overridable

</details>

<details>

<summary><strong>Uniform Scale</strong> <code>double</code></summary>

Uniform scale factor applied to sampling after all other mutations are accounted for.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sampler Settings</strong> <code>FPCGExTensorSamplerDetails</code></summary>

Uniform scale factor applied to sampling after all other mutations are accounted for.

⚡ PCG Overridable

</details>

#### Used In

* ExtrudeTensors
* TensorsTransform
* TensorDotFilter
* HeuristicTensor
* ProbeTensor

***

Defined in: `Source\PCGExElementsTensors\Public\Core\PCGExTensorHandler.h`
