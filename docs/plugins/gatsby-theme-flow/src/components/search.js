/* global docsearch */
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import useKey from "react-use/lib/useKey";
import { HEADER_HEIGHT } from "../utils";
import { TextField } from "../ui/TextField";
import { theme } from "../colors";
import breakpoints from "../utils/breakpoints";
import { smallCaps } from "../utils/typography";
import { css } from "@emotion/core";
import { position, size, transparentize } from "polished";
import { IconSearch } from "../ui/icons";
import { useMixpanel } from "gatsby-plugin-mixpanel";

const borderRadius = 5;
const border = `1px solid ${theme.dividerLight}`;
const verticalAlign = css({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
});

const Hotkey = styled.div(verticalAlign, size(24), {
  border,
  borderColor: theme.text4,
  color: theme.text3,
  borderRadius,
  textAlign: "center",
  lineHeight: 1.4,
  fontSize: "0.9em",
  right: 10,
  pointerEvents: "none",
  fontWeight: 600,
  boxShadow: `0 1px 1px 0 #00000021`,
});

const boxShadowColor = transparentize(0.9, "black");
export const boxShadow = `${boxShadowColor} 0 2px 12px`;
const Container = styled.div({
  flexGrow: 1,
  marginRight: 40,
  maxWidth: 930,
  color: theme.text2,
  position: "relative",
  zIndex: 1,
  [breakpoints.md]: {
    marginRight: 0,
  },
  ".algolia-autocomplete": {
    width: "100%",
    ".ds-dropdown-menu": {
      width: "100%",
      maxWidth: "100%",
      minWidth: "auto",
      marginTop: 14,
      borderRadius,
      boxShadow,
      "&::before": {
        display: "none",
      },
      "[class^=ds-dataset-]": {
        maxHeight: `calc(100vh - ${HEADER_HEIGHT}px - 32px)`,
        padding: 0,
        border,
        borderRadius: "inherit",
      },
      ".ds-suggestions": {
        marginTop: 0,
      },
      ".ds-suggestion": {
        padding: "20px 32px",
        borderBottom: `1px solid ${theme.divider}`,
        "&.ds-cursor": {
          backgroundColor: transparentize(0.5, theme.divider),
        },
      },
    },
    ".algolia-docsearch-suggestion": {
      padding: 0,
      color: "inherit",
      background: "none",
      textDecoration: "none",
      [["&--wrapper", "&--subcategory-column", "&--content"]]: {
        width: "auto",
        float: "none",
      },
      "&--wrapper": {
        paddingTop: 0,
      },
      "&--category-header": {
        marginTop: 0,
        marginBottom: 4,
        borderBottom: 0,
        fontSize: 14,
        color: "inherit",
        ...smallCaps,
      },
      [["&--subcategory-column", "&--content"]]: {
        padding: 0,
        "&::before": {
          display: "none",
        },
      },
      "&--subcategory-column": {
        marginBottom: 4,
        fontSize: 22,
        color: theme.text1,
        textAlign: "initial",
      },
      "&--content": {
        background: "none !important",
      },
      "&--title": {
        marginBottom: 0,
        fontSize: 18,
        fontWeight: "normal",
        color: "inherit",
      },
      "&--highlight": {
        boxShadow: "none !important",
        color: `${theme.primary} !important`,
        background: "none !important",
      },
      "&--no-results": {
        padding: 32,
      },
    },
    ".algolia-docsearch-footer": {
      margin: 12,
    },
  },
});

const Overlay = styled.div(
  position("fixed", 0),
  (props) =>
    !props.visible && {
      opacity: 0,
      visibility: "hidden",
    },
  {
    backgroundColor: transparentize(0.5, theme.text2),
    transitionProperty: "opacity, visibility",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    zIndex: 1,
  }
);

export default function Search(props) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const mixpanel = useMixpanel();
  useEffect(() => {
    if (typeof docsearch !== "undefined") {
      docsearch({
        apiKey: props.apiKey,
        indexName: props.indexName,
        inputSelector: "#input",
        // debug: true, // keeps the results list open
        algoliaOptions: {
          hitsPerPage: 10,
          distinct: 1,
        },
        handleSelected: function(
          input,
          _event,
          suggestion,
          _datasetNumber,
          _context
        ) {
          mixpanel.track("Searched", { text: input, selected: suggestion });
          input.setVal("");
          window.location.href = suggestion.url;
        },
        transformData: function(hits) {
          hits.forEach((hit) => {
            // replace origin so search results point to local (or vercel) deployment
            // warning: any new or edited pages won't be correctly indexed
            var url = new URL(hit.url);
            url.host = window.location.host;
            url.protocol = window.location.protocol;
            hit.url = url.href;
          });
        },
      });
    }
  }, [props.apiKey, props.indexName]);

  // focus the input when the slash key is pressed
  useKey(
    (event) =>
      event.keyCode === 191 && event.target.tagName.toUpperCase() !== "INPUT",
    (event) => {
      event.preventDefault();
      inputRef.current.focus();
    }
  );

  function onChange(event) {
    setValue(event.target.value);
  }

  function onFocus() {
    setFocused(true);
  }
  function onBlur() {
    setFocused(false);
  }

  const resultsShown = focused && value.trim();
  return (
    <Fragment>
      <Overlay visible={resultsShown} />
      <Container>
        <TextField
          type="search"
          size="large"
          inputAs={
            <input
              ref={inputRef}
              id="input"
              style={{
                fontSize: 16,
                boxShadow: resultsShown ? boxShadow : "none",
              }}
            />
          }
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          icon={<IconSearch />}
          placeholder={`Search documentation...`}
        />
        {!focused && !value && <Hotkey>/</Hotkey>}
      </Container>
    </Fragment>
  );
}

Search.propTypes = {
  siteName: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  indexName: PropTypes.string.isRequired,
};
