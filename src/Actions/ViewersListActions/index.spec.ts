// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { ViewersListActions } from "./";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("ViewersList action tests", () => {
    test("Map test", () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: { version: 2 },
                type: ActionConsts.ViewersList.SetReducer
            },
        ];

        store.dispatch(ViewersListActions.Map({ version: 2 }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            viewersList: {
                version: 1
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.ViewersList.ResetReducer
            },
        ];

        store.dispatch(ViewersListActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
