import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { LinearGradient } from "expo";
import * as styles from "./styles";

const Screen = ({ children, ...restProps }) => (
  <LinearGradient
    colors={["#4FADDF", "#5B86E5"]}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <styles.Screen {...restProps}>{children}</styles.Screen>
    </TouchableWithoutFeedback>
  </LinearGradient>
);

export default Screen;
