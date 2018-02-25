import React from "react";
import styled from "styled-components/native";
import ButtonComponent from "../../components/Button";

export const HeaderRight = styled(props => <ButtonComponent {...props} />)`
  min-height: 40px;
  min-width: 40px;
  max-height: 40px;
  max-width: 40px;
`;
