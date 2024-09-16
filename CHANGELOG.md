# 1.0.0-beta2
- Added the `AnimatedTransition` widget. This widget detects changes in child elements and animates them. It can be applied in various scenarios, such as loading screens and updates to child elements.

# 1.0.0-beta3
- Fixed an issue where the sizes of both parent and child elements in `AnimatedTransition` were not being calculated correctly due to all child elements being absolute position applied.

- Added an option that is whether to using memo(cache, recycle) into the `ConditionalRender` widget.

# 1.0.0-beta4
- Added the `Invisible` widget. Under the assumption that the size of the child element is explicitly known, this widget excludes the child element from both rendering and reflow if the element is not visible, significantly improving performance.