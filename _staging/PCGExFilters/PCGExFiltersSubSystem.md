---
icon: cog
description: 'PCGEx Filters SubSystem - Internal world subsystem providing shared filter resources.'
---

# PCGEx Filters SubSystem

Internal world subsystem providing shared filter resources.

## Overview

This is an internal `UWorldSubsystem` that manages shared filter infrastructure for the PCGEx Filters module. It initializes and caches reusable constant filter factories (always-pass and always-fail) so they can be efficiently shared across the system without re-creation. This class is not a user-facing PCG node.

## How It Works

1. **Initialization**: When the world starts, the subsystem creates two constant filter factories: one that always returns `true` and one that always returns `false`.
2. **Access**: Other PCGEx systems retrieve the subsystem via `GetSubsystemForCurrentWorld()` or `GetInstance()`.
3. **Constant Filters**: Provides pre-built `IFilter` instances for constant true/false evaluation via `GetConstantFilter()`.
4. **Cleanup**: On deinitialization, releases the cached factories.

#### Usage Notes

- **Internal Only**: This subsystem is not directly configurable or visible in the PCG editor. It exists purely as a service for other filter systems.
- **Singleton Per World**: One instance exists per `UWorld`, following standard Unreal subsystem lifetime.

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExFilters-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Public/PCGExFiltersSubSystem.h)



<!-- VERIFICATION REPORT
Class: UPCGExFiltersSubSystem
Base: UWorldSubsystem
Properties:
- ConstantFilterFactory_TRUE (TObjectPtr<UPCGExConstantFilterFactory>, internal)
- ConstantFilterFactory_FALSE (TObjectPtr<UPCGExConstantFilterFactory>, internal)
Public Methods: GetSubsystemForCurrentWorld(), GetInstance(), GetConstantFilter()
No user-facing settings.
-->
