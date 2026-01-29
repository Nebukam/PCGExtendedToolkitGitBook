---
icon: toggle-on
---

# Input Value Sources

How PCGEx settings can read values from constants or attributes.

## When You'll See This

Throughout PCGEx, many settings offer a choice: use a **fixed value** you specify, or **read from an attribute** on each point. This pattern appears whenever a node needs per-point flexibility.

You'll recognize it by the dropdown that toggles between **Constant** and **Attribute** modes.

## The Core Idea

Instead of hardcoding a single value for all points, you can drive settings from your data. A threshold, an offset, a direction—any of these can vary per-point when you need it to.

**Constant mode**: Same value for every point. Fast, simple, predictable.

**Attribute mode**: Each point reads its own value from an attribute. Flexible, data-driven.

---

## How It Looks in the Editor

When a setting supports both modes, you'll see:

1. **Mode dropdown**: Toggle between "Constant" and "Attribute"
2. **Value field** (Constant mode): Enter your fixed value directly
3. **Attribute selector** (Attribute mode): Pick which attribute to read from

The value field and attribute selector swap based on your mode selection.

---

## Available Types

Input value sources exist for all common data types:

| Type | Constant Field | Notes |
|------|----------------|-------|
| **Boolean** | Checkbox | True/false flags |
| **Float** | Number field | 32-bit precision |
| **Double** | Number field | 64-bit precision |
| **Double (Abs)** | Number field | Non-negative only (≥0) |
| **Double (0-1)** | Slider | Normalized range |
| **Integer** | Number field | Whole numbers |
| **Integer (Abs)** | Number field | Non-negative only (≥0) |
| **Vector2** | X, Y fields | 2D vectors |
| **Vector** | X, Y, Z fields | 3D vectors |
| **Direction** | X, Y, Z fields | 3D direction (may include flip option) |
| **Vector4** | X, Y, Z, W fields | 4D vectors |
| **Rotator** | Pitch, Yaw, Roll | Euler angles |
| **Transform** | Location, Rotation, Scale | Full transforms |
| **String** | Text field | Text data |
| **Name** | Text field | FName identifiers |

---

## Name vs Selector Variants

Some settings use a simple **attribute name** (just type the name). Others use a full **attribute selector** that can access:

- Point attributes
- Point properties (`$Position`, `$Rotation`, `$Scale`, etc.)
- Nested property paths

The selector variant is more powerful but the simple name variant covers most cases.

---

## How It Works

1. **At configuration time**: You set the mode and either a constant value or attribute reference
2. **At initialization**: The node validates that referenced attributes exist
3. **At processing time**: For each point, the value is retrieved
   - Constant mode: Returns your specified value (very fast)
   - Attribute mode: Reads from that point's attribute

If an attribute doesn't exist and you're in Attribute mode, the node typically falls back to the constant value and may log a warning.

---

## Common Patterns

**Uniform behavior** (same for all points):
- Mode: Constant
- Set your desired value

**Per-point variation** (data-driven):
- Mode: Attribute
- Select an attribute containing per-point values

**Attribute with fallback**:
- Mode: Attribute
- Select an attribute that may not exist on all data
- The constant value acts as fallback

---

## Tips

{% hint style="info" %}
**PCG Overridable**: Settings marked with ⚡ can also be driven by PCG graph parameters, adding another layer of flexibility on top of the Constant/Attribute choice.
{% endhint %}

{% hint style="info" %}
**Type Conversion**: When reading from attributes, PCGEx attempts reasonable type conversions. Reading a Double from an Integer attribute works. Reading a Vector from a Double broadcasts the scalar to all components.
{% endhint %}

{% hint style="warning" %}
**Performance**: Attribute mode is slightly slower than Constant mode due to per-point lookups. For large point sets where the value truly is constant, prefer Constant mode.
{% endhint %}
