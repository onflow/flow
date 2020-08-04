import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styled from '@emotion/styled';
import {FaChevronUp, FaChevronDown, FaCheck} from 'react-icons/fa';
import {theme} from '../colors';
import {size, transparentize} from 'polished';

const Container = styled.div({
  marginBottom: '1.45rem',
  borderLeft: `2px solid ${theme.primary}`
});

const InnerContainer = styled.div({
  border: `1px solid ${theme.text4}`,
  borderLeft: 0,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4
});

const iconSize = 14;
const iconMargin = 12;
const horizontalPadding = 16;
const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: `12px ${horizontalPadding}px`,
  border: 0,
  fontSize: 16,
  color: theme.primary,
  lineHeight: 'calc(5/3)',
  textAlign: 'left',
  background: 'none',
  outline: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: transparentize(0.95, 'black')
  },
  ':active': {
    backgroundColor: transparentize(0.9, 'black')
  },
  svg: {
    ...size(iconSize),
    marginRight: iconMargin
  }
});

const Content = styled.div({
  padding: `8px ${horizontalPadding + iconSize + iconMargin}px`,
  color: theme.text1,
  p: {
    fontSize: '1rem'
  }
});

const lineItemNumberSize = 24;
const lineItemNumberOffset = lineItemNumberSize / 2;
const ListItemNumber = styled.div(size(lineItemNumberSize), {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.primary}`,
  borderRadius: '50%',
  fontSize: 14,
  color: theme.primary,
  textAlign: 'center',
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  left: lineItemNumberSize / -2,
  svg: size(iconSize)
});

export const ExpansionPanelList = styled.ul({
  marginLeft: lineItemNumberOffset,
  borderLeft: `1px solid ${theme.primary}`,
  listStyle: 'none'
});

const StyledListItem = styled.li({
  marginBottom: 0,
  paddingLeft: lineItemNumberOffset + 8,
  fontSize: '1rem',
  lineHeight: 1.5,
  position: 'relative',
  ':first-of-type h4': {
    marginTop: 0
  },
  ':not(:last-child)': {
    marginBottom: 28
  },
  h4: {
    lineHeight: 1.3
  }
});

export function ExpansionPanelListItem(props) {
  return (
    <StyledListItem>
      <ListItemNumber>
        {props.number === 'check' ? <FaCheck /> : props.number}
      </ListItemNumber>
      {props.children}
    </StyledListItem>
  );
}

ExpansionPanelListItem.propTypes = {
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export function ExpansionPanel(props) {
  const [expanded, setExpanded] = useState(false);
  const Icon = expanded ? FaChevronUp : FaChevronDown;
  return (
    <Container>
      <InnerContainer>
        <StyledButton onClick={() => setExpanded(!expanded)}>
          <Icon />
          {props.title}
        </StyledButton>
        {expanded && <Content>{props.children}</Content>}
      </InnerContainer>
    </Container>
  );
}

ExpansionPanel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
