# 1.0.0-beta2
- Added the `AnimatedTransition` widget. This widget detects changes in child elements and animates them. It can be applied in various scenarios, such as loading screens and updates to child elements.

# 1.0.0-beta3
- Fixed an issue where the sizes of both parent and child elements in `AnimatedTransition` were not being calculated correctly due to all child elements being absolute position applied.

- Added an option that is whether to using memo(cache, recycle) into the `ConditionalRender` widget.

# 1.0.0-beta4
- Added the `Invisible` widget. Under the assumption that the size of the child element is explicitly known, this widget excludes the child element from both rendering and reflow if the element is not visible, significantly improving performance.

# 1.0.0-beta5
- Fixed an issue in the `AnimatedFoldable` widget where the non-visible state was affected by changes in the size of its children, causing the height of the layout to change or break.

- Fixed an issue where elements in the `Invisible` widget were only rendered if they were fully visible. Now, elements will be rendered as long as they are partially visible, even if only 0.1% of the element is in view.

- Fixed an issue where the transition animation was applied to the line indicator element in the `TabNavigation` widget when the initial index was a positive number instead of 0.

# 1.0.0-beta6
- Fixed an issue by modifying the `AnimatedSize` widget to exclude the wrapping element from layout calculations when not in animation state, optimizing performance.

- Updated the README.md to provide more detailed explanations and clarifications throughout the project documentation.

# 1.0.0-beta7
- Fixed an issue about `AnimatedSize` widget.

# 1.0.0-beta8
- Fixed an issue where the `AnimatedWidget` widget could not accurately define its previous intrinsic size of the element.

# 1.0.0-beta9
- Fixed an issue where an exception occurred while the `Canvas` widget was detecting size changes.
- Updated the `Canvas` widget to ensure it redraws even after being recomposed.

# 1.0.0-beta11
- Fixed an issue where the scrollbar would appear in the `Scrollable` widget despite being defined as false, due to CSS priority differences in the development environment.

- Updated the `Grid` widget to ensure react ref hooks work correctly.
- Updated the `Row` widget to ensure react ref hooks work correctly.
- Updated the `Colunn` widget to ensure react ref hooks work correctly.

# 1.0.0-beta12
- Added widget `AnimatedFoldable.Bidirectional`, which combines the functionality of the existing Vertical and Horizontal widgets into a single component, enabling seamless bidirectional animations.
- Fixed an issue where the ref was not applied to the `Scrollable.Vertical` and `Scrollable.Horizontal` widget by using `forwardRef` function.