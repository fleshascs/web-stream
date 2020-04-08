// #region Local Imports
import { IAction, IViewersList } from "@Interfaces";
import { ActionConsts } from "@Definitions";
import { ViewersListReducer } from ".";
// #endregion Local Imports

describe("ViewersList reducer", () => {
    it("should return the initial state", () => {
        expect(ViewersListReducer(
            undefined,
            {} as IAction<IViewersList.IStateProps>)
        ).toEqual({});
    });
});
