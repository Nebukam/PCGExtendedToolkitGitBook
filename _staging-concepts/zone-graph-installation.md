---
icon: power-off
description: How to install the PCGEx Zone Graph plugin
---

# Installation

**The Zone Graph module is a separate plugin.** It lives in its own repository and must be built from source — it's not available on FAB.

<a href="https://github.com/Nebukam/PCGExtendedToolkitZoneGraph" class="button primary">GitHub repo</a>

{% hint style="warning" %}
Building from source requires the **C++ build stack** installed on your machine. The Unreal installer usually handles this, but verify you can compile C++ projects before proceeding.
{% endhint %}

{% hint style="info" %}
This plugin depends on the core **PCGEx** plugin. Make sure PCGEx is installed first — via [FAB](https://www.fab.com/listings/3f0bea1c-7406-4441-951b-8b2ca155f624), precompiled binaries, or source. See the [main installation guide](../working-with-pcgex/getting-started/installation.md) for details.
{% endhint %}

### Clone & Build using Git

The recommended approach. Cloning as a submodule keeps updates to a single `git pull`.

```bash
> cd YourProject
> git submodule add https://github.com/Nebukam/PCGExtendedToolkitZoneGraph Plugins/PCGExtendedToolkitZoneGraph
> git add .gitmodules
> git commit
```

Launch the project — Unreal will detect uncompiled modules and prompt you to build. Accept and wait for compilation to finish.

### Install from ZIP

{% stepper %}
{% step %}
#### Download the ZIP

Download the [latest ZIP from GitHub](https://github.com/Nebukam/PCGExtendedToolkitZoneGraph/zipball/main).
{% endstep %}

{% step %}
#### Extract into your Plugins folder

You should end up with this structure:

```
Project
  ├─ Content
  └─ Plugins
      ├─ PCGExtendedToolkit          ← core plugin (required)
      └─ PCGExtendedToolkitZoneGraph ← this plugin
          ├─ Source
          └─ ...
```
{% endstep %}

{% step %}
#### Launch and build

Unreal will prompt that there are uncompiled plugins. Click **Build** and wait for compilation to complete.
{% endstep %}
{% endstepper %}

### Verify

Once built, the **Cluster to Zone Graph** node appears in any PCG graph under the `PCGEx | Clusters` category.

{% hint style="info" %}
The Zone Graph plugin also requires Unreal's **ZoneGraph** plugin to be enabled in your project. It should activate automatically as a dependency, but if the node doesn't appear, check `Edit > Plugins` and search for "ZoneGraph".
{% endhint %}
