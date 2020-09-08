import React, { useContext } from "react";
import styled from "@emotion/styled";
import { NavItemsContext, NavItemDescription } from "gatsby-theme-flow";
import { colors } from "gatsby-theme-flow/src/colors";
import { size } from "polished";
import { MenuWrapper, MenuItem } from "./menu";
import { getProjectIcon } from "gatsby-theme-flow/src/ui/icons";

const AppIcon = styled.div({
  ...size("100%"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  fontSize: 16,
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

export default function DocsetMenu() {
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
            icon={
              <AppIcon
                css={{
                  backgroundImage: `url(${getProjectIcon(navItem.icon).color})`,
                }}
              />
            }
            title={<StyledLink href={navItem.url}>{navItem.title}</StyledLink>}
          >
            <NavItemDescription>{navItem.description}</NavItemDescription>
            <a href={navItem.url}>📗&nbsp;Visit Docs</a>
          </MenuItem>
        ))}
    </MenuWrapper>
  );
}
