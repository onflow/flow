import { colors } from '../../colors';

export interface MonochromePalette {
  darker: string;
  dark: string;
  base: string;
  light: string;
  lighter: string;
}

export interface ColorPalette extends MonochromePalette {
  darkest: string;
  lightest: string;
}

/**
 * An enumeration of all colors in all shaded palettes. These are all the colors
 * that can be lightened and darkened. This excludes colors.white intentionally
 * because that will not be a valid input for a color change function.
 *
 * This can be used to restrict a prop to only be a color value from one of our
 * palettes.
 *
 * This is not intended to be a representation of all colors available in Space
 * Kit; for that, see  `@AllColors`.
 */
export type ShadedColor =
  | typeof colors["pink"][keyof typeof colors["pink"]]
  | typeof colors["teal"][keyof typeof colors["teal"]]
  | typeof colors["indigo"][keyof typeof colors["indigo"]]
  | typeof colors["black"][keyof typeof colors["black"]]
  | typeof colors["grey"][keyof typeof colors["grey"]]
  | typeof colors["silver"][keyof typeof colors["silver"]]
  | typeof colors["red"][keyof typeof colors["red"]]
  | typeof colors["green"][keyof typeof colors["green"]]
  | typeof colors["blue"][keyof typeof colors["blue"]]
  | typeof colors["orange"][keyof typeof colors["orange"]]
  | typeof colors["yellow"][keyof typeof colors["yellow"]]
  | typeof colors["purple"][keyof typeof colors["purple"]]
  | typeof colors["blilet"][keyof typeof colors["blilet"]]
  | typeof colors["midnight"][keyof typeof colors["midnight"]];

/**
 * Represents all colors available in Space Kit
 *
 * This is explicitly not valid when a color needs the ability to be made
 * lighter or darker. For that use case, refer to `PaletteColor`
 */
export type AllColors =
  | ShadedColor
  | "initial"
  | "inherit"
  | typeof colors.white;

export function findPaletteByColor(
  searchColor: ShadedColor
): MonochromePalette | ColorPalette {
  const result = Object.values(colors)
    .filter((color) => typeof color !== "string")
    .find(
      // We need to declare the result of the `filter` function's callback to
      // tell TypeScript we are narrowing the type. By default,
      // `Array.prototype.filter` has the same return type as it's given as an
      // input; we're explicitly doing something different here.
      // @see https://github.com/Microsoft/TypeScript/issues/7657#issuecomment-228697078
      (color) => {
        return Object.values(color).includes(searchColor);
      }
    );

  if (!result) {
    throw new Error("Could not find color in palette");
  }

  // We know that the interface conforms to one of these, but we can't infer
  // this because we defined all the palettes `as const` so we can restrict
  // input to only values in those palettes.
  return result as MonochromePalette | ColorPalette;
}

const monochromePaletteKeys: ReadonlyArray<keyof MonochromePalette> = [
  "darker",
  "dark",
  "base",
  "light",
  "lighter",
] as const;

const colorPaletteKeys: ReadonlyArray<keyof ColorPalette> = [
  "darkest",
  ...monochromePaletteKeys,
  "lightest",
] as const;

function isColorPalette(
  palette: MonochromePalette | ColorPalette
): palette is ColorPalette {
  return Object.prototype.hasOwnProperty.call(palette, "darkest");
}

/**
 * Given a color and a palette the color belongs to, find another color in that
 * palette given an offset. The offset should be a number representing how many
 * shades darker or lighter we want with the direction specificed by
 * `offsetDirection`. If we try to go beyond the bounds, we'll return the
 * closest item we can. In other words, if we pass `Infinity` and `darker`, then
 * we'll return the darkest color in the palette. If we pass `Infinity` and `lighter` we'll
 * return the lightest color in the palette.
 *
 * This function will throw if `color` is not one of the values in `palette`.
 *
 * @param offset A number representing how many shades away from the original
 * `color` to return. If the offset goes beyond the bounds of the palette, the most extreme color
 * in that direction will be chosen.
 * @param offsetDirection Which direction we wish to be offset, `"lighter"` or `"darker"`.
 * @param color A color in one of our palettes
 */
export function getOffsetInPalette(
  offset: number,
  offsetDirection: "lighter" | "darker",
  color: ShadedColor
): ShadedColor {
  /**
   * Palette this color belongs to
   */
  const palette = findPaletteByColor(color);

  /**
   * A numerical value of the offset with the `offsetDirection` taken into
   * account. This will be positive for lighter values and negative for darker
   * values.
   */
  const effectiveOffset = offsetDirection === "lighter" ? offset : -offset;

  if (isColorPalette(palette)) {
    const index = Object.keys(palette).findIndex(
      (paletteKey) => palette[paletteKey as keyof ColorPalette] === color
    );

    // Use `max` to prevent a negative number. We explicitly do not throw an
    // error here.
    return palette[
      colorPaletteKeys[
        Math.min(
          Object.keys(palette).length - 1,
          Math.max(0, index + effectiveOffset)
        )
      ]
    ] as ShadedColor;
  }

  const index = Object.keys(palette).findIndex(
    (paletteKey) => palette[paletteKey as keyof MonochromePalette] === color
  );

  // Use `max` to prevent a negative number. We explicitly do not throw an
  // error here.
  return palette[
    monochromePaletteKeys[
      Math.min(
        Object.keys(palette).length - 1,
        Math.max(0, index + effectiveOffset)
      )
    ]
  ] as ShadedColor;
}
