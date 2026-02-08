---
icon: grid-2
---

# Attribute

**Attribute filters test stored values on a point.** They're the most common filter category because most filtering decisions ultimately come down to "what does this point's data say?"

The core set covers numeric comparisons — equal, greater, less, and so on — with variants that compare against the nearest point's value or against another attribute on the same point. String filters handle exact matching, substring checks, and prefix/suffix tests, again with a self-comparison variant for cross-attribute logic. Boolean filters test flags directly.

Beyond basic comparisons, you'll find filters for Gameplay Tag matching, hash containment checks, and range testing against min/max bounds. Together these cover the full spectrum of attribute-driven decisions.

### Concepts

For understanding filter architecture, composition patterns, and reusability:

* [Filter Concepts](../../../../working-with-pcgex/filters/)
