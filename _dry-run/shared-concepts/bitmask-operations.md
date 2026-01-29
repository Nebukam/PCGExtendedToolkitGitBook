---
icon: binary
---

# Bitmask Operations

How PCGEx uses bit flags for state tracking and filtering.

## When You'll See This

Bitmasks appear in PCGEx for encoding multiple boolean states into a single value:

- **Filters**: Bitmask filter for flag-based point selection
- **Valency**: Orbital connection states and adjacency encoding
- **State tracking**: Marking points as visited, processed, boundary, etc.

---

## What's a Bitmask?

A bitmask is a number where each **bit** (binary digit) represents a separate yes/no flag. A 64-bit integer can hold 64 independent flags.

```
Bit positions:  ... 5  4  3  2  1  0
Example value:      0  0  1  0  1  1  = 11 (decimal)

This encodes: Bit 0 = ON, Bit 1 = ON, Bit 3 = ON
              Bits 2, 4, 5... = OFF
```

Instead of having 64 separate boolean attributes, you can pack them into one number.

---

## Bitwise Operations

Operations combine bitmasks to set, clear, or test flags:

| Operation | Symbol | What It Does |
|-----------|--------|--------------|
| **Set** | `=` | Replace all flags with the mask value |
| **OR** | `OR` | Turn ON bits that are ON in the mask (additive) |
| **AND** | `AND` | Keep only bits that are ON in both (intersection) |
| **NOT** | `NOT` | Turn OFF bits that are ON in the mask (removal) |
| **XOR** | `XOR` | Flip bits that are ON in the mask (toggle) |

### Examples

Starting with flags = `0x0F` (binary: `00001111`):

| Operation | Mask | Result | Explanation |
|-----------|------|--------|-------------|
| OR | `0x10` | `0x1F` | Added bit 4 |
| AND | `0x03` | `0x03` | Kept only bits 0 and 1 |
| NOT | `0x01` | `0x0E` | Cleared bit 0 |
| XOR | `0x0F` | `0x00` | Flipped all four bits (they were all ON, now OFF) |
| Set | `0xFF` | `0xFF` | Replaced entirely |

---

## Comparison Modes

When filtering by bitmask, you choose how to compare:

| Mode | Meaning | Example |
|------|---------|---------|
| **Match (any)** | At least one flag matches | Flags `0x0F`, Mask `0x01` → TRUE |
| **Match (all)** | All mask flags are present | Flags `0x0F`, Mask `0x03` → TRUE |
| **Match (strict)** | Flags exactly equal mask | Flags `0x0F`, Mask `0x0F` → TRUE |
| **No Match (any)** | None of the mask flags are set | Flags `0x0F`, Mask `0x10` → TRUE |
| **No Match (all)** | Not all mask flags are present | Flags `0x01`, Mask `0x03` → TRUE |

---

## Simple vs Full Bitmasks

### Simple Bitmask

The lightweight version—just a value and an operation:

| Setting | Purpose |
|---------|---------|
| **Bitmask** | The 64-bit value |
| **Operation** | How to apply it (OR, AND, etc.) |

Use when you need a quick, single-step mask operation.

### Full Bitmask

The flexible version with multiple configuration options:

| Setting | Purpose |
|---------|---------|
| **Mode** | Direct (use value as-is) or Individual (per-bit control) |
| **Bitmask** | Base 64-bit value |
| **Mutations** | Per-bit operations (in Individual mode) |
| **Compositions** | References to bitmask collections |

Use when you need complex mask construction or want to reference named masks from assets.

---

## Bitmask Collections

You can create **Bitmask Collection** assets containing named entries:

```
Collection: "DirectionFlags"
├── "North"  → 0x01
├── "South"  → 0x02
├── "East"   → 0x04
└── "West"   → 0x08
```

Then reference these by name in your nodes instead of remembering numeric values.

Each entry can also include a **direction vector**, useful for spatial/adjacency contexts.

---

## Common Patterns

**Mark points with a category**:
- Store category flags in an attribute
- Use Bitmask filter with **Match (any)** to select specific categories

**Combine multiple flags**:
- Use OR operations to add flags together
- `North OR East` = points that connect in either direction

**Exclude specific flags**:
- Use **No Match (any)** to filter out points with certain flags
- Or use NOT operation to clear unwanted bits before comparison

**Check exact state**:
- Use **Match (strict)** when flags must match exactly
- Useful for state machines where you need precise state matching

---

## Individual Bit Control

In Individual mode, you can set specific bits without affecting others:

| Bit Index | Value | Operation | Effect |
|-----------|-------|-----------|--------|
| 0 | ON | OR | Set bit 0 |
| 3 | ON | OR | Set bit 3 |
| 7 | OFF | AND | Clear bit 7 |

This builds up a mask through a sequence of per-bit operations.

---

## Tips

{% hint style="info" %}
**Bit indices are 0-63**: A 64-bit integer has bits numbered 0 through 63. Bit 0 is the rightmost (least significant).
{% endhint %}

{% hint style="info" %}
**Use collections for readability**: Instead of remembering that `0x04` means "East", create a collection with named entries. Your graphs become self-documenting.
{% endhint %}

{% hint style="warning" %}
**Bitmasks are computed once**: For performance, mask values are resolved during node initialization, not during per-point processing. Changes to referenced collections require re-execution.
{% endhint %}
