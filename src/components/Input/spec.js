/*global it, expect*/
import React from "react";
import Input from "./index";
import { shallow } from "enzyme";

it("renders", () => {
  const input = shallow(<Input />);
  expect(input).toMatchSnapshot();
});
