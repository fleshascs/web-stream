// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

export declare module IUser {
    export interface IProps extends WithTranslation { }

    export interface InitialProps {
        namespacesRequired: string[];
    }
}
