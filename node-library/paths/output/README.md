---
icon: grid-round-2
---

# Output

**This is where path data becomes something Unreal Engine can render.** Output nodes convert ordered point sequences into engine-native objects.

**Create Spline** turns path points into spline components, giving you data-only splines, actor components, or both. For mesh output, the simple spline mesh node creates one spline mesh component per segment with a static mesh and material you specify directly. The staging-driven variant takes this further, using collection entries to assign meshes and materials per segment -- so different parts of the same path can use different assets without manual splitting.
