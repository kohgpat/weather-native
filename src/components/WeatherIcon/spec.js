/*global it, expect*/
import React from "react";
import WeatherIcon from "./index";
import { shallow } from "enzyme";

const weather = {
  icon: "10d"
};

it("renders", () => {
  const weatherIcon = shallow(<WeatherIcon weather={weather} />);
  expect(weatherIcon).toMatchSnapshot();
});
