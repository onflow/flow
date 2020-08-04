/** @jsx jsx */
import { ClassNames, jsx } from "@emotion/core";
import React from "react";
import * as typography from "./typography";
import { colors } from "../colors";
import { IconWarningSolid, IconInfoSolid } from "./icons";
import classnames from "classnames";

interface Props {
  /**
   * Passed through to the underlying `input`
   */
  autoFocus?: boolean;

  /**
   * Class name that will be applied to the wrapping `div` around the component
   */
  className?: string;

  /**
   * Value an uncontrolled input will default to
   */
  defaultValue?: string;

  /**
   * Visible description
   */
  description?: React.ReactNode;

  /**
   * Disable the input
   */
  disabled?: boolean;

  /**
   * Content to show in the event there is an error in the input. This will
   * change the appearance of the input and will replace text passed via
   * `helper`.
   */
  error?: React.ReactNode;

  /**
   * Extra information displayed below input. This will be replaced by `error` if it is passed
   */
  helper?: React.ReactNode;

  /**
   * Icon to have at the left of the input
   */
  icon?: React.ReactNode;

  /**
   * Override how the `input` is rendered. You can pass either an intrinisic jsx element as a string (like "input") or a react element (`<input />`)
   *
   * If you pass a react element, props that we add are spread onto the input.
   *
   * @default "input"
   */
  inputAs?: React.ReactElement | keyof JSX.IntrinsicElements;

  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Visible title
   */
  label?: React.ReactNode;

  /**
   * A short hint that describes the expected value of the input field
   */
  placeholder?: string;

  /**
   * Size of text and padding inside the input
   *
   * Defaults to `standard`
   */
  size?: "small" | "standard" | "large";

  /**
   * Whether or not to show the circle i icon to the left of helper text
   *
   * Defaults to `false`
   */
  showInfoIcon?: boolean;

  /**
   * Value of a controlled input
   */
  value?: string | number;

  /**
   * Name to give the input
   */
  name?: string;

  /**
   * Type of input field
   */
  type?: string;
}

/**
 * Emulates an `<input>` with the automatic layout of a label, description, helper
 * text, and error text.
 */
export const TextField: React.FC<Props> = ({
  autoFocus,
  className,
  defaultValue,
  description,
  disabled,
  error,
  helper,
  icon,
  inputAs = "input",
  label,
  name,
  onFocus,
  onBlur,
  onChange,
  placeholder,
  showInfoIcon,
  size = "standard",
  type,
  value,
}) => (
  <ClassNames>
    {({ css, cx }) => {
      const inputProps = {
        autoFocus,
        defaultValue,
        disabled,
        name,
        onFocus,
        onBlur,
        onChange,
        placeholder,
        type,
        value,
        className: cx(
          css({
            backgroundColor: disabled ? colors.silver.light : colors.white,
            border: "solid 1px",
            borderColor: error ? colors.red.base : colors.silver.darker,
            "::placeholder": {
              color: disabled ? colors.grey.lighter : colors.grey.light,
              opacity: 1,
            },
            borderRadius: 4,
            flex: 1,
            height: size === "standard" ? 36 : size === "small" ? 28 : 42,
            ...(size === "small"
              ? typography.base.small
              : typography.base.base),
            marginRight: icon ? -30 : 0,
            paddingLeft: icon ? 34 : size === "small" ? 8 : 12,
            paddingRight: size === "small" ? 8 : 12,
            width: "100%",
            ":hover,  &[data-force-hover-state]": {
              borderColor:
                !disabled && !error
                  ? colors.grey.light
                  : error
                  ? colors.red.base
                  : colors.silver.darker,
            },
            ":focus, &[data-force-focus-state]": {
              borderColor:
                !disabled && !error
                  ? colors.blue.light
                  : error
                  ? colors.red.base
                  : colors.silver.darker,
              outline: "none",
            },
          })
        ),
      };

      return (
        <div className={className}>
          <label
            className={cx(
              css({
                paddingBottom: 8,
                ...typography.base.base,
                fontWeight: 600,
              })
            )}
          >
            {label != null && <div css={{ marginBottom: 4 }}>{label}</div>}
            {description != null && (
              <div
                css={{
                  ...typography.base.base,
                  color: colors.black.base,
                }}
              >
                {description}
              </div>
            )}
            <div
              css={{
                marginTop: 8,
                position: "relative",
              }}
            >
              {icon && (
                <div
                  css={{
                    position: "absolute",
                    display: "inline-flex",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {icon}
                </div>
              )}

              {React.isValidElement(inputAs)
                ? React.cloneElement(inputAs, {
                    ...inputProps,
                    className: classnames(
                      inputProps.className,
                      inputAs.props.className
                    ),
                  })
                : React.createElement(inputAs, inputProps)}
            </div>
          </label>
          <div
            css={{
              marginTop: 8,
              alignItems: "center",
              position: "relative",
            }}
          >
            {(helper || error) && (
              <div
                css={{
                  ...typography.base.small,
                  color: error ? colors.red.base : colors.grey.base,
                  display: "flex",
                  marginRight: 8,
                  marginTop: 8,
                  paddingLeft: size === "small" ? 8 : 12,
                }}
              >
                {error ? (
                  <IconWarningSolid
                    css={{
                      height: 15,
                      marginRight: 8,
                      position: "relative",
                      top: 2,
                      width: 15,
                    }}
                  />
                ) : showInfoIcon && helper ? (
                  <IconInfoSolid
                    css={{
                      color: colors.blue.base,
                      height: 15,
                      marginRight: 8,
                      position: "relative",
                      top: 2,
                      width: 15,
                    }}
                  />
                ) : null}

                <div>{error || helper}</div>
              </div>
            )}
          </div>
        </div>
      );
    }}
  </ClassNames>
);
