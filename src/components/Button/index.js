import React from "react";
import * as styles from "./styles";

const Button = ({ title, ...restProps }) => (
  <styles.Button {...restProps}>
    <styles.ButtonTitle>{title}</styles.ButtonTitle>
  </styles.Button>
);

export default Button;
