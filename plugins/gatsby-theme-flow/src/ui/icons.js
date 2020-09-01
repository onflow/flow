import React from 'react';
import styled from '@emotion/styled';
import {
  FaChevronUp,
  FaChevronDown
} from 'react-icons/fa';

import Search from '../assets/search.svg';

import Cadence from '../assets/cadence.svg';
import CadenceColor from '../assets/cadence-color.svg';
import Emulator from '../assets/emulator.svg';
import EmulatorColor from '../assets/emulator-color.svg';
import CLI from '../assets/cli.svg';
import CLIColor from '../assets/cli-color.svg';
import Playground from '../assets/playground.svg';
import PlaygroundColor from '../assets/playground-color.svg';
import GoSDK from '../assets/go.svg';
import GoSDKColor from '../assets/go-color.svg';
import JSSDK from '../assets/js.svg';
import JSSDKColor from '../assets/js-color.svg';
import VSCode from '../assets/vscode.svg';
import VSCodeColor from '../assets/vscode-color.svg';

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
  FaExclamationTriangle as IconWarningSolid,
  FaExternalLinkAlt as IconExternalLink,
  FaFacebook as IconFlow, // TODO: replace with real Flow logo,
  FaGithub as IconGithub,
  FaInfoCircle as IconInfoSolid,
  FaTwitter as IconTwitter,
  FaUmbrellaBeach as IconPlayground,
} from 'react-icons/fa';

const SVGIconContainer = styled.img({
  height: '1em',
});

function wrapSVGIcon(icon) {
  return () => (
    <SVGIconContainer src={icon} />
  )
};

export const IconSearch = wrapSVGIcon(Search);

const StackedIconContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: "1rem",
});

export function IconExpandList() {
  return (
    <StackedIconContainer>
      <FaChevronUp />
      <FaChevronDown />
    </StackedIconContainer>
  )
};

export function IconCollapseList() {
  return (
    <StackedIconContainer>
      <FaChevronDown />
      <FaChevronUp />
    </StackedIconContainer>
  )
};

const projectIcons = {
  'cadence': {
    default: Cadence,
    color: CadenceColor,
  },
  'emulator': {
    default: Emulator,
    color: EmulatorColor,
  },
  'cli': {
    default: CLI,
    color: CLIColor,
  },
  'playground': {
    default: Playground,
    color: PlaygroundColor,
  },
  'go-sdk': {
    default: GoSDK,
    color: GoSDKColor,
  },
  'js-sdk': {
    default: JSSDK,
    color: JSSDKColor,
  },
  'vscode': {
    default: VSCode,
    color: VSCodeColor,
  },
};

export function getProjectIcon(name) {
  return projectIcons[name];
};
