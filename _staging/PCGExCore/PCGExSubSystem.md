---
icon: server
description: 'PCGEx Subsystem - World subsystem providing global services, event broadcasting, and shared resources for PCGEx operations.'
---

# PCGEx Subsystem

World subsystem providing global services, event broadcasting, and shared resources for PCGEx operations.

## Overview

UPCGExSubSystem is a tickable world subsystem that provides centralized infrastructure for PCGEx operations, including global event broadcasting, index buffer pooling for performance optimization, and deferred action execution. As a world-level singleton, it enables cross-component communication, resource sharing, and coordinated execution across all PCGEx nodes in a world, making it the backbone of PCGEx's runtime infrastructure.

## How It Works

1. **Initialization**: Subsystem initializes when world loads, setting up shared resources
2. **Tick Management**: Executes every frame with configurable time budgets
3. **Event Broadcasting**: PCG components poll events that are broadcast to subscribers
4. **Action Queue**: Begin-tick actions execute at start of each tick
5. **Resource Pooling**: Shared index buffer reduces allocation overhead
6. **Cleanup**: Deinitializes when world unloads, releasing resources

#### Usage Notes

- **World Singleton**: One instance per UWorld, accessed via `GetInstance(World)` or `GetSubsystemForCurrentWorld()`
- **Thread Safety**: Uses read-write locks for subsystem state, index buffer, and event beacons
- **Editor Support**: Ticks in editor (`IsTickableInEditor` returns true) for real-time updates
- **Tick Budget**: Respects console variable time limits (`CVarEditorTimePerFrame`, `CVarTimePerFrame`)
- **Automatic Management**: Initialized and destroyed automatically by Unreal's subsystem framework

## Event System

### Event Types

**EPCGExSubsystemEventType**:

| Event Type | Description |
|------------|-------------|
| **None** | Invalid/no event |
| **Regenerate** | Triggers regeneration on subscribers |
| **Data Update** | Triggers data update event |

### Event Broadcasting

**PollEvent(InSource, InEventType, InEventId)**:
- PCG component polls an event with unique ID
- Event stored in polled events set
- Broadcast to all subscribers via `OnGlobalEvent` delegate

**OnGlobalEvent Delegate**:
- Multicast delegate for global event notifications
- Parameters: `UPCGComponent* Source`, `EPCGExSubsystemEventType EventType`, `uint32 EventId`
- Blueprint and C++ bindable

#### Event Flow:
```
[PCG Component A] calls PollEvent(ComponentA, Regenerate, 123)
     ↓
[Subsystem] stores event in PolledEvents set
     ↓
[Subsystem] broadcasts via OnGlobalEvent
     ↓
[Subscribers] receive (ComponentA, Regenerate, 123)
     ↓
[Subscribers] react to event (regenerate, update, etc.)
```

### FPolledEvent Structure

**Properties**:
- `Source`: UPCGComponent that polled the event
- `Type`: Event type (Regenerate, DataUpdate)
- `EventId`: Unique identifier for this event instance

**Hashing**: Events are hashed by combination of Source + Type + EventId for efficient set storage

## Action Queue System

### Begin-Tick Actions

**RegisterBeginTickAction(Action)**:
- Registers a lambda/function to execute at beginning of next tick
- Action signature: `void()`
- Executes once then removed from queue

**Use Cases**:
- Deferred initialization
- Frame-synchronized updates
- Post-processing after all nodes finish

#### Action Flow:
```
[Node] RegisterBeginTickAction([]() {
    // Deferred operation
})
     ↓
[Subsystem Tick] ExecuteBeginTickActions()
     ↓
[Action executes]
     ↓
[Action removed from queue]
```

## Index Buffer Pooling

### Shared Index Buffer

**GetIndexRange(Start, Count)**:
- Returns array view of sequential indices
- Efficiently provides [Start, Start+1, Start+2, ..., Start+Count-1]
- Backed by shared, pre-allocated buffer
- Thread-safe via read-write lock

**EnsureIndexBufferSize(Count)**:
- Ensures buffer is large enough for requested count
- Automatically grows buffer as needed
- Internal method, called by GetIndexRange

#### Usage Example:
```cpp
// Instead of allocating new array:
TArray<int32> Indices;
for(int32 i = 0; i < 1000; i++) Indices.Add(i);

// Use subsystem pooling:
TArrayView<const int32> Indices = Subsystem->GetIndexRange(0, 1000);
// Returns [0, 1, 2, ..., 999] from shared buffer
```

**Benefits**:
- Reduces memory allocations
- Faster than generating indices per operation
- Shared across all PCGEx operations in world

## Tick Management

### Tick Configuration

**Tick Execution**:
- Runs every frame in both editor and runtime
- Executes begin-tick actions first
- Processes subsystem logic
- Tracks end time for time budgets

**Time Budget**:
- Reads from console variables:
  - `CVarEditorTimePerFrame`: Editor tick budget
  - `CVarTimePerFrame`: Runtime tick budget
- `GetTickBudgetInSeconds()`: Returns current budget
- Helps prevent frame rate hitches

### Tickable Interface

**IsTickableInEditor()**: Returns `true` (ticks in editor)
**IsTickable()**: Returns `true` when subsystem wants ticking
**GetTickableTickType()**: Returns appropriate tick type
**GetStatId()**: Returns stat ID for profiling

## Accessing the Subsystem

### From C++

```cpp
// Get subsystem for specific world
UPCGExSubSystem* Subsystem = UPCGExSubSystem::GetInstance(World);
if (Subsystem)
{
    // Use subsystem
}

// Get subsystem for current world (convenience)
UPCGExSubSystem* Subsystem = UPCGExSubSystem::GetSubsystemForCurrentWorld();
check(Subsystem); // Asserts if null

// Or use macro
PCGEX_SUBSYSTEM // Defines and checks PCGExSubsystem variable
```

### From Blueprints

The subsystem is accessible via standard subsystem methods and exposes the `OnGlobalEvent` delegate for Blueprint binding.

## Thread Safety

**Locks**:
- `SubsystemLock`: Protects subsystem state
- `IndexBufferLock`: Protects index buffer access
- `BeaconsLock`: Protects event beacon registration

All public methods are thread-safe through appropriate locking.

## Lifecycle

**Initialize(Collection)**:
- Called when world loads
- Sets up console variable references
- Initializes shared resources

**Deinitialize()**:
- Called when world unloads
- Cleans up resources
- Clears action queue and events

**Tick(DeltaSeconds)**:
- Executes every frame
- Runs begin-tick actions
- Updates end time
- Processes subsystem logic

---

![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/PCGExSubSystem.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/PCGExSubSystem.h -->

<!-- VERIFICATION REPORT
Base Class Type: UTickableWorldSubsystem
Purpose: Global services and infrastructure for PCGEx operations
Event System: Polled events (Regenerate, DataUpdate), OnGlobalEvent multicast delegate
Action Queue: Begin-tick deferred actions
Index Pooling: Shared index buffer with GetIndexRange
Thread Safety: Read-write locks for state, buffer, beacons
Tick Management: Configurable time budget, editor and runtime support
Lifecycle: Initialize on world load, Deinitialize on unload
Singleton: One instance per UWorld
-->
