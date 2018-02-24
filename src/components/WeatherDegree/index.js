import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const WeatherDegree = ({ units }) => {
  if (!units) {
    return null;
  }

  if (units === "celcius") {
    return <styles.Degree>°C</styles.Degree>;
  }

  if (units === "fahrenheit") {
    return <styles.Degree>°F</styles.Degree>;
  }

  return null;
};

WeatherDegree.defaultProps = {
  units: null
};

WeatherDegree.propTypes = {
  units: PropTypes.string.isRequired
};

export default WeatherDegree;
