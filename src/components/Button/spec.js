/*global it, expect*/
import React from "react";
import Button from "./index";
import { shallow } from "enzyme";

it("renders", () => {
  const button = shallow(<Button>Button</Button>);
  expect(button).toMatchSnapshot();
});
