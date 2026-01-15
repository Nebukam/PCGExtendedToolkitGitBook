---
icon: circle-dashed
---

# G-Probe : Spanner

Greedy t-spanner - sparse graph with path length guarantees

📌 **Subnode** — Connects to **Probes** pins.

**How It Works**

> AI-Generated, needs proofreading

* The G-Probe : Greedy Spanner node constructs a sparse graph known as a t-spanner where the path length between any two nodes is at most `t` times their Euclidean distance, with `t` being the Stretch Factor.
* It limits the number of edges considered for inclusion in the spanner to the value set by Max Edge Candidates, which helps control performance and sparsity of the graph.
* The node uses a configuration type PCGExProbeConfigSpanner to guide its operation, ensuring that only edges meeting specific criteria are added to maintain the desired stretch factor.

#### Configuration

<details>

<summary><strong>Stretch Factor</strong> <code>double</code></summary>

Stretch factor - path through graph is at most t \* Euclidean distance. Lower = denser graph.

_Range: min: 1.0, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Edge Candidates</strong> <code>int32</code></summary>

Max edges to consider (performance limit)

_Range: min: 100_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExProbeConfigSpanner</code></summary>

Controls config.

📦 See: ProbeConfigSpanner configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Stretch Factor</strong> <code>double</code></summary>

Stretch factor - path through graph is at most t \* Euclidean distance. Lower = denser graph.

_Range: min: 1.0, max: 10.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Max Edge Candidates</strong> <code>int32</code></summary>

Max edges to consider (performance limit)

_Range: min: 100_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsProbing\Public\Probes\PCGExGlobalProbeSpanner.h`
