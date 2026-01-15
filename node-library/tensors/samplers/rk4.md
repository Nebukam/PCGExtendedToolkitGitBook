---
icon: sliders
---

# RK4

Samples the field using Runge-Kutta 4 method

⚙️ **Behavior** — Instanced directional tensor.

**How It Works**

> AI-Generated, needs proofreading

* Samples the field using the Runge-Kutta 4 (RK4) method to approximate solutions to ordinary differential equations.
* Computes four estimates of the slope at different points within the interval defined by the current state and step size.
* Uses a weighted average of these slopes to predict the next value in the sequence, improving accuracy over simpler methods like Euler's.

_No configurable settings._

***

Source: `Source\PCGExElementsTensors\Public\Samplers\PCGExTensorSamplerRK4.h`
