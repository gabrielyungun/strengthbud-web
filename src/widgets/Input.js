import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 35px;
  padding: 0 10px;
  font-size: ${props => props.theme.h3};
  background: ${props => props.theme.gray3};
  border: none;
  border-radius: 3px;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export { Input };
