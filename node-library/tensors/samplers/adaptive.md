---
icon: sliders
---

# Adaptive

Adaptive step size based on field curvature. More accurate in curved regions.

⚙️ **Behavior** — Instanced directional tensor.

**How It Works**

> AI-Generated, needs proofreading

* Computes step sizes dynamically based on the curvature of the field to ensure more accurate integration in regions where the field is highly curved.
* Adjusts the size of each step during numerical integration automatically, reducing step size in areas with higher curvature and increasing it in flatter regions.
* Aims to maintain a balance between computational efficiency and accuracy by adapting the step size according to the local characteristics of the field.

_No configurable settings._

***

Source: `Source\PCGExElementsTensors\Public\Samplers\PCGExTensorSamplerAdaptive.h`
