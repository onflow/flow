import { colors } from "../colors";
import * as CSS from "csstype";
import { base } from "./typography";
import { ClassNames } from "@emotion/core";
import tinycolor from "tinycolor2";
import React from "react";
import classnames from "classnames";
import { ShadedColor, getOffsetInPalette } from "./utils/colors";

// @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
/* istanbul ignore next */
export function assertUnreachable(value: never): never {
  throw new TypeError(`Unreachable value reached ${value}`);
}

type TLength = string | 0 | number;

/**
 * Save a default color so we can check if we used the default or not. The
 * default color has a few special properties.
 */
const defaultColor = colors.silver.light;

/**
 * Get the button's text color
 */
function getTextColor({
  color,
  feel,
  theme,
  mode,
}: {
  color: NonNullable<Props["color"]>;
  feel: NonNullable<Props["feel"]>;
  theme: NonNullable<Props["theme"]>;
  mode?: CSS.SimplePseudos;
}): CSS.ColorProperty | undefined {
  // Text color will always be the same for secondary buttons
  if (color === colors.white) {
    return colors.grey.darker;
  }

  switch (feel) {
    case "raised":
      // Set the base (meaning no pseudo-selectors) text color for raised
      // buttons. Otherwise return `undefined` to not change the color.
      //
      // We have some special logic for the raised color; set the text color to
      // be what is most readable between white and the default text color and
      // the _hover_ color's background. This is overrideable by the user, but
      // it shouldn't need to be.
      return !mode
        ? tinycolor
            .mostReadable(
              getHoverBackgroundColor({ color, feel, theme }),
              [colors.white, colors.grey.darker],
              {
                level: "AA",
                size: "small",
              }
            )
            .toString()
        : undefined;
    case "flat":
      if (color === defaultColor) {
        return theme === "dark" ? colors.grey.light : colors.grey.darker;
      }

      // We have a custom color and we're in dark mode, lighten the base and
      // focused colors 1 shade.
      if (theme === "dark" && (!mode || mode === ":focus")) {
        return getOffsetInPalette(1, "lighter", color);
      }

      return color;
    /* istanbul ignore next */
    default:
      throw assertUnreachable(feel);
  }
}

/**
 * Get the button's height
 */
function getHeight({
  size,
}: {
  size: NonNullable<Props["size"]>;
}): CSS.HeightProperty<TLength> {
  switch (size) {
    case "small":
      return 28;
    case "default":
      return 36;
    case "large":
      return 42;
    /* istanbul ignore next */
    default:
      throw assertUnreachable(size);
  }
}

/**
 * Get the hover background color
 */
function getHoverBackgroundColor({
  color,
  feel,
  theme,
}: {
  color: NonNullable<Props["color"]>;
  feel: NonNullable<Props["feel"]>;
  theme: NonNullable<Props["theme"]>;
}): CSS.BackgroundColorProperty {
  if (color === colors.white) {
    // Special case for secondary buttons
    return colors.silver.light;
  }

  switch (feel) {
    case "flat":
      // Hardcode if we're using the default color (special case), otherwise get
      // the next lightest color.
      if (color === defaultColor) {
        return theme === "light" ? colors.silver.light : colors.grey.dark;
      }

      return getOffsetInPalette(Infinity, "lighter", color);
    case "raised":
      // One shade darker
      return getOffsetInPalette(1, "darker", color);
    /* istanbul ignore next */
    default:
      throw assertUnreachable(feel);
  }
}

// Types that could use some improvement:
// * Don't allow `children` and `icon` to be missing
// * Don't allow `children` when `FAB`
//
// I was able to get guarantees to work, but only with very cryptic errors. I
// decided it'd be best, for the time being, to `throw` if we use things
// incorrectly.
interface Props
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "css"
  > {
  /**
   * Override the the default element used to render a button
   *
   * All props provided will be merged with props that `Button` adds, including
   * `className`s being merged.
   *
   * @default <button />
   */
  as?: React.ReactElement;

  /**
   * Base color to calculate all other colors with
   *
   * This has a special meaning for buttons with a "flat" feel; this will change
   * the text color as well as the background colors.
   *
   * Pass `colors.white` to treat this button as a secondary button
   *
   * @default colors.silver.light
   */
  color?: ShadedColor | typeof colors["white"];

  /**
   * If the button will appear and behave disabled.
   *
   * This prop is explicitly here and not granted by extension because it
   * doesn't exist on HTMLAttributes, but is essential to rendering correctly.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to use at the end of a button
   *
   * The size of icons will be automatically determined, but can be overriden
   */
  endIcon?: React.ReactElement;

  /**
   * Which feel to display
   *
   * The options are as follows:
   *
   * - `"raised"` (default): A button with a border and a background
   * - `"flat"`: No background or border
   *
   * @default "raised"
   */
  feel?: "raised" | "flat";

  /**
   * Either an icon to show to the left of the button text, or on it's own
   */
  icon?: React.ReactElement;

  /**
   * Show a loading spinner in place of the original icon on this button
   *
   * Automatically disables the button as well
   */
  loading?: boolean;

  /**
   * Size of the button
   *
   * @default "default"
   */
  size?: "default" | "small" | "large";

  /**
   * Theme to display the button
   *
   * Different themes have different box-shadows. Right now we have these
   * options, but this may expand in the future:
   *
   * - `"light"` (default)
   * - `"dark"`
   *
   * @default "light"
   */
  theme?: "light" | "dark";

  /**
   * The type of the button
   *
   * This isn't included in HTMLAttributes but it's a very common property
   * passed to a button, so we're including it here. If you pass `type` prop
   * when using any element besides `<button>` you will get React warnings about
   * passing unrecognized props to an element.
   */
  type?: "button" | "submit" | "reset" | undefined;

  /**
   * Button variants
   *
   * The options are as follows:
   *
   * - `undefined` (default): A button with text and an optional icon
   * - `"fab"`: Floating action button
   *
   *   You must include an `icon` prop and you must _not_ include a `children`
   *   prop for a floating action button.
   *
   *   _Note: this is not type checked; it will cause a runtime error_
   */
  variant?: "fab";
}

/**
 * Style system for Space Kit buttons
 *
 * This is intended to be used as an abstraction for your project's style guide.
 *
 * @see https://zpl.io/amdN6Pr
 */
export const Button = React.forwardRef<HTMLElement, Props>(
  (
    {
      as = <button />,
      children,
      color = defaultColor,
      disabled: disabledProps = false,
      variant,
      endIcon,
      feel = "raised",
      icon,
      loading,
      size = "default",
      theme = "light",
      ...otherProps
    },
    ref
  ) => (
    <ClassNames>
      {({ cx, css }) => {
        /**
         * If the button is in a `loading` state, then always treat it as
         * disabled. Otherwise, try to use `as.props`. Finally, use `props`
         */
        const disabled: boolean =
          loading ||
          (as.props.disabled != null ? as.props.disabled : disabledProps);

        /**
         * Icon size in pixels
         *
         * This is stored so we can use the same value for `height` and `width`
         */
        const iconSize = size === "small" ? 12 : size === "large" ? 24 : 16;

        const iconOnly = !children;

        if (variant === "fab") {
          if (!icon) {
            throw new TypeError("FAB buttons are required to have an `icon`");
          } else if (children) {
            throw new TypeError(
              "FAB buttons cannot have children, only an `icon`"
            );
          }
        }

        const propsToPass = {
          ...otherProps,
          ref,
          className: classnames(
            // I couldn't figure out how to get TypeScript to recognize that
            // `className` can be in `otherProps`.
            "className" in otherProps && (otherProps as any).className,
            cx(
              css([
                {
                  // We need to also set the `:hover` on `:disabled` so it has a
                  // higher specificity than any `:hover` classes passed in. This
                  // also means that both of these need to be overriden if we want
                  // to use a custom disabled color.
                  "&[disabled], &[disabled]:hover": {
                    backgroundColor:
                      feel === "flat"
                        ? "transparent"
                        : theme === "light"
                        ? colors.silver.light
                        : colors.grey.dark,
                    boxShadow: "none",
                    color:
                      feel === "flat" && theme === "dark"
                        ? colors.grey.dark
                        : colors.grey.light,
                  },

                  backgroundColor:
                    color === colors.white
                      ? colors.white
                      : feel === "raised"
                      ? color
                      : "transparent",

                  borderRadius: variant === "fab" ? "100%" : 4,

                  borderWidth: 0,
                  ...(feel !== "flat" && {
                    boxShadow:
                      theme === "light"
                        ? "0 1px 4px 0 rgba(18, 21, 26, 0.04), inset 0 0 0 1px rgba(18, 21, 26, 0.2), inset 0 -1px 0 0 rgba(18, 21, 26, 0.05)"
                        : "0 0 0 1px rgba(18, 21, 26, 0.2), 0 1px 4px 0 rgba(18, 21, 26, 0.08), 0 1px 0 0 rgba(18, 21, 26, 0.05)",
                  }),

                  color: getTextColor({ color, feel, theme }),

                  cursor: loading || disabled ? "default" : "pointer",

                  // Vertically center children
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  height: getHeight({ size }),

                  minWidth: iconOnly
                    ? size === "small"
                      ? 28
                      : size === "large"
                      ? 42
                      : 36
                    : size === "small"
                    ? 76
                    : size === "large"
                    ? 112
                    : 100,

                  // We have to set the Y padding because browsers (at least Chrome) has
                  // a non-symmetrical vertical padding applied by default.
                  padding: `0 ${iconOnly ? 0 : 12}px`,

                  ...(size === "small"
                    ? base.small
                    : size === "large"
                    ? base.large
                    : base.base),

                  fontWeight: 600,

                  // Disable the outline because we're setting a custom `:active` style
                  outline: 0,

                  textDecoration: "none",

                  whiteSpace: "nowrap",
                },

                !disabled && {
                  ":hover, &[data-force-hover-state]": {
                    backgroundColor: getHoverBackgroundColor({
                      color,
                      feel,
                      theme,
                    }),
                    color: getTextColor({ color, feel, theme, mode: ":hover" }),
                    ...(feel !== "flat" && {
                      // The `box-shadow` property is copied directly from Zeplin
                      boxShadow:
                        theme === "light"
                          ? "0 5px 10px 0 rgba(18, 21, 26, 0.08), inset 0 0 0 1px rgba(18, 21, 26, 0.2), inset 0 -1px 0 0 rgba(18, 21, 26, 0.05)"
                          : "0 0 0 1px rgba(18, 21, 26, 0.2), 0 5px 10px 0 rgba(18, 21, 26, 0.12), 0 1px 0 0 rgba(18, 21, 26, 0.05)",
                    }),
                  },
                  ":focus, &[data-force-focus-state]": {
                    ...(feel === "flat" && {
                      backgroundColor:
                        theme === "light" ? colors.white : "#000",
                      color:
                        theme === "light"
                          ? colors.blue.base
                          : colors.blue.light,
                    }),
                    // The `box-shadow` property is copied directly from Zeplin for the
                    // light theme. For the dark theme we use a variant of the color to
                    // make the borders sharp.
                    boxShadow: `0 1px 4px 0 rgba(18, 21, 26, 0.08), 0 0 0 2px ${
                      theme === "light" ||
                      color === defaultColor ||
                      color === colors.white
                        ? "#bbdbff"
                        : getOffsetInPalette(Infinity, "lighter", color)
                    }, inset 0 0 0 1px ${
                      color === defaultColor || color === colors.white
                        ? "#2075d6"
                        : getOffsetInPalette(1, "darker", color)
                    }, inset 0 -1px 0 0 rgba(18, 21, 26, 0.05)`,
                  },
                  "&:active, &[data-force-active-state], &[aria-expanded=true]": {
                    ...(getTextColor({
                      color,
                      feel,
                      theme,
                      mode: ":hover",
                    }) && {
                      color: getTextColor({
                        color,
                        feel,
                        theme,
                        mode: ":active",
                      }),
                    }),

                    backgroundColor:
                      color === colors.white
                        ? colors.white
                        : feel === "raised"
                        ? color
                        : color === defaultColor
                        ? theme === "dark"
                          ? colors.grey.darker
                          : colors.silver.base
                        : getOffsetInPalette(2, "lighter", color),

                    // The `box-shadow` properties are copied directly from Zeplin
                    boxShadow:
                      feel !== "flat"
                        ? theme === "light"
                          ? "inset 0 0 0 1px rgba(18, 21, 26, 0.2), inset 0 -1px 0 0 rgba(18, 21, 26, 0.05), inset 0 2px 2px 0 rgba(18, 21, 26, 0.12)"
                          : "0 0 0 1px rgba(18, 21, 26, 0.2), 0 1px 4px 0 rgba(18, 21, 26, 0.08), 0 -1px 0 0 rgba(18, 21, 26, 0.16), inset 0 1px 2px 0 rgba(18, 21, 26, 0.42)"
                        : "none",
                    outline: "0",
                  },
                },
              ])
            )
          ),
          disabled,
          onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (disabled) return event.preventDefault();

            if (otherProps.onClick) {
              otherProps.onClick(event);
            }

            if (as.props.onClick) {
              as.props.onClick(Event);
            }

            // Remove the focus
            event.currentTarget.blur();
          },
          onMouseOut: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (event.buttons > 0) {
              event.currentTarget.blur();
            }

            otherProps.onMouseOut?.(event);
            as.props.onMouseOut?.(event);
          },

          children: (
            <>
              {icon && (
                <span
                  className={cx(
                    css({
                      alignItems: "center",
                      // This needs to be `inline-flex` and not the default of
                      // `inline-block` to vertically center the icon automatically
                      display: "inline-flex",
                      height: iconSize,
                      justifyContent: "center",
                      // The `4px` will be on the right to separate the icon from the text
                      margin: iconOnly ? 0 : "0 4px 0",
                      width: iconSize,
                    })
                  )}
                >
                  {icon}
                </span>
              )}
              {children}
              {endIcon && !loading && (
                <span
                  className={cx(
                    css({
                      alignItems: "center",
                      // This needs to be `inline-flex` and not the default of
                      // `inline-block` to vertically center the icon automatically
                      display: "inline-flex",
                      height: iconSize,
                      justifyContent: "center",
                      // The `4px` will be on the right to separate the icon from the text
                      margin: iconOnly ? 0 : "0 0 0 4px",
                      width: iconSize,
                    })
                  )}
                >
                  {endIcon}
                </span>
              )}
            </>
          ),
        };

        return React.cloneElement(as, {
          ...propsToPass,
          className: classnames(
            propsToPass.className,
            as.props.className,
            // If the parent component is using emotion with the jsx pragma, we
            // have to get fancy and intercept the styles to use with the
            // `ClassNames` wrapper.
            as.props.css ? css(as.props.css.styles) : null
          ),
        });
      }}
    </ClassNames>
  )
);
