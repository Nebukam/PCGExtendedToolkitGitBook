---
icon: eye-slash
description: 'Collections Editor Settings - Editor-specific settings for PCGEx Collections UI'
---

# Collections Editor Settings

Editor-specific settings for PCGEx Collections UI.

## Overview

This developer settings class provides per-user, editor-specific configuration for the PCGEx Collections module UI. These settings control which properties are visible in the collection editor interface, allowing users to customize their workflow by hiding properties they don't frequently use.

## Access

Access these settings in the Unreal Editor:
1. **Edit → Editor Preferences**
2. Navigate to **Plugins → PCGEx | Collections**

## Settings

### Property Visibility

<details>
<summary><strong>Hidden Property Names</strong> <code>TSet<FName></code></summary>

Set of property names to hide from the collection editor UI. This allows customizing the collection editor interface by hiding advanced or rarely-used properties.

Default: Empty (all properties visible)

💾 *Saved in editor user config (per-user setting)*

</details>

<details>
<summary><strong>PCGEx Data Version</strong> <code>int64</code></summary>

Internal version tracking for data migration and compatibility. This value is managed automatically by the system.

Default: `-1`

💾 *Saved in editor user config*

📋 *Advanced, managed automatically*

</details>

#### Usage Notes

- **Per-User**: These are editor preferences, not project settings - each user has their own configuration
- **UI Customization**: Hiding unused properties can streamline the collection editor interface
- **No Data Loss**: Hiding properties only affects the editor UI; hidden properties retain their values
- **Property Mapping**: The system supports mapping multiple property visibility toggles to a single flag for grouped control

---

![Static Badge](https://img.shields.io/badge/Module-PCGExCollectionsEditor-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCollectionsEditor/Public/PCGExCollectionsEditorSettings.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (HiddenPropertyNames, PCGExDataVersion)
Inherited Properties: None specific to document (inherits from UDeveloperSettings)
Inputs: N/A (editor preferences)
Outputs: N/A (editor preferences)
Nested Types: None
-->
