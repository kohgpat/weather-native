/*global it, expect*/
import React from "react";
import WeatherDegree from "./index";
import { shallow, mount } from "enzyme";

it("renders null", () => {
  const weatherDegree = shallow(<WeatherDegree units="" />);
  expect(weatherDegree).toMatchSnapshot();
});

it("renders Celcius", () => {
  const weatherDegree = shallow(<WeatherDegree units="celcius" />);
  expect(weatherDegree).toMatchSnapshot();
});

it("renders Fahrenheit", () => {
  const weatherDegree = shallow(<WeatherDegree units="fahrenheit" />);
  expect(weatherDegree).toMatchSnapshot();
});

it("returns null", () => {
  const weatherDegree = shallow(<WeatherDegree units="" />);
  expect(weatherDegree.type()).toEqual(null);
});

it("renders Celcius symbol", () => {
  const weatherDegree = mount(<WeatherDegree units="celcius" />);
  expect(weatherDegree.text()).toContain("C");
});

it("renders Fahrenheit symbol", () => {
  const weatherDegree = mount(<WeatherDegree units="fahrenheit" />);
  expect(weatherDegree.text()).toContain("F");
});
