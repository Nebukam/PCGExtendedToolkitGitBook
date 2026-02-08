# Shared Concepts Inventory

## Overview

These are the foundational abstractions that appear across multiple modules and should be documented ONCE in a "shared concepts" section, then cross-referenced from individual node documentation.

---

## Top 5 Concept Domains

### 1. Input Value Abstraction (Input Shorthands)

**Core Pattern**: "Should this value come from a constant or read from an attribute?"

**Key Enum**: `EPCGExInputValueType`
- `Constant` - Use hardcoded value from settings
- `Attribute` - Read from point attribute at runtime

**Struct Family** (38+ variants in `PCGExInputShorthandsDetails.h`):

| Struct | Value Type | Constraints |
|--------|------------|-------------|
| `FPCGExInputShorthandNameDouble` | double | Any |
| `FPCGExInputShorthandNameDoubleAbs` | double | Non-negative |
| `FPCGExInputShorthandNameDouble01` | double | Normalized 0-1 |
| `FPCGExInputShorthandNameInteger32` | int32 | Any |
| `FPCGExInputShorthandNameInteger32Abs` | int32 | Non-negative |
| `FPCGExInputShorthandNameVector` | FVector | Any |
| `FPCGExInputShorthandNameDirection` | FVector | Normalized |
| `FPCGExInputShorthandNameRotator` | FRotator | Any |
| `FPCGExInputShorthandNameBoolean` | bool | Any |

**Selector Variants** (use `FPCGAttributePropertyInputSelector` for type conversion):
- `FPCGExInputShorthandSelectorDouble`
- `FPCGExInputShorthandSelectorInteger32`
- `FPCGExInputShorthandSelectorVector`
- etc.

**Documentation Approach**: Explain the pattern once, then every node that uses it just says "See: Input Value Sources"

---

### 2. Distance & Proximity

**Core Question**: "How do we measure distance between things?"

**Key Enums**:
- `EPCGExDistance` - What part of the geometry to measure from/to
  - `Center` - Point location
  - `SphereBounds` - Sphere bounds surface
  - `BoxBounds` - Box bounds surface

- `EPCGExDistanceType` - Which metric to use
  - `Euclidean` - Straight line (√(x²+y²+z²))
  - `Manhattan` - Axis-aligned (|x|+|y|+|z|)
  - `Chebyshev` - Maximum component (max(|x|,|y|,|z|))

**Key Struct**: `FPCGExDistanceDetails`
```
Source: EPCGExDistance     // How to measure from source
Target: EPCGExDistance     // How to measure to target
Type: EPCGExDistanceType   // Which metric
bOverlapIsZero: bool       // Treat overlaps as 0 distance
```

**Used In**: Filters (Distance, NumericCompareNearest), Sampling (SampleNearestPoint), Spatial operations, Matching

**Documentation Approach**: Dedicated page explaining all distance modes with diagrams

---

### 3. Comparison Operators

**Core Question**: "How do we compare values?"

**Key Enum**: `EPCGExComparison`
- `StrictlyEqual` (==)
- `StrictlyNotEqual` (!=)
- `EqualOrGreater` (>=)
- `EqualOrSmaller` (<=)
- `StrictlyGreater` (>)
- `StrictlySmaller` (<)
- `NearlyEqual` (~=) - With tolerance
- `NearlyNotEqual` (!~=)

**String-Specific**: `EPCGExStringComparison`
- `StrictlyEqual`, `StrictlyNotEqual`
- `Contains`, `StartsWith`, `EndsWith`
- `Locale*` variants for culture-aware comparison

**Used In**: All filter nodes, conditional logic throughout

**Documentation Approach**: Reference table with examples

---

### 4. Bitmask System

**Core Purpose**: Track state, mark sets, encode adjacencies

**Key Structs**:
- `FPCGExBitmask` - Full bitmask with modes and operations
- `FPCGExSimpleBitmask` - Lightweight: int64 + operation
- `FPCGExClampedBit` - Single bit (0-63)
- `FPCGExClampedBitOp` - Bit + operation

**Operations** (`EPCGExBitOp`):
- `OR` - Set bits
- `AND` - Mask bits
- `XOR` - Toggle bits
- `NOT` - Invert bits

**Used In**: Valency (orbital states), Filters (Bitmask filter), state tracking

**Documentation Approach**: Explain bitmask concepts, then reference from Valency and advanced filtering

---

### 5. Attribute Mapping

**Core Pattern**: "Copy/transform attribute A to attribute B"

**Key Struct**: `FPCGExAttributeSourceToTargetDetails`
```
Source: FName                  // Attribute to read
bOutputToDifferentName: bool   // Remap or keep same name
Target: FName                  // Output attribute name
```

**Container**: `FPCGExAttributeSourceToTargetList` - Array with validation

**Used In**: Meta operations, Blending, attribute copy/transform nodes

---

## Secondary Shared Concepts

### Measurement Units

**Enum**: `EPCGExMeanMeasure`
- `Relative` - Normalized 0-1 (percentage)
- `Discrete` - Absolute count

**Used With**: Random selection, sampling counts, statistical operations

### Fitting & Justification

**Structs**:
- `FPCGExScaleToFitDetails` - How to scale to fit bounds
- `FPCGExSingleJustifyDetails` - How to position within bounds

**Enums**:
- `EPCGExFitMode` - None, Uniform, Individual
- `EPCGExScaleToFit` - None, Min, Max, Both
- `EPCGExJustifyFrom` - Center, Min, Max, Custom

**Used In**: Shape generation, layout operations

### Filter Fallback Policies

**Enum**: `EPCGExFilterNoDataFallback`
- `Error` - Log warning, skip filter
- `Pass` - Treat as always passing
- `Fail` - Treat as always failing

**Used In**: All filter configurations

---

## Cross-Reference Strategy

For node documentation, instead of re-explaining these concepts:

**DO**:
```markdown
#### Distance Settings
See [Distance & Proximity Concepts](../shared-concepts/distance.md) for details on distance modes.
```

**DON'T**:
```markdown
#### Distance Settings
The Source Distance setting controls how distance is measured from the source point.
It can be Center (measures from point location), SphereBounds (measures from the
surface of the point's sphere bounds), or BoxBounds (measures from the surface of
the point's box bounds)... [repeating for every node]
```

---

## Implementation Notes

### How Input Shorthands Work (Theory)

When a node setting uses an input shorthand:

1. **At edit time**: User sees a dropdown (Constant vs Attribute) and either a value field or attribute selector
2. **At boot time**: The shorthand resolves which mode is active
3. **At process time**: For each point, the value is either the constant OR read from that point's attribute

This pattern enables data-driven parameters without per-node custom code.

### How Distance Calculation Works (Theory)

1. **Source measurement**: Determines the "from" point based on mode
   - Center: Use point's transform location
   - SphereBounds: Expand outward by bounds radius
   - BoxBounds: Use closest point on bounding box

2. **Target measurement**: Same logic for the "to" point

3. **Metric calculation**: Apply selected distance formula

4. **Overlap handling**: If bOverlapIsZero and geometries intersect, return 0

### How Bitmasks Are Used (Theory)

Bitmasks encode state as individual bits in a 64-bit integer:
- Bit 0 might mean "visited"
- Bit 1 might mean "boundary"
- Bit 5 might mean "connection to north"
- etc.

Operations combine bitmasks:
- `CurrentState OR NewFlag` → Set a flag
- `CurrentState AND Mask` → Filter to only masked bits
- `CurrentState XOR Toggle` → Flip specific bits

This is heavily used in Valency for orbital connection states.

---

## Documentation File Structure Proposal

```
shared-concepts/
├── README.md                    # Overview of shared concepts
├── input-value-sources.md       # Input shorthands pattern
├── distance-and-proximity.md    # Distance modes and metrics
├── comparison-operators.md      # Comparison enums reference
├── attribute-mapping.md         # Source-to-target pattern
├── bitmask-operations.md        # Bitmask system
├── measurement-units.md         # Relative vs discrete
├── fitting-and-justification.md # Bounds fitting
└── filter-policies.md           # Fallback behaviors
```

Each shared concept page should have:
1. **What it is** (1-2 sentences)
2. **When you'll see it** (which node categories use this)
3. **Options explained** (table or list)
4. **Visual if helpful** (diagram for distance modes, etc.)
5. **Common patterns** (typical configurations)
