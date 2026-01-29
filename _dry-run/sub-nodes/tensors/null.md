---
description: 'In editor :: PCGEx | Tensor : Null'
---

# Null

**A tensor that represents a null/zero field.**

Input points create regions where the tensor field is nullified. Useful for creating dead zones or stopping regions.

---

## How It Works

```
Null regions reduce tensor influence

Normal flow:    ──► ──► ──► ──► ──►

With null zone: ──► ──►  ·  ──► ──►
                       ↑
                   Null point
                   (zero direction)
```

---

## Settings

Null tensor has minimal settings — it primarily uses the standard influence radius from point bounds.

The tensor returns zero direction and zero potency within its influence radius.

---

## Example Use Cases

### Dead Zones
Create regions where extrusion stops:
- Place null points where paths should end
- Paths entering the zone lose direction

### Blocking Regions
Prevent flow through certain areas:
- Null zones act as barriers
- Combined with other tensors, they create "holes" in the field

### Calm Areas
Create regions of stability:
- Amid chaotic noise or spin fields
- Null zones provide stillness

---

{% hint style="info" %}
**Combining with Other Tensors**: When weighted with other tensors, null effectively dampens their influence. A null zone with high weight can create a "calm eye" in a storm of other tensor effects.
{% endhint %}

---

📦 **Module**: `PCGExElementsTensors` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/dev/Source/PCGExElementsTensors/Public/Tensors/PCGExTensorNull.h)
