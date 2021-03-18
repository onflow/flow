import styled from "@emotion/styled";

import PropTypes from "prop-types";

import React, { createContext, useMemo } from "react";

import { AnimatePresence, motion } from "framer-motion";

import useLocalStorage from "react-use/lib/useLocalStorage";

import { Helmet } from "react-helmet";

import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import { graphql, useStaticQuery } from "gatsby";

import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { startCase } from "lodash";

import { theme } from "../colors";
import "../prism.less";
import { FlowNetworkStatus } from "../components/flow-status";
import breakpoints from "../utils/breakpoints";
import { sizes } from "../utils/breakpoints";

import FlexWrapper from "./flex-wrapper";
import Header from "./header";
import HeaderNav from "./header-nav";
import Layout from "./layout";
import MenuButton from "./menu-button";
import MobileLogo from "./mobile-logo";
import { SelectedLanguageContext } from "./multi-code-block";
import { useResponsiveSidebar } from "./responsive-sidebar";
import Search from "./search";
import Sidebar from "./sidebar";
import SidebarNav from "./sidebar-nav";

const Main = styled.main({
  flexGrow: 1,
});

const MobileNav = styled.div({
  display: "none",
  [breakpoints.md]: {
    display: "flex",
    alignItems: "center",
    color: theme.text1,
  },
});

export const NavItemTitle = styled.h4({
  marginBottom: 8,
  fontWeight: 600,
  color: "inherit",
});

export const NavItemDescription = styled.p({
  marginBottom: 8,
  fontSize: 15,
  lineHeight: 1.5,
  color: theme.text3,
  transition: "color 150ms ease-in-out",
});

const BreadcrumbWrapper = styled.div({
  width: "100%",
  flexGrow: 1,
  flexBasis: "100%",
  display: "flex",
  marginLeft: "-4px",
  borderColor: theme.divider,
  ".breadcrumb__separator": {
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
  },
  ".breadcrumb__link, .breadcrumb__link__disabled": {
    fontWeight: 500,
    fontSize: "0.8rem",
    color: theme.text3,
    "&:hover": {
      color: theme.primary,
    },
  },
});

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

  const selectedLanguageState = useLocalStorage("docs-lang");

  const { pathname } = props.location;
  const { siteName, title } = data.site.siteMetadata;
  const {
    subtitle,
    sidebar,
    breadcrumb: { crumbs },
  } = props.pageContext;

  const {
    navConfig = {},
    logoLink,
    algoliaApiKey,
    algoliaIndexName,
  } = props.pluginOptions;

  const navItems = useMemo(
    () =>
      Object.entries(navConfig).map(([title, navItem]) => ({
        ...navItem,
        title,
      })),
    [navConfig]
  );

  const dacrumbs = crumbs.map((c) => {
    c.crumbLabel = startCase(c.crumbLabel);
    return c;
  });

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
          {sidebar && (
            <NavItemsContext.Provider value={navItems}>
              <SidebarNav
                contents={sidebar.contents}
                pathname={pathname}
                onToggleAll={handleToggleAll}
                onToggleCategory={handleToggleCategory}
                onLinkClick={handleSidebarNavLinkClick}
                showMainNav={sidebar.showMainNav}
                alwaysExpanded={sidebar.alwaysExpanded}
              />
            </NavItemsContext.Provider>
          )}
        </Sidebar>
        <Main>
          <Header title={title}>
            <MobileNav>
              <MobileLogo />
              <MenuButton onClick={openSidebar} />
            </MobileNav>
            <FlowNetworkStatus />
            {algoliaApiKey && algoliaIndexName && (
              <Search
                siteName={siteName}
                apiKey={algoliaApiKey}
                indexName={algoliaIndexName}
              />
            )}
            <HeaderNav />

            <AnimatePresence>
              {props.path !== "/" ? (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: "auto",
                  }}
                  exit={{ height: 0, transition: { delay: 0.2 } }}
                  style={{ width: "100%" }}
                >
                  <BreadcrumbWrapper>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Breadcrumb
                        crumbs={dacrumbs}
                        hiddenCrumbs={["/intro"]}
                        disableLinks={[
                          "/flow-port",
                          "/faq",
                          "/community-updates",
                          "/tutorial",
                          "/flow-js-sdk/packages",
                          "/flow-go-sdk/examples",
                        ]}
                      />
                    </motion.div>
                  </BreadcrumbWrapper>
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </Header>

          <SelectedLanguageContext.Provider value={selectedLanguageState}>
            <NavItemsContext.Provider value={navItems}>
              {props.children}
            </NavItemsContext.Provider>
          </SelectedLanguageContext.Provider>
        </Main>
      </FlexWrapper>
    </Layout>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  pluginOptions: PropTypes.object.isRequired,
};
