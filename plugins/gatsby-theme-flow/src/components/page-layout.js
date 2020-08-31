import "../prism.less";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import DocsetSwitcher from "./docset-switcher";
import Header from "./header";
import HeaderNav from "./header-nav";
import PropTypes from "prop-types";
import React, { createContext, useMemo, useRef, useState } from "react";
import Search from "./search";
import styled from "@emotion/styled";
import useLocalStorage from "react-use/lib/useLocalStorage";
import { Button } from "../ui/Button";
import { theme } from "../colors";
import breakpoints from "../utils/breakpoints";
import FlexWrapper from "./flex-wrapper";
import Layout from "./layout";
import MenuButton from "./menu-button";
import Sidebar from "./sidebar";
import SidebarNav from "./sidebar-nav";
import { useResponsiveSidebar } from "./responsive-sidebar";
import { Helmet } from "react-helmet";
import { IconMenuSelector } from "../ui/icons";
import { Link, graphql, navigate, useStaticQuery } from "gatsby";
import { MobileLogo } from "./mobile-logo";
import { Select } from "./select";
import { SelectedLanguageContext } from "./multi-code-block";
import { getVersionBasePath } from "../utils";
import { size } from "polished";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const Main = styled.main({
  flexGrow: 1,
});

const ButtonWrapper = styled.div({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  width: "100%",
  ":not(:hover)": {
    backgroundColor: theme.background,
  },
});

const StyledIcon = styled(IconMenuSelector)(size(16), {
  marginLeft: "auto",
});

const MobileNav = styled.div({
  display: "none",
  [breakpoints.md]: {
    display: "flex",
    alignItems: "center",
    marginRight: 32,
    color: theme.text1,
  },
});

const HeaderInner = styled.span({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 32,
});

const Eyebrow = styled.div({
  flexShrink: 0,
  padding: "8px 56px",
  backgroundColor: theme.background,
  color: theme.primary,
  fontSize: 14,
  position: "sticky",
  top: 0,
  a: {
    color: "inherit",
    fontWeight: 600,
  },
  [breakpoints.md]: {
    padding: "8px 24px",
  },
});

function getVersionLabel(version) {
  return `v${version}`;
}

const GA_EVENT_CATEGORY_SIDEBAR = "Sidebar";

function handleToggleAll(expanded) {
  trackCustomEvent({
    category: GA_EVENT_CATEGORY_SIDEBAR,
    action: "Toggle all",
    label: expanded ? "expand" : "collapse",
  });
}

function handleToggleCategory(label, expanded) {
  trackCustomEvent({
    category: GA_EVENT_CATEGORY_SIDEBAR,
    action: "Toggle category",
    label,
    value: Number(expanded),
  });
}

export const NavItemsContext = createContext();

export default function PageLayout(props) {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            siteName
          }
        }
      }
    `
  );

  const {
    sidebarRef,
    openSidebar,
    sidebarOpen,
    handleWrapperClick,
    handleSidebarNavLinkClick,
  } = useResponsiveSidebar();

  const buttonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectedLanguageState = useLocalStorage("docs-lang");

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const { pathname } = props.location;
  const { siteName, title } = data.site.siteMetadata;
  const {
    subtitle,
    sidebarContents,
    versions,
    versionDifference,
    versionBasePath,
    defaultVersion,
    fields,
  } = props.pageContext;
  const {
    discordUrl,
    twitterUrl,
    navConfig = {},
    footerNavConfig,
    logoLink,
    algoliaApiKey,
    algoliaIndexName,
    menuTitle,
  } = props.pluginOptions;

  const navItems = useMemo(
    () =>
      Object.entries(navConfig).map(([title, navItem]) => ({
        ...navItem,
        title,
      })),
    [navConfig]
  );

  const hasNavItems = navItems.length > 0;
  const sidebarTitle = (
    <span className="title-sidebar">{subtitle || siteName}</span>
  );

  console.log(props);

  return (
    <Layout>
      <Helmet
        titleTemplate={["%s", subtitle, title].filter(Boolean).join(" - ")}
      >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet>
      <FlexWrapper onClick={handleWrapperClick}>
        <Sidebar
          responsive
          className="sidebar"
          open={sidebarOpen}
          ref={sidebarRef}
          title={siteName}
          logoLink={logoLink}
        >
          <HeaderInner>
            {hasNavItems ? (
              <ButtonWrapper ref={buttonRef}>
                <StyledButton
                  feel="flat"
                  color={theme.primary}
                  size="small"
                  onClick={openMenu}
                  style={{ display: "flex" }}
                >
                  {sidebarTitle}
                  <StyledIcon />
                </StyledButton>
              </ButtonWrapper>
            ) : (
              sidebarTitle
            )}
            {versions && versions.length > 0 && (
              <Select
                feel="flat"
                size="small"
                value={versionDifference ? versionBasePath : "/"}
                onChange={navigate}
                style={{ marginLeft: 8 }}
                options={versions.reduce(
                  (acc, version) => ({
                    ...acc,
                    [getVersionBasePath(version)]: getVersionLabel(version),
                  }),
                  {
                    "/": defaultVersion
                      ? getVersionLabel(defaultVersion)
                      : "Latest",
                  }
                )}
              />
            )}
          </HeaderInner>
          {sidebarContents && (
            <SidebarNav
              contents={sidebarContents}
              pathname={pathname}
              onToggleAll={handleToggleAll}
              onToggleCategory={handleToggleCategory}
              onLinkClick={handleSidebarNavLinkClick}
              alwaysExpanded={props.path?.includes("/tutorial/cadence")}
            />
          )}
        </Sidebar>
        <Main>
          <Header>
            <MobileNav>
              <MenuButton onClick={openSidebar} />
              <MobileLogo width={32} fill="currentColor" />
            </MobileNav>
            {algoliaApiKey && algoliaIndexName && (
              <Search
                siteName={siteName}
                apiKey={algoliaApiKey}
                indexName={algoliaIndexName}
              />
            )}
            <HeaderNav />
          </Header>
          <SelectedLanguageContext.Provider value={selectedLanguageState}>
            <NavItemsContext.Provider value={navItems}>
              {props.children}
            </NavItemsContext.Provider>
          </SelectedLanguageContext.Provider>
        </Main>
      </FlexWrapper>
      {hasNavItems && (
        <DocsetSwitcher
          siteName={menuTitle || siteName}
          discordUrl={discordUrl}
          twitterUrl={twitterUrl}
          navItems={navItems}
          footerNavConfig={footerNavConfig}
          open={menuOpen}
          buttonRef={buttonRef}
          onClose={closeMenu}
        />
      )}
    </Layout>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  pluginOptions: PropTypes.object.isRequired,
};
