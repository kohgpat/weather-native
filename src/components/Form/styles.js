import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import ButtonComponent from "../Button";
import InputComponent from "../Input";

export const Form = styled.View`
  margin-top: 50px;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;

  ${props =>
    props.inSidebar &&
    `
    margin-top: 0;
    width: 100%;
    height: 100%;
  `};
`;

export const Name = styled.Text`
  margin: 0;
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
  margin-bottom: 5px;
`;

export const HelpText = styled.Text`
  color: #7f7f7f;
  margin-left: auto;
`;

export const Input = styled(props => <InputComponent {...props} />)``;

export const SubmitButton = styled(props => <ButtonComponent {...props} />)``;
