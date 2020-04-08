// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { LoginRegisterButtons } from "@Components";
// #endregion Local Imports

describe("LoginRegisterButtons", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<LoginRegisterButtons />);
        expect(wrapper).toMatchSnapshot();
    });
});
