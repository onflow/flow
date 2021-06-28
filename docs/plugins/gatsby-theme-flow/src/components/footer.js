import styled from "@emotion/styled";

import React from "react";

import { theme } from "../colors";
import breakpoints from "../utils/breakpoints";
import { smallCaps } from "../utils/typography";

const FooterContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 0.75fr 1fr;
`;

const NewsLetter = styled.div`
  background: lightpink;
  display: flex;
  width: 100%;
  flex-direction: column;
  form {
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 80px;
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
`;

const LinkColumn = styled.div`
  background: lightblue;
  display: flex;
  width: 100%;
  h3 {
    color: ${theme.text3};
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export default () => (
  <FooterContainer>
    <NewsLetter>
      <h2>Sign Up for our Newsletter</h2>
      <p>
        Sign up to receive a monthly email on the latest Flow updates, features
        and news!
      </p>
      <form>
        <input type="text"></input>
        <button type="button">Sign Up</button>
      </form>
    </NewsLetter>
    <Links>
      <LinkColumn>
        <h3>Community</h3>
      </LinkColumn>
      <LinkColumn>
        <h3>Company</h3>
      </LinkColumn>
    </Links>
  </FooterContainer>
);
