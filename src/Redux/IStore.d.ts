// #region Interface Imports
import { IHomePage, IViewersList } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    viewersList: IViewersList.IStateProps;
    home: IHomePage.IStateProps;
}
