import React from "react";
import classnames from "classnames";
import { ClassNames } from "@emotion/core";

/**
 * Clone elements in order. All `className`, `style`, and `css` props will be
 * propogated and merged. The leftmost `ref` will be maintained.
 */
export const cloneElements = (
  ...elements: readonly React.ReactElement[]
): React.ReactElement => {
  return (
    <ClassNames>
      {({ css, cx }) => {
        if (elements.length === 1) return elements[0];
        return elements.reduce((accumulator, element) => {
          return React.cloneElement(accumulator, {
            ...element.props,
            className: classnames(
              element.props.className,
              accumulator.props.className,
              // If the parent component is using emotion with the jsx pragma, we
              // have to get fancy and intercept the styles to use with the
              // `ClassNames` wrapper.
              accumulator.props.css
                ? cx(css(accumulator.props.css.styles))
                : null
            ),
            style: { ...element.props.style, ...accumulator.props.style },
            // Since we're cloning `as` with the `original` props added, we're
            // going to lose the `ref`. We have to grab it from the
            // `React.ReactElement` instance
            ref: (accumulator as any).ref ?? (element as any).ref,
          });
        });
      }}
    </ClassNames>
  );
};
