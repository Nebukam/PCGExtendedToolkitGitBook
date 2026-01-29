# Session State

> Quick restoration for session continuity. Machine-readable.

## Last Update
2026-01-29T??:??:??

## Active Task
FIX_ERRORS

## Completed
- REWRITE:point-filters:7/7
- REWRITE:collection-filters:5/5
- REWRITE:cluster-filters:3/3
- REWRITE:path-nodes:3/3

## Pending
- FIX:point-filters:0/19
- FIX:cluster-filters:0/5
- FIX:path-nodes:0/13
- FIX:path-subops:0/3

## Error Files List

### Point Filters (19)
numeric-compare|boolean-compare|within-range|dot|angle|random|bitmask|distance|numeric-self-compare|string-self-compare|random-ratio|segment-cross|numeric-compare-nearest|value-hash|gameplay-tags|tensor-dot|noise|constant|picker

### Cluster Filters (5)
node-neighbors-count|node-edge-angle|edge-length|edge-neighbors-count|edge-endpoints-compare-numeric

### Path Nodes (13)
slide|shift|fuse-collinear|insert|subdivide|create-spline|spline-mesh-simple|path-crossings|bevel|resample|stitch|attribute-rolling

### Path Sub-ops (3)
smooth/README|orient/README|orient/weighted

## Key Structs Documented
FPCGExAdjacencySettings|FPCGExEdgeDirectionSettings|FPCGExDotComparisonDetails|FPCGExVectorHashComparisonDetails|FPCGExCompareSelectorDouble

## Common Error Patterns
1. bIgnoreSelf:src=true,doc=false
2. FName≠FPCGAttributePropertyInputSelector
3. Nested structs undocumented
4. EditCondition visibility not noted

## Paths
SRC=D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source
DOC=D:\GIT\PCGExtendedToolkitGitBook\_dry-run
REF=D:\GIT\PCGExtendedToolkitGitBook\_notes

## CRITICAL
WRONG_PATH=C:\Users\Admin\.claude-worktrees\... (DO NOT USE)
CORRECT_PATH=D:\GIT\PCGExtendedToolkitGitBook\_dry-run (USE THIS)

## User Preference
- Reduce attribute selector verbosity (glorified input fields)
- Definitive before adding more
- Reviewing rewrites currently
