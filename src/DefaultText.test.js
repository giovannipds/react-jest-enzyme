import React from "react";
import { shallow } from "enzyme";
import DefaultText from "./DefaultText";

const title = "Test DefaultText";

let wrapped = shallow(<DefaultText>{title}</DefaultText>);

describe("DefaultText", () => {
  it("should render the DefaultText Component accordingly", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("renders the DefaultTexts children component", () => {
    expect(wrapped.find("h1").text()).toEqual(title);
  });
});
