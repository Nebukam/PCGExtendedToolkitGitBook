# Documentation Change Tracking

> Internal tracking document for documentation review and corrections.
> Not for human reading - optimized for session continuity.

---

## Review Summary (2026-01-29)

| Category | Total | Verified | Errors | Rewrote |
|----------|-------|----------|--------|---------|
| Shared Concepts | 7 | 7 | 0 | 0 |
| Filters - Points | 26 | 0 | 19 | 7 |
| Filters - Collections | 5 | 0 | 0 | 5 |
| Filters - Clusters | 10 | 2 | 5 | 3 |
| Paths - Main | 24 | 8 | 13 | 3 |
| Paths - Sub-ops | 18 | 14 | 1 | 3 |

---

## Completed Rewrites

### Point Filters (7) ✓
- string-compare.md - FName type fix, EPCGExStringComparison enum
- modulo-compare.md - ZeroResult bool not double
- mean.md - ExcludeBelow/Above=0.2, ModeTolerance=5
- segment-length.md - Comparison default `>`, Tolerance=0
- time.md - OperandB=0, bIgnoreSelf=true
- inclusion.md - bIgnoreSelf=true, ExpandZAxis=-1, WindingMutation
- bounds.md - Removed non-UPROPERTY bIgnoreSelf

### Collection Filters (5) ✓
- attribute-check.md - FString AttributeName, EPCGExAttribtueDomainCheck
- entry-count.md - FPCGExCompareSelectorDouble pattern
- tag-check.md - EPCGExStringMatchMode, bStrict
- data-bounds.md - EPCGExBoundsAspect, FPCGExCompareSelectorDouble
- tag-value.md - Numeric/String modes

### Cluster Filters (3) ✓
- node-adjacency.md - FPCGExAdjacencySettings struct documented
- node-edge-direction.md - FPCGExEdgeDirectionSettings, FPCGExAdjacencySettings
- edge-direction.md - FPCGExEdgeDirectionSettings, dot/hash comparison

### Path Nodes (3) ✓
- solidify.md - Correct node architecture
- path-bounds-intersection.md - FPCGExPathIntersectionDetails
- spline-to-path.md - No sample mode, tangent/alpha/length outputs

---

## Pending Fixes

### Point Filters with Errors (19)
numeric-compare, boolean-compare, within-range, dot, angle, random, bitmask,
distance, numeric-self-compare, string-self-compare, random-ratio,
segment-cross, numeric-compare-nearest, value-hash, gameplay-tags,
tensor-dot, noise, constant, picker

### Cluster Filters with Errors (5)
node-neighbors-count, node-edge-angle, edge-length, edge-neighbors-count,
edge-endpoints-compare-numeric

### Path Nodes with Errors (13)
slide, shift, fuse-collinear, insert, subdivide, create-spline,
spline-mesh-simple, path-crossings, bevel, resample, stitch, attribute-rolling

### Path Sub-ops with Errors (3)
smooth/README, orient/README, orient/weighted

---

## Systematic Issues Found

### 1. Nested Struct Pattern
Many filters use nested USTRUCT that weren't documented:
- FPCGExDotComparisonDetails
- FPCGExAdjacencySettings
- FPCGExVectorHashComparisonDetails
- FPCGExDistanceDetails
- FPCGExCompareSelectorDouble
- FPCGExEdgeDirectionSettings

### 2. FName vs Selector
FName = simple string lookup
FPCGAttributePropertyInputSelector = full selector with property paths
Docs confused these in: string-compare, string-self-compare, value-hash

### 3. Constant/Attribute Dual Pattern
```cpp
EPCGExInputValueType Input = Constant;
double Constant = X;
FPCGAttributePropertyInputSelector Attribute;
```

### 4. Default Audit
Source bIgnoreSelf = true (common)
Docs said "Disabled" (wrong)

---

## Session State

### Current Position
- Completed: All 18 complete rewrites
- Next: 19 point filter error fixes
- User reviewing rewrites

### Key Source Files Read
- PCGExStringCompareFilter.h
- PCGExModuloCompareFilter.h
- PCGExMeanFilter.h
- PCGExSegmentLengthFilter.h
- PCGExTimeFilter.h
- PCGExInclusionFilter.h
- PCGExBoundsFilter.h
- PCGExEntryCountFilter.h
- PCGExTagCheckFilter.h
- PCGExDataBoundsFilter.h
- PCGExTagValueFilter.h
- PCGExAttributeCheckFilter.h
- PCGExNodeAdjacencyFilter.h
- PCGExNodeEdgeDirectionFilter.h
- PCGExIsoEdgeDirectionFilter.h
- PCGExPathSolidify.h
- PCGExPathBoundsIntersection.h
- PCGExSplineToPath.h
- PCGExAdjacency.h
- PCGExCompare.h
- PCGExEdgeDirectionDetails.h
- PCGExCompareShorthandsDetails.h

### Patterns Established
- Settings block: `<details><summary><strong>Name</strong> <code>Type</code></summary>`
- Footer: `📦 **Module**: \`Name\` · 📄 [Source](url)`
- Description frontmatter: `'In editor :: PCGEx | Category : Node Name'`
- Default format: `Default: \`value\``
- Overridable marker: `⚡ PCG Overridable`
- Visibility note: `*Visible when Condition*`
