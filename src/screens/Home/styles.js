import React from "react";
import styled from "styled-components/native";
import ButtonComponent from "../../components/Button";

const Settings = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const SettingsControl = styled.TouchableOpacity`
  min-height: 40px;
  min-width: 40px;
  max-height: 40px;
  max-width: 40px;
  background-color: #4faddf;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isActive &&
    `
    background-color: #1c92d2;
  `};
`;

const SettingsControlTitle = styled.Text`
  color: #fff;
  font-family: Roboto-Condensed-Bold;
`;

export const HeaderLeft = ({ settings, toggleSettingsUnits }) => {
  if (!settings) {
    return null;
  }

  return (
    <Settings>
      <SettingsControl
        isActive={settings.units === "celcius"}
        disabled={settings.units === "celcius"}
        onPress={() => toggleSettingsUnits("celcius")}
      >
        <SettingsControlTitle>C</SettingsControlTitle>
      </SettingsControl>

      <SettingsControl
        isActive={settings.units === "fahrenheit"}
        disabled={settings.units === "fahrenheit"}
        onPress={() => toggleSettingsUnits("fahrenheit")}
      >
        <SettingsControlTitle>F</SettingsControlTitle>
      </SettingsControl>
    </Settings>
  );
};

export const HeaderRight = styled(props => <ButtonComponent {...props} />)`
  min-height: 40px;
  min-width: 40px;
  max-height: 40px;
  max-width: 40px;
`;
