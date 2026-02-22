---
icon: bolt
description: 'Guide: Getting Zone Graph running in two minutes'
---

# Quick Setup

## From Existing Clusters

If you already have cluster data (Vtx + Edges), you're one node away.

1. Add **Cluster to Zone Graph** to your PCG graph
2. Connect your **Vtx** and **Edges** pins
3. Set a **Lane Profile** (defaults to the first profile in `Project Settings > Zone Graph`)
4. Execute

That's it. The node decomposes your cluster into roads and intersections automatically. Junction vertices (3+ connections) become polygon intersections, chains between them become spline roads.

<!-- IMAGE: Minimal PCG graph showing Vtx and Edges feeding into Cluster to Zone Graph, with the viewport showing the resulting Zone Graph lanes overlaid on the cluster wireframe. -->

{% hint style="info" %}
Make sure the **ZoneGraph** engine plugin is enabled in your project. The node will appear under `PCGEx | Clusters` in the node palette.
{% endhint %}

### Common next steps

- Adjust **Polygon Radius** to control intersection size
- Enable **Auto Radius Mode** to size intersections from lane widths
- Add filters to the **Break Conditions** pin to control where intersections appear

→ See [Zone Graph Techniques](Guide-ZoneGraphTechniques.md) for details on each of these.

---

## From Splines

Splines aren't clusters, but getting there is straightforward. Convert your splines to paths, build a cluster, then follow the steps above.

### Workflow

1. Sample your splines with **Spline Sampler** (vanilla PCG) or resample with **Resample** (PCGEx) to control point density
2. Feed the sampled points into **Build Custom Graph** or **Path to Clusters** to produce Vtx + Edges
3. If you have multiple splines that should connect at shared points, run **Fuse Clusters** first to merge overlapping endpoints into proper junctions
4. Connect the cluster output to **Cluster to Zone Graph** (see [From Existing Clusters](#from-existing-clusters) above)

<!-- IMAGE: PCG graph pipeline: Spline Sampler → Path to Clusters → Fuse Clusters → Cluster to Zone Graph. The viewport shows input splines on the left, the fused cluster in the middle, and Zone Graph lanes on the right. -->

{% hint style="warning" %}
Point density matters. Too few points and your roads will be straight segments with sharp corners. Too many and you'll have unnecessary geometry. A spacing of 200-500 units works well for most scales.
{% endhint %}

### Why Fuse Clusters?

Splines sampled independently won't share vertices where they cross or meet. **Fuse Clusters** merges nearby endpoints into single junction vertices, which is what the Zone Graph node needs to create proper polygon intersections. Without fusing, overlapping spline endpoints produce separate leaf nodes instead of shared junctions.

<!-- IMAGE: Two-panel comparison. Left: Two splines crossing without fusing, producing four separate road dead-ends at the crossing point. Right: After Fuse Clusters, the crossing becomes a single junction vertex with a proper polygon intersection. -->
