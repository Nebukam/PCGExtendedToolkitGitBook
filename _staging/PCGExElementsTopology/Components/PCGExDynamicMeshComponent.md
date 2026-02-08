---
icon: cube
description: 'PCGEx Dynamic Mesh Component - A PCG-managed dynamic mesh component for procedural geometry.'
---

# PCGEx Dynamic Mesh Component

A dynamic mesh component that integrates with PCG's managed object system for procedural geometry spawning.

## Overview

This component extends Unreal's `UDynamicMeshComponent` to work seamlessly with PCG's managed object lifecycle. It allows PCG graphs to spawn and manage dynamic mesh geometry that is properly tracked and cleaned up when the PCG graph is regenerated or removed.

## How It Works

1. **Spawned by PCG**: The component is created as a PCG-managed actor component when procedural geometry needs to be spawned.
2. **Lifecycle Management**: Implements `IPCGExManagedComponentInterface` to integrate with PCG's cleanup system.
3. **Automatic Cleanup**: When the PCG graph regenerates, the component is properly cleaned up along with its associated geometry.

#### Usage Notes

- **Blueprint Spawnable**: This component is marked as spawnable from blueprints, allowing manual instantiation if needed.
- **Hidden Class**: The component is hidden in editor class pickers since it's primarily meant to be spawned programmatically by PCG nodes.
- **Managed Reference**: The internal `ManagedComponent` reference is maintained automatically and should not be modified directly.

## Settings

This component has no user-configurable settings. It inherits all functionality from `UDynamicMeshComponent` and adds PCG lifecycle management.

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsTopology-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsTopology/Public/Components/PCGExDynamicMeshComponent.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 0 documented (ManagedComponent is internal)
Inherited Properties: All from UDynamicMeshComponent
Inputs: N/A (component, not node)
Outputs: N/A (component, not node)
Nested Types: None
-->
