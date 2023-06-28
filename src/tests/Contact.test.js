// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import React from "react";
import Contact from "../components/Contact";

const renderTree = (tree) => renderer.create(tree);
describe("<Contact>", () => {
  it("should render component", () => {
    expect(renderTree(<Contact />).toJSON()).toMatchSnapshot();
  });
});
