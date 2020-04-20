// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { StreamControls } from "@Components";
// #endregion Local Imports

describe("StreamControls", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<StreamControls />);
        expect(wrapper).toMatchSnapshot();
    });
});
