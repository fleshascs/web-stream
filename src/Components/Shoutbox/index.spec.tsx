// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { Shoutbox } from "@Components";
// #endregion Local Imports

describe("Shoutbox", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Shoutbox />);
        expect(wrapper).toMatchSnapshot();
    });
});
