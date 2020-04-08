// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { ViewersList } from "@Components";
// #endregion Local Imports

describe("ViewersList", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<ViewersList />);
        expect(wrapper).toMatchSnapshot();
    });
});
