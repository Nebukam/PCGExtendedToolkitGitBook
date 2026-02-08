---
description: How to install PCGEx in your project
icon: power-off
---

# Installation

Three ways to get PCGEx into your project. Pick whichever fits your setup.

## Precompiled Binaries

<a href="https://nebukam.gumroad.com/l/pcgex" class="button primary" data-icon="arrow-right-to-bracket">PCGEx on Gumroad</a>

The fastest route — download precompiled binaries, drop them in, and go. No C++ build stack required.

{% stepper %}
{% step %}
### Download from Gumroad

Add PCGEx to your Gumroad library and download the binaries matching your engine version and platform.
{% endstep %}

{% step %}
### Extract into your Plugins folder

Navigate to your project root, find or create a `Plugins` folder, and extract the archive there:

```
YourProject/
  ├─ Content/
  └─ Plugins/
      └─ PCGExtendedToolkit/
          ├─ Binaries/
          ├─ Config/
          └─ ...
```
{% endstep %}

{% step %}
### Launch the editor

PCGEx should appear in the plugin list. Enable it if it isn't already.
{% endstep %}
{% endstepper %}

## FAB Plugin

<a href="https://www.fab.com/listings/3f0bea1c-7406-4441-951b-8b2ca155f624" class="button secondary" data-icon="arrow-right-to-bracket">PCGEx on FAB</a>

{% hint style="warning" %}
The FAB listing has been unavailable since October 2025 due to an unresolved issue on FAB's side. Use precompiled binaries or build from source in the meantime.
{% endhint %}

## Build From Source

<a href="https://github.com/Nebukam/PCGExtendedToolkit" class="button primary">GitHub repo</a>

{% hint style="warning" %}
Building from source requires the C++ build stack. The Unreal installer usually handles this, but verify you have it before proceeding.
{% endhint %}

### Git Submodule (recommended)

The cleanest approach if your project uses Git — makes pulling updates trivial:

```bash
cd YourProject
git submodule add https://github.com/Nebukam/PCGExtendedToolkit Plugins/PCGExtendedToolkit
git add .gitmodules
git commit -m "Add PCGExtendedToolkit submodule"
```

{% hint style="info" %}
The `.gitmodules` file lives at the root of your git repository, which may not be the same as your project root depending on your setup.
{% endhint %}

### ZIP Download

{% stepper %}
{% step %}
### Download the source

<a href="https://github.com/Nebukam/PCGExtendedToolkit/zipball/main" class="button primary">Download from GitHub</a>
{% endstep %}

{% step %}
### Create the Plugins folder

If your project doesn't have a `Plugins` folder at the root, create one.
{% endstep %}

{% step %}
### Extract into Plugins/

You should end up with `YourProject/Plugins/PCGExtendedToolkit/`.
{% endstep %}

{% step %}
### Launch and build

The editor will detect uncompiled plugins and prompt you to build. Click Build and wait.

{% hint style="success" %}
First build can take 5–20 minutes depending on hardware. This is normal — subsequent builds are much faster.
{% endhint %}
{% endstep %}
{% endstepper %}

## Finding Nodes

Once installed, PCGEx nodes appear alongside vanilla PCG nodes in any PCG graph. Find them in the node palette or by right-clicking in the graph editor.

{% hint style="info" %}
All PCGEx nodes are prefixed with `PCGEx |` — handy for identifying them at a glance.
{% endhint %}
