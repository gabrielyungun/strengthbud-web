import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 35px;
  padding: 0 10px;
  font-size: ${props => props.theme.h3};
  border: none;
  border-radius: 3px;
  background: ${props => props.theme[props.background]};
  color: ${props => props.theme[props.color]};
  font-weight: bold;
  cursor: pointer;
  ${props => ({ ...props.theme.unselectable })}
  &:disabled {
    background: ${props => props.theme.gray2};
    pointer-events: none;
  }
`;

function Button(props) {
  return <StyledButton {...props} />;
}

Button.defaultProps = {
  background: "primary",
  color: "white"
};

export { Button };
