import renderer from "react-test-renderer";
import React from "react";
import ContactBanner from "../components/ContactBanner";

jest.mock("react-icons/fa");
jest.mock("../assets/My Profile Photo.jpeg");

const renderTree = (tree) => renderer.create(tree);
describe("<ContactBanner>", () => {
  it("should render component", () => {
    expect(renderTree(<ContactBanner />).toJSON()).toMatchSnapshot();
  });
});
