---
icon: grid-round-2-plus
---

# Staging

**The staging system separates asset selection from spawning.** Collections define the available assets and their metadata. Staging nodes then assign collection entries to points, configure fitting and scale-to-fit behavior, load custom properties, and extract socket positions. None of this spawns anything — it just prepares the data.

### Sections

<table data-view="cards"><thead><tr><th>Section</th><th>Contents</th></tr></thead><tbody><tr><td><a data-mention href="common-settings/">common-settings</a></td><td>Shared configuration — socket output details</td></tr><tr><td><a data-mention href="collections/">collections</a></td><td>Collection data asset types — mesh, actor, PCG Data</td></tr><tr><td><a data-mention href="utilities/">utilities</a></td><td>Supporting nodes — mesh selector, socket sampling, collection conversion</td></tr></tbody></table>

The actual spawning happens through vanilla PCG nodes. Staged meshes feed into Spawn Static Mesh, staged actors into Spawn Actor, and staged PCG Data Assets into their own loader. Because staging only writes attributes and metadata, it stays cleanly decoupled from how the engine ultimately instantiates the result.

### Concepts

For understanding the staging workflow, collection types, and fitting:

* [Asset Staging Concepts](../../working-with-pcgex/asset-staging/)
