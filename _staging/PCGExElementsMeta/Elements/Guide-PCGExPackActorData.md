---
icon: graduation-cap
description: 'How-To: Creating a Custom Actor Data Packer'
---

# Creating a Custom Actor Data Packer

This guide explains how to create a Blueprint class that extracts data from actors referenced by PCG points. The Custom Actor Data Packer system provides a flexible way to read actor properties, components, and other data, then write that information to point attributes.

## Overview

The Pack Actor Data node processes points that contain actor references (stored as `FSoftObjectPath` attributes). For each valid reference, it calls your custom packer class to extract data from the actor and write it to point attributes.

```
┌─────────────────────────────────────────────────────────────┐
│                    Pack Actor Data Node                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Input Points ─► Resolve Actor References ─► Your Packer   │
│                                                             │
│   Your Packer:                                              │
│   1. Initialize() - Declare output attributes               │
│   2. ProcessEntry() - Extract data per actor                │
│                                                             │
│   Output Points ◄── Points with extracted data              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Create the Blueprint Class

1. In the Content Browser, right-click and select **Blueprint Class**
2. In the parent class picker, search for `PCGExCustomActorDataPacker`
3. Select **\[PCGEx] Custom Actor Data Packer**
4. Name your Blueprint (e.g., `BP_MyActorDataPacker`)

---

## Step 2: Implement Initialize

The `Initialize` event is called **once** at the start of processing, before any actors are processed. Use it to declare all output attributes you plan to write.

### Override the Event

1. Open your Blueprint
2. In the Functions panel, click **Override** and select **Initialize**
3. Add your initialization logic

### Important: You Must Set OutSuccess

The `OutSuccess` output parameter **must be set to `true`** for processing to continue. If you don't set it or set it to `false`, the packer will abort and log a warning.

### Declaring Attributes

You **should** declare every attribute you want to write using the `Init*` functions. Each function takes an attribute name and a default value. These return `true` on success.

| Function | Type | Example Default |
|----------|------|-----------------|
| `InitInt32` | int32 | `0` |
| `InitInt64` | int64 | `0` |
| `InitFloat` | float | `0.0` |
| `InitDouble` | double | `0.0` |
| `InitVector2` | FVector2D | `(0, 0)` |
| `InitVector` | FVector | `(0, 0, 0)` |
| `InitVector4` | FVector4 | `(0, 0, 0, 0)` |
| `InitQuat` | FQuat | Identity |
| `InitTransform` | FTransform | Identity |
| `InitRotator` | FRotator | `(0, 0, 0)` |
| `InitString` | FString | `""` |
| `InitBool` | bool | `false` |
| `InitName` | FName | `None` |
| `InitSoftObjectPath` | FSoftObjectPath | Empty |
| `InitSoftClassPath` | FSoftClassPath | Empty |

> If you don't initialize them, they will be initialized on first write, using a undeterministic default value.

### Accessing InputActors During Initialize

The `InputActors` array is populated **before** Initialize is called, so you can access all resolved actors during initialization for global calculations.

### Example Initialize Implementation

```
Event Initialize
    │
    ├── InitFloat("Health", 100.0)
    │
    ├── InitString("ActorName", "Unknown")
    │
    ├── InitVector("ActorLocation", (0,0,0))
    │
    ├── InitBool("IsValid", false)
    │
    └── Set OutSuccess = true    ◄── REQUIRED!
```

---

## Step 3: Implement ProcessEntry

The `ProcessEntry` event is called **for each point with a valid actor reference**. Points with null/invalid actor references are automatically skipped and optionally filtered from output.

> Note that actors are purposefully NOT deduped : multiple points can process the same actor.

### Event Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `InActor` | AActor* | The resolved actor (guaranteed valid when called) |
| `InPoint` | FPCGPoint | The source PCG point (read-only copy) |
| `InPointIndex` | int32 | Index of the point being processed |
| `OutPoint` | FPCGPoint& | The output point - modifications to transform/bounds are kept |

### Writing Attribute Values

Use the `Write*` functions to set attribute values. Each takes the attribute name, point index, and value. Returns `true` on success.

| Function | Type |
|----------|------|
| `WriteInt32` | int32 |
| `WriteInt64` | int64 |
| `WriteFloat` | float |
| `WriteDouble` | double |
| `WriteVector2` | FVector2D |
| `WriteVector` | FVector |
| `WriteVector4` | FVector4 |
| `WriteQuat` | FQuat |
| `WriteTransform` | FTransform |
| `WriteRotator` | FRotator |
| `WriteString` | FString |
| `WriteBool` | bool |
| `WriteName` | FName |
| `WriteSoftObjectPath` | FSoftObjectPath |
| `WriteSoftClassPath` | FSoftClassPath |

### Modifying the Output Point

The `OutPoint` parameter is a copy - you need to feed it back to the return node.

### Example ProcessEntry Implementation

```
Event ProcessEntry (InActor, InPoint, InPointIndex, OutPoint)
    │
    ├── WriteString("ActorName", InPointIndex, InActor.GetActorLabel())
    │
    ├── WriteVector("ActorLocation", InPointIndex, InActor.GetActorLocation())
    │
    ├── Get Health Component from InActor
    │   └── WriteFloat("Health", InPointIndex, HealthComponent.CurrentHealth)
    │
    ├── // Optionally modify the output point transform
    │   OutPoint.Transform = InActor.GetActorTransform()
    │
    └── WriteBool("IsValid", InPointIndex, true)
```

---

## Step 4: Reading Existing Attributes

You can read attribute values from input points using the `Read*` functions. All return `true` on success, `false` if the attribute doesn't exist or type mismatches.

| Function | Type |
|----------|------|
| `ReadInt32` | int32 |
| `ReadInt64` | int64 |
| `ReadFloat` | float |
| `ReadDouble` | double |
| `ReadVector2` | FVector2D |
| `ReadVector` | FVector |
| `ReadVector4` | FVector4 |
| `ReadQuat` | FQuat |
| `ReadTransform` | FTransform |
| `ReadRotator` | FRotator |
| `ReadString` | FString |
| `ReadBool` | bool |
| `ReadName` | FName |
| `ReadSoftObjectPath` | FSoftObjectPath |
| `ReadSoftClassPath` | FSoftClassPath |

---

## Step 5: Advanced Features

### Spawning Components

To spawn and attach components to actors, use `AddComponent`. This **requires** enabling `Execute On Main Thread` - if called from a worker thread, it will log an error and do nothing.

```
AddComponent(
    InActor,                     // Target actor
    UMyComponent::StaticClass(), // Component class (cannot be abstract)
    KeepWorld,                   // Location rule
    KeepWorld,                   // Rotation rule
    KeepWorld,                   // Scale rule
    false,                       // Weld simulated bodies
    OutComponent                 // Created component reference
)
```

Components are automatically managed by PCG and will be cleaned up when the graph regenerates.

### Preloading Assets

If you need to load assets referenced in attributes (like meshes or materials), call `PreloadObjectPaths` during **Initialize** (not ProcessEntry). This triggers async loading before processing begins.

```
// In Initialize:
PreloadObjectPaths("MeshReference")   // Preloads all FSoftObjectPath values in this attribute
```

This works with attributes of type `FSoftObjectPath` or `FString` (containing asset paths).

### Resolving Object References

Use `ResolveObjectPath` to get a loaded object from a soft reference attribute:

```
ResolveObjectPath(
    "MeshReference",     // Attribute name
    InPointIndex,        // Point index
    UStaticMesh,         // Expected class
    OutObject,           // Loaded object (cast to expected type)
    OutIsValid           // True if successfully resolved and type matches
)
```

### Preview Mode Detection

Check `bIsPreviewMode` to detect if running in editor preview mode. Components created in preview mode are marked as transient.

```
If bIsPreviewMode:
    // Running in editor preview - might want to skip expensive operations
```

---

## Step 6: Using Your Packer

1. Add a **Pack Actor Data** node to your PCG graph
2. In the node settings, click the **Packer** dropdown
3. Select your Blueprint class (it will appear with your class name)
4. Configure settings:

| Setting | Description |
|---------|-------------|
| **Actor Reference Attribute** | The attribute containing actor soft references (default: `ActorReference`) |
| **Omit Unresolved Entries** | Remove points where actor couldn't be resolved |
| **Omit Empty Outputs** | Don't output empty collections |
| **Track Actors** | Regenerate when referenced actors change in editor |

---

## Threading Considerations

| Scenario | `Execute On Main Thread` Setting |
|----------|----------------------------------|
| Reading actor properties only | `false` (faster, multi-threaded) |
| Spawning/modifying components | `true` (required) |
| Calling game thread-only APIs | `true` (required) |
| Modifying actor state | `true` (required) |

### Thread Safety

When `Execute On Main Thread` is **disabled**:
- `ProcessEntry` may be called from multiple threads simultaneously
- Each call processes a different point/actor
- Avoid accessing shared mutable state
- The `Write*` and `Read*` functions are thread-safe

When `Execute On Main Thread` is **enabled**:
- Processing is time-sliced on the main thread
- Safe to call any engine API
- Slower but necessary for component spawning

---

## Complete Example

Here's a complete example that extracts health, name, and location from actors:

### Initialize Event

```
// Declare output attributes with default values
InitFloat("Health", 0.0)
InitFloat("MaxHealth", 100.0)
InitString("DisplayName", "Unknown")
InitVector("WorldLocation", (0,0,0))
InitBool("IsAlive", false)

// IMPORTANT: Signal success
OutSuccess = true
```

### ProcessEntry Event

```
// InActor is guaranteed to be valid when this is called

// Get actor display name
ActorName = InActor.GetActorLabel()
WriteString("DisplayName", InPointIndex, ActorName)

// Get world location
Location = InActor.GetActorLocation()
WriteVector("WorldLocation", InPointIndex, Location)

// Try to get health component
HealthComp = InActor.GetComponentByClass(UHealthComponent)
If IsValid(HealthComp):
    WriteFloat("Health", InPointIndex, HealthComp.CurrentHealth)
    WriteFloat("MaxHealth", InPointIndex, HealthComp.MaxHealth)
    WriteBool("IsAlive", InPointIndex, HealthComp.CurrentHealth > 0)

// Optionally update point transform to match actor
OutPoint.Transform.Location = Location
```

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| "Some data could not be initialized" warning | `OutSuccess` not set to `true` | Set `OutSuccess = true` at end of Initialize |
| Attributes not appearing | `Init*` not called in Initialize | Call appropriate `Init*` function for each attribute |
| Values not written | Wrong point index or attribute name | Verify `InPointIndex` and attribute name match |
| Crash when spawning components | Not on main thread | Enable `Execute On Main Thread` |
| Missing actors / empty output | Invalid actor references | Check `Actor Reference Attribute` name; ensure references are valid |
| Slow performance | Main thread execution | Disable `Execute On Main Thread` if not spawning components |
| "AddComponent can only be used on game thread" | Called from worker thread | Enable `Execute On Main Thread` in packer settings |

---

## API Reference

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `InputActors` | TArray\<AActor*\> | All resolved actors (read-only, available in Initialize) |
| `bIsPreviewMode` | bool | True if running in editor preview |
| `bExecuteOnMainThread` | bool | Enable for component spawning |

### Events to Override

| Event | When Called | Thread Safety |
|-------|-------------|---------------|
| `Initialize` | Once before processing | Always main thread |
| `ProcessEntry` | Per valid actor reference | Main or worker thread |

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsMeta-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsMeta/Public/Elements/PCGExPackActorData.h)
