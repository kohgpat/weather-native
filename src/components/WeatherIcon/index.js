import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const ENDPOINT = "https://openweathermap.org/img/w/";

const WeatherIcon = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <styles.Icon
      source={{
        uri: `${ENDPOINT}${weather.icon}.png`
      }}
      icon={weather.icon}
    />
  );
};

WeatherIcon.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherIcon;
