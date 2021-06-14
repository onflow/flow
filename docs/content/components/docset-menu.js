import styled from "@emotion/styled";

import React, { useContext } from "react";

import { NavItemsContext, NavItemDescription } from "gatsby-theme-flow";

import { size } from "polished";

import { getProjectIcon } from "gatsby-theme-flow/src/ui/icons";

import { MenuWrapper, MenuItem } from "./menu";
import TrackingLink from "./tracking-link";

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

const StyledTrackingLink = styled(TrackingLink)(() => ({
  color: "inherit",
  textDecoration: "none",
}));

export default function DocsetMenu(props) {
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
            title={
              <StyledTrackingLink
                href={navItem.url}
                eventName={
                  props.isSidebar
                    ? `Homepage_nav_${navItem.url}_clicked`
                    : `Homepage_link_${navItem.url}_clicked`
                }
              >
                {navItem.title}
              </StyledTrackingLink>
            }
          >
            <NavItemDescription>{navItem.description}</NavItemDescription>
          </MenuItem>
        ))}
    </MenuWrapper>
  );
}
