import styled from "@emotion/styled";

import React from "react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import CadenceColor from "../assets/cadence-color.svg";
import Cadence from "../assets/cadence.svg";
import CLIColor from "../assets/cli-color.svg";
import CLI from "../assets/cli.svg";
import EmulatorColor from "../assets/emulator-color.svg";
import Emulator from "../assets/emulator.svg";
import GoSDKColor from "../assets/go-color.svg";
import GoSDK from "../assets/go.svg";
import JSSDKColor from "../assets/js-color.svg";
import JSSDK from "../assets/js.svg";
import PlaygroundColor from "../assets/playground-color.svg";
import Playground from "../assets/playground.svg";
import Port from "../assets/port.svg";
import PortColor from "../assets/port.svg";
import Search from "../assets/search.svg";
import VSCodeColor from "../assets/vscode-color.svg";
import VSCode from "../assets/vscode.svg";
import TestingColor from "../assets/testing-color.svg";
import KittyItems from "../assets/kitty-items.svg";
import KittyItemsColor from "../assets/kitty-items.svg";

export {
  FaArrowDown as IconArrowDown,
  FaArrowLeft as IconArrowLeft,
  FaArrowRight as IconArrowRight,
  FaBars as IconMenu,
  FaCaretSquareDown as IconMenuSelector,
  FaCheck as IconCheck,
  FaChevronDown as IconChevronDown,
  FaChevronUp as IconChevronUp,
  FaDiscord as IconDiscord,
  FaDiscourse as IconDiscourse,
  FaExclamationTriangle as IconWarningSolid,
  FaExternalLinkAlt as IconExternalLink,
  FaFacebook as IconFlow, // TODO: replace with real Flow logo,
  FaGithub as IconGithub,
  FaInfoCircle as IconInfoSolid,
  FaTwitter as IconTwitter,
  FaUmbrellaBeach as IconPlayground
} from "react-icons/fa";

export {
  GrStatusGood,
  GrStatusUnknown,
  GrStatusCritical
} from "react-icons/gr";

const SVGIconContainer = styled.img({
  height: "1em"
});

function wrapSVGIcon(icon) {
  return () => <SVGIconContainer src={icon} />;
}

export const IconSearch = wrapSVGIcon(Search);

const StackedIconContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "1rem"
});

export function IconExpandList() {
  return (
    <StackedIconContainer>
      <FaChevronUp />
      <FaChevronDown />
    </StackedIconContainer>
  );
}

export function IconCollapseList() {
  return (
    <StackedIconContainer>
      <FaChevronDown />
      <FaChevronUp />
    </StackedIconContainer>
  );
}

const projectIcons = {
  cadence: {
    default: Cadence,
    color: CadenceColor
  },
  emulator: {
    default: Emulator,
    color: EmulatorColor
  },
  cli: {
    default: CLI,
    color: CLIColor
  },
  playground: {
    default: Playground,
    color: PlaygroundColor
  },
  "go-sdk": {
    default: GoSDK,
    color: GoSDKColor
  },
  "js-sdk": {
    default: JSSDK,
    color: JSSDKColor
  },
  "js-testing": {
    default: TestingColor,
    color: TestingColor
  },
  vscode: {
    default: VSCode,
    color: VSCodeColor
  },
  port: {
    default: Port,
    color: PortColor
  },
  "kitty-items": {
    default: KittyItems,
    color: KittyItemsColor
  }
};

export function getProjectIcon(name) {
  return projectIcons[name];
}
