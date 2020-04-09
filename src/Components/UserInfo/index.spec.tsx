// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { UserInfo } from "@Components";
// #endregion Local Imports

describe("UserInfo", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<UserInfo />);
        expect(wrapper).toMatchSnapshot();
    });
});
