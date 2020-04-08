// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { ViewersListReducer } from "./viewersList";
// #endregion Local Imports

export default combineReducers({
    viewersList: ViewersListReducer,
    home: HomeReducer,
});
