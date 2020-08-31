import PropTypes from "prop-types";
import React, { useRef, useState, useContext } from "react";
import styled from "@emotion/styled";
import {
  IconExpandList,
  IconCollapseList,
  IconExternalLink,
  IconChevronUp,
} from "../ui/icons";
import { Link, withPrefix } from "gatsby";
import { theme } from "../colors";
import { smallCaps } from "../utils/typography";
import { size } from "polished";
import { NavItemsContext } from "./page-layout";

const ExpandAll = styled.button(smallCaps, {
  display: "flex",
  alignItems: "center",
  marginBottom: 12,
  padding: "4px 0",
  border: 0,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1,
  background: "none",
  outline: "none",
  cursor: "pointer",
  color: "inherit",
  ":hover": {
    opacity: theme.hoverOpacity,
  },
  svg: {
    ...size(12),
    marginRight: 8,
  },
});

const StyledList = styled.ul({
  marginLeft: 0,
  marginBottom: 32,
  listStyle: "none",
});

const StyledListItem = styled.li({
  fontSize: "1rem",
  lineHeight: 1.5,
  marginBottom: "0.8125rem",
  a: {
    color: "inherit",
    textDecoration: "none",
    ":hover": {
      opacity: theme.hoverOpacity,
    },
    "&.active": {
      color: theme.primary,
      pointerEvents: "none",
    },
  },
});

const Category = styled.div({
  position: "relative",
  zIndex: 0,
  [StyledList]: {
    position: "relative",
    zIndex: 2,
  },
});

const categoryTitleStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 0",
  color: theme.secondary,
  fontWeight: "bold",
  fontSize: 14,
  lineHeight: "15px",
  ...smallCaps,
  svg: size(10),
  "&.active": {
    color: theme.secondary,
  },
};

const CategoryTitle = styled.div(categoryTitleStyles);
const CategoryLink = styled(Link)(categoryTitleStyles, {
  textDecoration: "none",
  ":hover": {
    opacity: theme.hoverOpacity,
  },
});

const StyledCheckbox = styled.input({
  ...size("100%"),
  cursor: "pointer",
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0,
  zIndex: 1,
  [`:hover ~ ${CategoryTitle}`]: {
    opacity: theme.hoverOpacity,
  },
  ":not(:checked) ~": {
    [`${CategoryTitle} svg`]: {
      transform: "scaleY(-1)",
    },
    [StyledList]: {
      display: "none",
    },
  },
});

const StyledLink = styled.a({
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    color: theme.text3,
  },
});

const DocIcon = styled.span({
  display: "inline-block",
  marginRight: "0.42rem",
});

const DocSetItem = styled.div({
  marginBottom: "0.42rem",
});

const StyledOutlinkIcon = styled(IconExternalLink)(size(14), {
  verticalAlign: -1,
  marginLeft: 8,
  color: theme.text3,
});

function isPageSelected(path, pathname) {
  const [a, b] = [withPrefix(path), pathname].map((string) =>
    string.replace(/\/$/, "")
  );
  return a === b;
}

function showDocsetMenu(path) {
  const root = path === "/";
  const docsetPages = ["/concepts"];
  if (root) return true;
  return docsetPages.find((p) => path.includes(p));
}

function NavItems(props) {
  return (
    <StyledList>
      {props.pages.map((page, index) => {
        const pageTitle =
          page.sidebarTitle || page.title === "Getting Started"
            ? "Home"
            : page.title;
        return (
          <StyledListItem key={index}>
            {page.anchor ? (
              <a href={page.path} target="_blank" rel="noopener noreferrer">
                {pageTitle}
                <StyledOutlinkIcon />
              </a>
            ) : (
              <Link
                className={
                  isPageSelected(page.path, props.pathname) ? "active" : null
                }
                to={page.path}
                title={page.description}
                onClick={props.onLinkClick}
              >
                {pageTitle}
              </Link>
            )}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}

NavItems.propTypes = {
  pages: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func,
};

export default function SidebarNav(props) {
  const categoriesRef = useRef();
  const docset = useContext(NavItemsContext);

  const [allExpanded, setAllExpanded] = useState(false);
  const categories = props.contents.filter((content) => content.title);
  const [root] = props.contents.filter((content) => !content.title);

  function toggleAll() {
    const checkboxes = Array.from(
      categoriesRef.current.querySelectorAll('input[type="checkbox"]')
    );

    const expanded = !checkboxes.every((checkbox) => checkbox.checked);
    checkboxes.forEach((checkbox) => (checkbox.checked = expanded));
    setAllExpanded(expanded);

    if (props.onToggleAll) {
      props.onToggleAll(expanded);
    }
  }

  function toggleCategory(event) {
    const { value, checked, parentElement } = event.target;

    const checkboxes = parentElement.parentElement.querySelectorAll(
      'input[type="checkbox"]'
    );
    const expanded = Array.from(checkboxes).every(
      (checkbox) => checkbox.checked
    );
    setAllExpanded(expanded);

    if (props.onToggleCategory) {
      props.onToggleCategory(value, checked);
    }
  }

  return (
    <>
      <>
        {showDocsetMenu(props.pathname) &&
          docset
            .filter((navItem) => {
              return !navItem.omitLandingPage;
            })
            .map((navItem, index) => (
              <DocSetItem key={navItem.url}>
                <DocIcon>{navItem.icon}</DocIcon>
                <StyledLink href={navItem.url}>{navItem.title}</StyledLink>
              </DocSetItem>
            ))}
      </>
      {root && (
        <NavItems
          pages={root.pages}
          pathname={props.pathname}
          onLinkClick={props.onLinkClick}
        />
      )}
      {!props.alwaysExpanded && categories.length > 1 && (
        <ExpandAll onClick={toggleAll}>
          {React.createElement(allExpanded ? IconCollapseList : IconExpandList)}
          {allExpanded ? "Collapse" : "Expand"} all
        </ExpandAll>
      )}
      <div ref={categoriesRef}>
        {categories.map((category, index) => {
          const isSelected = category.pages.some((page) =>
            isPageSelected(page.path, props.pathname)
          );
          const className = isSelected ? "active" : null;
          return (
            <Category key={index}>
              {!props.alwaysExpanded && (
                <StyledCheckbox
                  type="checkbox"
                  value={category.title}
                  onChange={toggleCategory}
                  defaultChecked={isSelected}
                />
              )}
              {props.alwaysExpanded && category.path ? (
                <CategoryLink className={className} to={category.path}>
                  {category.title}
                </CategoryLink>
              ) : (
                <CategoryTitle className={className}>
                  {category.title}
                  {!props.alwaysExpanded && <IconChevronUp />}
                </CategoryTitle>
              )}
              <NavItems
                pages={category.pages}
                pathname={props.pathname}
                onLinkClick={props.onLinkClick}
              />
            </Category>
          );
        })}
      </div>
    </>
  );
}

SidebarNav.propTypes = {
  alwaysExpanded: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onToggleAll: PropTypes.func,
  onToggleCategory: PropTypes.func,
  onLinkClick: PropTypes.func,
};
