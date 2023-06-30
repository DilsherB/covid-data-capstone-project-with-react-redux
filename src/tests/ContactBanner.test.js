import renderer from "react-test-renderer";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import Photo from "../assets/My Profile Photo.jpeg";
import ContactBanner from "../components/ContactBanner";

jest.mock("react-icons/fa");
jest.mock("../assets/My Profile Photo.jpeg");

const renderTree = (tree) => renderer.create(tree);
describe("<ContactBanner>", () => {
  it("should render component", () => {
    expect(renderTree(<ContactBanner />).toJSON()).toMatchSnapshot();
  });
});
