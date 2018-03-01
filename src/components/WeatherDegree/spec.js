/*global it, expect*/
import React from "react";
import WeatherDegree from "./index";
import renderer from 'react-test-renderer';

it("renders null", () => {
  const weatherDegree = renderer.create(<WeatherDegree units="" />).toJSON();
  expect(weatherDegree).toMatchSnapshot();
});

it("renders Celcius", () => {
  const weatherDegree = renderer.create(<WeatherDegree units="celcius" />).toJSON();
  expect(weatherDegree).toMatchSnapshot();
});

it("renders Fahrenheit", () => {
  const weatherDegree = renderer.create(<WeatherDegree units="fahrenheit" />).toJSON();
  expect(weatherDegree).toMatchSnapshot();
});
