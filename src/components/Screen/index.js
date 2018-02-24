import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import * as styles from "./styles";

const Screen = ({ children, ...restProps }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <styles.Screen {...restProps}>{children}</styles.Screen>
  </TouchableWithoutFeedback>
);

export default Screen;
