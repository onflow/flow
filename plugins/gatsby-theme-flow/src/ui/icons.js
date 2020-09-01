import React from "react";
import styled from "@emotion/styled";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import Search from "../assets/search.svg";
import Run from "../assets/run.svg";

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
} from "react-icons/fa";

const IconContainer = styled.img({
  height: "1em",
});

export function IconSearch() {
  return <IconContainer src={Search} />;
}

export function IconRun() {
  return <IconContainer src={Run} />;
}

const StackedIconContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "1rem",
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
