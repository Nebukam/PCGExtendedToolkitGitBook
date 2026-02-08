# PCGExHeuristics Analysis

## Module Type
- [ ] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework, cluster structures |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

**9 Heuristic Providers**:

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExHeuristicsShortestDistanceProviderSettings` | "Heuristics : Shortest Distance" | Distance-based pathfinding cost |
| `UPCGExCreateHeuristicAttributeSettings` | "Heuristics : Attribute" | Read vtx/edge attribute as cost |
| `UPCGExHeuristicsGradientProviderSettings` | "Heuristics : Gradient" | Attribute change rate between nodes |
| `UPCGExHeuristicsInertiaProviderSettings` | "Heuristics : Inertia" | Direction momentum penalty |
| `UPCGExHeuristicsTurnPenaltyProviderSettings` | "Heuristics : Turn Penalty" | Angle-based turn cost |
| `UPCGExHeuristicsAzimuthProviderSettings` | "Heuristics : Azimuth" | Directional alignment to goal |
| `UPCGExHeuricticsSteepnessProviderSettings` | "Heuristics : Steepness" | Vertical slope scoring |
| `UPCGExHeuristicsLeastNodesProviderSettings` | "Heuristics : Least Nodes" | Minimize hop count |
| `UPCGExHeuristicFeedbackProviderSettings` | "Heuristics : Feedback" | Visited path weighting |

### Factories/Providers

**Factory Classes** (one per heuristic):
| Factory Class | Operation Class |
|---------------|-----------------|
| `UPCGExHeuristicsFactoryShortestDistance` | `FPCGExHeuristicShortestDistance` |
| `UPCGExHeuristicsFactoryAttribute` | `FPCGExHeuristicAttribute` |
| `UPCGExHeuristicsFactoryGradient` | `FPCGExHeuristicGradient` |
| `UPCGExHeuristicsFactoryInertia` | `FPCGExHeuristicInertia` |
| `UPCGExHeuristicsFactoryTurnPenalty` | `FPCGExHeuristicTurnPenalty` |
| `UPCGExHeuristicsFactoryAzimuth` | `FPCGExHeuristicAzimuth` |
| `UPCGExHeuristicFactorySteepness` | `FPCGExHeuristicSteepness` |
| `UPCGExHeuristicsFactoryLeastNodes` | `FPCGExHeuristicLeastNodes` |
| `UPCGExHeuristicsFactoryFeedback` | `FPCGExHeuristicFeedback` |

### Score Aggregation System (6 Modes)

| Mode | Formula | Use Case |
|------|---------|----------|
| `WeightedAverage` | sum(score × weight) / sum(weight) | Default, balanced |
| `GeometricMean` | product(score^weight)^(1/sum(weight)) | Strict constraints |
| `WeightedSum` | sum(score × weight) | Cost accumulation |
| `HarmonicMean` | sum(weight) / sum(weight/score) | Very permissive |
| `Min` | min(weighted_scores) | OR logic |
| `Max` | max(weighted_scores) | AND logic |

### Heuristic Category System

| Category | Purpose | Fast-Path |
|----------|---------|-----------|
| `FullyStatic` | Pre-computable, no query dependency | Pre-calculated scores |
| `GoalDependent` | Varies by goal, stateless within query | Query-scoped calculation |
| `TravelDependent` | Requires path history (TravelStack) | Requires history lookup |
| `Feedback` | Tracks visited nodes/edges | Per-query tracking |

**Implementations by Category**:
- **FullyStatic**: Attribute, Gradient, NodeCount
- **GoalDependent**: Distance, Azimuth, Steepness (non-accumulating)
- **TravelDependent**: Inertia, TurnPenalty, Steepness (accumulating)
- **Feedback**: Feedback

### Shared Structs/Details

#### Configuration Structs
| Struct | Key Parameters |
|--------|----------------|
| `FPCGExHeuristicConfigBase` | WeightFactor, bInvert, ScoreCurve, Seed, Transform, Frequency, Contrast |
| `FPCGExHeuristicConfigShortestDistance` | (inherits base) |
| `FPCGExHeuristicAttributeConfig` | InputMode (AutoCurve/ManualCurve/Raw), InMin/InMax, FallbackValue |
| `FPCGExHeuristicGradientConfig` | GradientMode, bNormalizeByDistance, Min/MaxGradient |
| `FPCGExHeuristicConfigInertia` | Samples, bIgnoreIfNotEnoughSamples, GlobalInertiaScore |
| `FPCGExHeuristicConfigTurnPenalty` | Min/MaxAngleThreshold, bAbsoluteAngle |
| `FPCGExHeuristicConfigSteepness` | bAccumulateScore, AccumulationSamples, UpVector |
| `FPCGExHeuristicConfigFeedback` | bBinary, VisitedPointsWeightFactor, bGlobalFeedback |

### Core Infrastructure

| Class | Purpose |
|-------|---------|
| `FPCGExHeuristicOperation` | Base operation with GetGlobalScore/GetEdgeScore |
| `FHandler` | Score aggregation handler (6 implementations) |
| `FCategorizedOperations` | Pre-sorts operations by category |
| `FLocalFeedbackHandler` | Pool-based per-query feedback tracking |

### Enumerations

| Enum | Values |
|------|--------|
| `EPCGExHeuristicScoreMode` | WeightedAverage, GeometricMean, WeightedSum, HarmonicMean, Min, Max |
| `EPCGExHeuristicCategory` | FullyStatic, GoalDependent, TravelDependent, Feedback |
| `EPCGExAttributeHeuristicInputMode` | AutoCurve, ManualCurve, Raw |
| `EPCGExGradientMode` | FollowIncreasing, FollowDecreasing, AvoidChange, SeekChange |

---

## Node Classification

### Standalone Nodes
- heuristic-shortest-distance.md [N]
- heuristic-attribute.md [N]
- heuristic-gradient.md [N]
- heuristic-inertia.md [N]
- heuristic-turn-penalty.md [N]
- heuristic-azimuth.md [N]
- heuristic-steepness.md [N]
- heuristic-least-nodes.md [N]
- heuristic-feedback.md [N]

### Nodes with Shared Factories
- (none - each heuristic is self-contained)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

### heuristics/ [S]
- Used by: Pathfinding nodes in PCGExElementsPathfinding
- Operations:
  - distance.md [F]
  - attribute.md [F]
  - gradient.md [F]
  - inertia.md [F]
  - turn-penalty.md [F]
  - azimuth.md [F]
  - steepness.md [F]
  - least-nodes.md [F]
  - feedback.md [F]

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FCluster, FNode, FEdge structures

### Provides To
- PCGExElementsPathfinding: A* pathfinding scoring
- PCGExGraphs: Graph traversal scoring

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Attribute heuristic reads per-node values
- Distance & Proximity: Distance heuristic uses spatial calculations

### Tricky Areas
- **Category system**: Different caching strategies per category
- **TravelStack**: Immutable path history for lookups
- **Score aggregation**: 6 modes with different mathematical properties
- **Curve remapping**: All heuristics support non-linear score transforms
- **Feedback**: Can break parallelism if global feedback enabled

### Key Design Features
- Stateless operations during parallel processing
- Curve-based score remapping
- Flexible weight composition
- Pool-based feedback handler reuse

---

## Header File Structure

**Total Public Headers**: 14 files

| Directory | Content |
|-----------|---------|
| Root | Module header, common types |
| Core/ | Operation base, factory provider |
| Heuristics/ | 9 heuristic implementations |
| PCGExHeuristicsHandler.h | Score aggregation (6 handlers) |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 9 |
| Providers [P] | 9 |
| Factories [F] | 9 |
| Shared Folders [S] | 1 (heuristics) |
| Data Assets [A] | 0 |
| Public Headers | 14 |
