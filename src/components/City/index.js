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

const formatInterval = interval => {
  if (!interval) {
    return null;
  }

  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;

  return interval / millisecondsInSecond / secondsInMinute;
};

const City = ({ city, settings, onRemoveCity }) => {
  if (!city) {
    return null;
  }

  return (
    <styles.City>
      <styles.Header>
        <styles.Name title={city.name}>{city.name}</styles.Name>
        <styles.RemoveButton onPress={() => onRemoveCity(city)}>
          <styles.RemoveButtonText>&times;</styles.RemoveButtonText>
        </styles.RemoveButton>
      </styles.Header>

      {city.params && (
        <styles.SubHeader>
          <styles.SubHeaderText>
            Update every {formatInterval(city.params.interval)} minutes
          </styles.SubHeaderText>
        </styles.SubHeader>
      )}

      {city.weather &&
        city.weather.length > 0 && (
          <styles.WeatherMain>
            <styles.Stat major>
              {city.weather && city.weather.length > 0 && city.weather[0].main}
            </styles.Stat>
          </styles.WeatherMain>
        )}

      <styles.Stats>
        <styles.Stat major>
          {city.main && formatTemperature(city.main.temp)}{" "}
          <WeatherDegree units={settings.units} />
        </styles.Stat>

        {city.weather &&
          city.weather.length > 0 && (
            <styles.Stat>
              <WeatherIcon weather={city.weather[0]} />
            </styles.Stat>
          )}
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
