import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "../WeatherIcon";
import WeatherDegree from "../WeatherDegree";
import * as styles from "./styles";

const formatTemperature = temperature => {
  if (!temperature) {
    return null;
  }

  const temperatureString = temperature + "";

  if (temperatureString.split(".").length) {
    return temperatureString.split(".")[0];
  } else {
    return temperatureString;
  }
};

const City = ({ city, settings, onRemoveCity }) => {
  if (!city) {
    return null;
  }

  return (
    <styles.City>
      <styles.Header>
        <styles.Name title={city.name}>{city.name}</styles.Name>
        <styles.RemoveButton
          title="&times;"
          onPress={() => onRemoveCity(city)}
        />
      </styles.Header>

      {city.weather &&
        city.weather.length > 0 && (
          <styles.WeatherIcon>
            <WeatherIcon weather={city.weather[0]} />
          </styles.WeatherIcon>
        )}

      <styles.Stats>
        <styles.Stat major>
          {city.main && formatTemperature(city.main.temp)}{" "}
          <WeatherDegree units={settings.units} />
        </styles.Stat>

        <styles.Stat>
          {city.weather && city.weather.length > 0 && city.weather[0].main}
        </styles.Stat>
      </styles.Stats>
    </styles.City>
  );
};

City.propTypes = {
  city: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  onRemoveCity: PropTypes.func.isRequired
};

City.defaultProps = {
  cities: null,
  settings: null,
  onRemoveCity: null
};

export default City;
