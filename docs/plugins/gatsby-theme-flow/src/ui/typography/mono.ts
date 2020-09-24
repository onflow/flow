import * as baseFont from "./base";
import { mono as monoFontFamily } from "../fonts";
import { TypographyDefinition } from "./TypographyDefinition";

export const large: TypographyDefinition = {
  ...baseFont.large,
  fontFamily: monoFontFamily,
};

export const base: TypographyDefinition = {
  ...baseFont.base,
  fontFamily: monoFontFamily,
};

export const small: TypographyDefinition = {
  ...baseFont.small,
  fontFamily: monoFontFamily,
};

export const xsmall: TypographyDefinition = {
  ...baseFont.xsmall,
  fontFamily: monoFontFamily,
};
