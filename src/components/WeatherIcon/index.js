import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const WeatherIcon = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return <styles.Icon icon={weather.icon} />;
};

WeatherIcon.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherIcon;
