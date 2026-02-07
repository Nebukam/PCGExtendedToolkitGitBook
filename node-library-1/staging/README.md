---
icon: grid-round-2-plus
---

# Staging

**Asset staging — collections, distribution, fitting, and socket extraction.** The staging system separates asset selection from spawning. Collections define available assets with metadata, staging nodes assign entries to points, and downstream handlers spawn the result.

### Sections

| Section     | Contents                                                                    |
| ----------- | --------------------------------------------------------------------------- |
| Collections | Collection data asset types — mesh, actor, PCG Data                         |
| Distribute  | Entry assignment — distribution strategies, categories, fitting, properties |
| Sockets     | Socket extraction — named attachment points from staged entries             |

#### Key Nodes

* **Staging : Distribute** — Assign collection entries to points (collection map or attribute mode)
* **Staging : Fitting** — Apply scale-to-fit, justification, and variations as a standalone pass
* **Staging : Load Properties** — Load per-entry custom properties onto points
* **Staging : Load Sockets** — Create points at socket positions from staged entries

#### Spawning

Staging prepares data for vanilla PCG spawners:

* **Meshes** → Spawn Static Mesh with Mesh Selector Staged
* **Actors** → Spawn Actor
* **PCG Data Assets** → PCGEx's Load PCG Data Asset

### Concepts

For understanding the staging workflow, collection types, and fitting:

* [Asset Staging Concepts](../../working-with-pcgex-1/asset-staging/)
