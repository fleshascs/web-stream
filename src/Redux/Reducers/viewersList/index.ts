// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IViewersList } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IViewersList.IStateProps = {};

type IMapPayload = IViewersList.Actions.IMapPayload;

export const ViewersListReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.ViewersList.SetReducer:
            return {
                ...state,
                ...action.payload,
            };

        case ActionConsts.ViewersList.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
