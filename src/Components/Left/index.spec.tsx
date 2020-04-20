// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Left } from "@Components";
// #endregion Local Imports

describe("Left", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Left />);
        expect(wrapper).toMatchSnapshot();
    });
});
