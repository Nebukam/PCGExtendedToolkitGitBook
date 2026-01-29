# Documentation Change Tracking

> Internal tracking document for documentation review and corrections.
> Not for human reading - optimized for session continuity.

---

## Review Summary (2026-01-29)

| Category | Total | Verified | Errors | Rewrote |
|----------|-------|----------|--------|---------|
| Shared Concepts | 7 | 7 | 0 | 0 |
| Filters - Points | 26 | 26 | 0 | 26 |
| Filters - Collections | 5 | 5 | 0 | 5 |
| Filters - Clusters | 10 | 10 | 0 | 8 |
| Paths - Main | 24 | 24 | 0 | 14 |
| Paths - Sub-ops | 18 | 14 | 3 | 3 |

---

## Completed Rewrites

### Point Filters (26) ✓
- string-compare.md - FName type fix, EPCGExStringComparison enum
- modulo-compare.md - ZeroResult bool not double
- mean.md - ExcludeBelow/Above=0.2, ModeTolerance=5
- segment-length.md - Comparison default `>`, Tolerance=0
- time.md - OperandB=0, bIgnoreSelf=true
- inclusion.md - bIgnoreSelf=true, ExpandZAxis=-1, WindingMutation
- bounds.md - Removed non-UPROPERTY bIgnoreSelf
- numeric-compare.md - PCG_Overridable markers, EPCGExComparison type
- boolean-compare.md - EPCGExEquality type, Operand B (Attr) added
- within-range.md - Attributes setting, visibility conditions
- dot.md - Full FPCGExDotComparisonDetails struct documented
- angle.md - FPCGExDotComparisonDetails, fallback modes
- random.md - Threshold/Weight/Curve settings fully documented
- bitmask.md - EPCGExBitflagComparison, FName types
- distance.md - FPCGExDistanceDetails nested, bIgnoreSelf=false default
- numeric-self-compare.md - EPCGExIndexMode, Index (Attr) setting
- string-self-compare.md - EPCGExIndexMode, SwapOperands
- random-ratio.md - FPCGExRandomRatioDetails struct fully documented
- segment-cross.md - EPCGExSegmentCrossWinding, bIgnoreSelf=true default
- numeric-compare-nearest.md - bIgnoreSelf=true default, Distance Details
- value-hash.md - EPCGExValueHashMode, FName types
- gameplay-tags.md - PCG_Overridable markers, defaults
- tensor-dot.md - FPCGExDotComparisonDetails, FPCGExTensorHandlerDetails
- noise.md - FPCGExCompareSelectorDouble pattern
- constant.md - PCG_Overridable markers
- picker.md - bForcePerPointEvaluation setting

### Collection Filters (5) ✓
- attribute-check.md - FString AttributeName, EPCGExAttribtueDomainCheck
- entry-count.md - FPCGExCompareSelectorDouble pattern
- tag-check.md - EPCGExStringMatchMode, bStrict
- data-bounds.md - EPCGExBoundsAspect, FPCGExCompareSelectorDouble
- tag-value.md - Numeric/String modes

### Cluster Filters (8) ✓
- node-adjacency.md - FPCGExAdjacencySettings struct documented
- node-edge-direction.md - FPCGExEdgeDirectionSettings, FPCGExAdjacencySettings
- edge-direction.md - FPCGExEdgeDirectionSettings, dot/hash comparison
- node-neighbors-count.md - EPCGExComparison, CompareAgainst/LocalCount pattern
- node-edge-angle.md - FPCGExDotComparisonDetails, fallbacks, bInvert
- edge-length.md - ThresholdInput pattern, Comparison=StrictlyGreater, Tolerance=0
- edge-neighbors-count.md - EPCGExRefineEdgeThresholdMode (Sum/Any/Both), int32 types
- edge-endpoints-compare-numeric.md - Attribute selector on vtx, Comparison default `>`

### Path Nodes (14) ✓
- solidify.md - Correct node architecture
- path-bounds-intersection.md - FPCGExPathIntersectionDetails
- spline-to-path.md - No sample mode, tangent/alpha/length outputs
- slide.md - EPCGExSlideMode/Direction, AmountMeasure, WriteOldPosition
- shift.md - EPCGExShiftType, InputMode (Discrete/Relative/Filter), CherryPick
- fuse-collinear.md - Threshold=10deg, InvertThreshold, FuseCollocated, BlendingDetails
- subdivide.md - EPCGExSubdivideMode (Distance/Count/Manhattan), FlagSubPoints, WriteAlpha
- create-spline.md - EPCGCreateSplineMode, DefaultPointType, Tangents
- path-crossings.md - SelfIntersectionOnly, CanCut/CanBeCut tags, CrossBlending, IntersectionDetails
- bevel.md - EPCGExBevelMode/ProfileType/Limit, Width measure, Subdivision, Flags
- resample.md - EPCGExResampleMode, ResolutionMode, RedistributeEvenly
- stitch.md - EPCGExStitchMethod/FuseMethod/FuseOperation, OnlyMatchStartAndEnds, Alignment
- attribute-rolling.md - EPCGExRollingRangeControl/ValueControl, InitialValueMode, Range outputs

---

## Pending Fixes

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
- FPCGExRandomRatioDetails

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
- Completed: 53 total rewrites (26 point filters, 5 collection, 8 cluster, 14 paths)
- Next: 3 path sub-op error fixes (smooth/README, orient/README, orient/weighted)

### Key Source Files Read
- All point filter headers
- All collection filter headers
- All cluster filter headers
- PCGExPathSlide.h
- PCGExPathShift.h
- PCGExFuseCollinear.h
- PCGExPathInsert.h
- PCGExSubdivide.h
- PCGExCreateSpline.h
- PCGExPathSplineMeshSimple.h
- PCGExPathCrossings.h
- PCGExBevelPath.h
- PCGExPathResample.h
- PCGExPathStitch.h
- PCGExAttributeRolling.h

### Patterns Established
- Settings block: `<details><summary><strong>Name</strong> <code>Type</code></summary>`
- Footer: `📦 **Module**: \`Name\` · 📄 [Source](url)`
- Description frontmatter: `'In editor :: PCGEx | Category : Node Name'`
- Default format: `Default: \`value\``
- Overridable marker: `⚡ PCG Overridable`
- Visibility note: `*Visible when Condition*`
