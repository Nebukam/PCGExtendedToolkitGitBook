---
icon: grid-round-2
---

# Textures

**A three-stage pipeline for sampling textures through PCG points.** Texture sampling is split into discrete steps so each stage can be configured independently.

First, define *what* to sample — which texture channel to extract, what output type to produce, and how to scale the result. Next, load the actual texture data from a material or a direct texture reference, choosing between bilinear or point filtering. Finally, read values at UV coordinates pulled from point attributes.

The separation matters because the definition and loading steps can be reused across multiple sampling passes without redundant configuration.
