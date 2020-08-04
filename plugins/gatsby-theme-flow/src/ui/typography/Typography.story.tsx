import React from "react";
import { storiesOf } from "@storybook/react";
import * as typographyDefinitions from "./index";
import { colors } from "../colors";
import { Page } from "../../components-util/Page";
import { Column } from "../../components-util/Column";

function round(number: number, digits: number): number {
  const multiplier = 10 ** digits;

  return Math.round(number * multiplier) / multiplier;
}

const TypographyDefs: React.FC<{
  definitions: Record<string, React.CSSProperties>;
  color: string;
  backgroundColor: string;
}> = ({ definitions, color, backgroundColor }) => (
  <div
    style={{
      color,
      backgroundColor,
      padding: "16px 42px",
      marginTop: 24,
    }}
  >
    {Object.entries(definitions).map(([name, properties]) => (
      <div key={name} style={{ margin: "15px 0" }}>
        <div style={properties}>{name}</div>
        <div style={typographyDefinitions.base.small}>
          {typeof properties.fontSize === "number"
            ? round(properties.fontSize / 15, 4)
            : properties.fontSize}
          em • {properties.fontSize}
          {typeof properties.fontSize === "number" &&
          typeof properties.lineHeight === "number"
            ? ` / ${Math.round(properties.fontSize * properties.lineHeight)}`
            : ""}{" "}
          • {properties.fontWeight}
        </div>
      </div>
    ))}
  </div>
);

storiesOf("Typography", module)
  .add("Source Sans Pro", () => {
    return (
      <Page
        title="Source Sans Pro"
        description="Source Sans Pro is used for nearly all interface type. The typographic scale is a 1.2 (minor third) with a base font size of 15px.  You can preview the type scale at https://bit.ly/2ZCUS8V."
      >
        <Column>
          <TypographyDefs
            color={colors.black.base}
            backgroundColor={colors.silver.light}
            definitions={typographyDefinitions.base}
          />
        </Column>
        <Column>
          <TypographyDefs
            color={colors.white}
            backgroundColor={colors.black.base}
            definitions={typographyDefinitions.base}
          />
        </Column>
      </Page>
    );
  })
  .add("Source Code Pro", () => {
    return (
      <Page
        title="Source Code Pro"
        description="Source Code Pro is primiarly used for representing data, operations, GitHub branch names, or other technically oriented information."
      >
        <Column>
          <TypographyDefs
            color={colors.black.base}
            backgroundColor={colors.silver.light}
            definitions={typographyDefinitions.mono}
          />
        </Column>
        <Column>
          <TypographyDefs
            color={colors.white}
            backgroundColor={colors.black.base}
            definitions={typographyDefinitions.mono}
          />
        </Column>
      </Page>
    );
  });
