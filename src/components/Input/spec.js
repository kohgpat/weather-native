/*global it, expect*/
import React from "react";
import Input from "./index";
import renderer from 'react-test-renderer';

it("renders", () => {
  const input = renderer.create(<Input />).toJSON();
  expect(input).toMatchSnapshot();
});
