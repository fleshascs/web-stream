// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const ViewersListActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.ViewersList.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.ViewersList.ResetReducer
    })
};
