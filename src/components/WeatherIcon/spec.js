/*global it, expect*/
import React from "react";
import WeatherIcon from "./index";
import renderer from 'react-test-renderer';

const weather = {
  icon: "10d"
};

it("renders", () => {
  const weatherIcon = renderer.create(<WeatherIcon weather={weather} />).toJSON();
  expect(weatherIcon).toMatchSnapshot();
});
