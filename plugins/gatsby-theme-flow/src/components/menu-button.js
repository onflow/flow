import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {FaBars} from 'react-icons/fa';
import {size} from 'polished';

const padding = 20;
const StyledButton = styled.button({
  padding,
  marginLeft: -padding,
  color: 'inherit',
  border: 'none',
  background: 'none',
  outline: 'none',
  cursor: 'pointer'
});

const StyledIcon = styled(FaBars)(size(24), {
  display: 'block',
  fill: 'currentColor'
});

export default function MenuButton(props) {
  return (
    <StyledButton onClick={props.onClick}>
      <StyledIcon />
    </StyledButton>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
