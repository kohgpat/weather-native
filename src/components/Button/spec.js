/*global it, expect*/
import React from "react";
import Button from "./index";
import renderer from 'react-test-renderer';

it("renders", () => {
  const button = renderer.create(<Button>Button</Button>).toJSON();
  expect(button).toMatchSnapshot();
});
