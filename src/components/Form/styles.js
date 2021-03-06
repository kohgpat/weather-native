import React from "react";
import styled from "styled-components/native";
import ButtonComponent from "../Button";
import InputComponent from "../Input";

export const Form = styled.View`
  padding: 20px;
  margin: 0 20px 20px;
  background-color: #fff;
  border-radius: 4px;
  align-self: stretch;

  ${props =>
    props.inAddCityScreen &&
    `
    margin-top: 40px;
  `};
`;

export const Name = styled.Text`
  margin: 0;
  font-size: 16px;
  font-family: Roboto-Condensed-Bold;
`;

export const Block = styled.View`
  margin-bottom: 10px;

  ${props =>
    props.last &&
    `
    margin-bottom: 0;
  `};
`;

export const Header = styled.View`
  margin-bottom: 5px;
`;

export const Label = styled.Text`
  font-family: Roboto-Condensed-Regular;
  font-size: 16px;
`;

export const HelpText = styled.Text`
  color: #7f7f7f;
  font-family: Roboto-Condensed-Regular;
  font-size: 16px;
  margin-left: auto;
`;

export const Input = styled(props => <InputComponent {...props} />)``;

export const SubmitButton = styled(props => <ButtonComponent {...props} />)``;
