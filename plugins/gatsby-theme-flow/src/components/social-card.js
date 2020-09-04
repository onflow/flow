/* global preval */
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import TextFit from "react-textfit";
import { Global, css } from "@emotion/core";
import { IconArrowRight } from "../ui/icons";
import { theme } from "../colors";
import { smallCaps } from "../utils/typography";

const { fonts, image } = preval`
  const fs = require('fs');
  const path = require('path');

  function getBase64(path) {
    const fontPath = require.resolve('typeface-overpass/' + path);
    const base64Font = fs.readFileSync(fontPath, 'base64');
    return 'data:application/x-font-woff;charset=utf-8;base64,' + base64Font;
  }

  const base64Regular = getBase64('/files/overpass-latin-300.woff2');
  const base64Semibold = getBase64('/files/overpass-latin-600.woff2');

  const cssPath = require.resolve('typeface-overpass/index.css');
  const fonts = fs
    .readFileSync(cssPath, 'utf-8')
    .replace('./files/overpass-latin-300.woff2', base64Regular);
    .replace('./files/overpass-latin-600.woff2', base64Semibold);

  const imagePath = path.resolve(__dirname, '../assets/social-bg.jpg');
  const base64Image = fs.readFileSync(imagePath, 'base64');

  module.exports = {
    fonts,
    image: 'data:image/jpeg;base64,' + base64Image
  };
`;

export default function SocialCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxSizing: "border-box",
        width: 1200,
        height: 628,
        padding: 80,
        fontFamily: "'Overpass'",
        color: "black",
        backgroundImage: `url(${image})`,
      }}
    >
      <Global
        styles={css`
          ${fonts}
          svg.arrow-icon path {
            vector-effect: none;
            stroke-width: 4px;
          }
        `}
      />
      <div
        style={{
          fontSize: 32,
          fontWeight: 600,
          marginBottom: 16,
          color: theme.primaryLight,
          ...smallCaps,
        }}
      >
        {props.subtitle}
        {props.category && (
          <Fragment>
            {" "}
            <IconArrowRight
              className="arrow-icon"
              style={{
                width: "0.5em",
                height: "0.5em",
                verticalAlign: "0.05em",
              }}
            />{" "}
            {props.category}
          </Fragment>
        )}
      </div>
      <TextFit
        min={80}
        max={120}
        style={{
          width: "100%",
          height: 250,
          marginBottom: "auto",
          lineHeight: 1.2,
          colors: theme.text1,
        }}
      >
        {props.title.replace(/\s+(\S*)$/, "\xA0$1")}
      </TextFit>
    </div>
  );
}

SocialCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  category: PropTypes.string,
};
