---
icon: gear
description: 'Collections Settings - Project settings for PCGEx Collections module'
---

# Collections Settings

Project settings for PCGEx Collections module.

## Overview

This developer settings class provides project-wide configuration options for the PCGEx Collections module. Settings configured here apply globally to all collections and collection-related operations in the project.

## Access

Access these settings in the Unreal Editor:
1. **Edit → Project Settings**
2. Navigate to **Plugins → PCGEx | Collections**

## Settings

### Collections

<details>
<summary><strong>Disable Collision By Default</strong> <code>bool</code></summary>

When enabled, new collection entries will have collision disabled by default. This is a performance optimization for collections primarily used for visual elements that don't require collision.

Default: `true`

💾 *Saved in project config*

</details>

#### Usage Notes

- **Project-Wide**: These settings apply to all collections in the project
- **New Entries**: The collision setting affects newly created entries; existing entries are not modified
- **Performance**: Disabling collision by default can improve performance when spawning large numbers of meshes
- **Override**: Individual collection entries can still enable collision regardless of this default setting

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExCollections-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollections/Public/PCGExCollectionsSettings.h)



<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (bDisableCollisionByDefault)
Inherited Properties: None specific to document (inherits from UDeveloperSettings)
Inputs: N/A (project settings)
Outputs: N/A (project settings)
Nested Types: None
-->
