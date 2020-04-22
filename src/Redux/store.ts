// #region Global Imports
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import Reducers from "./Reducers";
// #endregion Local Imports

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== "production") {
        const {
            composeWithDevTools,
        } = require("redux-devtools-extension/developmentOnly");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = (initialState: {}) => {
    return createStore(
        Reducers,
        initialState,
        bindMiddleware([thunkMiddleware])
    );
};
