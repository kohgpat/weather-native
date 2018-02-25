import React from "react";
import styled from "styled-components/native";
import ButtonComponent from "../Button";
import InputComponent from "../Input";

export const Form = styled.View`
  margin: 20px;
  padding: 20px;
  width: 100%;
  max-width: 320px;
  background-color: #fff;
  border-radius: 4px;

  ${props =>
    props.inAddCityScreen &&
    `
    margin-top: 40px;
    width: 100%;
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

export const Label = styled.Text`
  flex: 1;
  flex-direction: row;
  font-family: Roboto-Condensed-Regular;
  font-size: 16px;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const HelpText = styled.Text`
  color: #7f7f7f;
`;

export const Input = styled(props => <InputComponent {...props} />)``;

export const SubmitButton = styled(props => <ButtonComponent {...props} />)``;
