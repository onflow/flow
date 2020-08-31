import React, { useContext } from "react";
import styled from "@emotion/styled";
import { NavItemsContext, NavItemDescription } from "gatsby-theme-flow";
import { colors } from "gatsby-theme-flow/src/colors";
import { size } from "polished";
import { MenuWrapper, MenuItem } from "./menu";

function getBoxShadow(opacity, y, blur) {
  return `rgba(18, 21, 26, ${opacity}) 0 ${y}px ${blur}px`;
}

const { indigo } = colors;
const AppIcon = styled.div({
  ...size("100%"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: [
    getBoxShadow(0.12, 1, 2),
    getBoxShadow(0.1, 2, 4),
    getBoxShadow(0.08, 5, 10),
    `inset rgba(45, 31, 102, 0.4) 0 -1px 2px`,
  ].toString(),
  borderRadius: 8,
  color: indigo.lighter,
  fontSize: 16,
  // backgroundImage: `linear-gradient(${[indigo.base, indigo.dark]})`,
  svg: {
    ...size(16),
    fill: "currentColor",
  },
});

const StyledLink = styled.a({
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export default function DocsetSidebar() {
  const navItems = useContext(NavItemsContext);

  return (
    <MenuWrapper>
      {navItems
        .filter((navItem) => {
          return !navItem.omitLandingPage;
        })
        .map((navItem, index) => (
          <MenuItem
            key={navItem.url}
            icon={<AppIcon>{navItem.icons}</AppIcon>}
            title={<StyledLink href={navItem.url}>{navItem.title}</StyledLink>}
          ></MenuItem>
        ))}
    </MenuWrapper>
  );
}
