// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { useIdentity } from "@Services/session/identity";
import { Container, Username, LogoutLink } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IUserInfo } from "./UserInfo";
// #endregion Interface Imports

export const UserInfo: React.FunctionComponent<IUserInfo.IProps> = (
    props: IUserInfo.IProps
) => {
    const identity = useIdentity();
    return (
        <Container>
            <Username>{identity.displayName}</Username>
            <LogoutLink href="/logout">logout</LogoutLink>
        </Container>
    );
};
