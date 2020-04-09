// #region Global Imports
import React from "react";
import Link from "next/link";
// #endregion Global Imports

// #region Local Imports
import { Container, LoginButton } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ILoginRegisterButtons } from "./LoginRegisterButtons";
// #endregion Interface Imports

export const LoginRegisterButtons: React.FunctionComponent<
    ILoginRegisterButtons.IProps
> = (props: ILoginRegisterButtons.IProps) => {
    return (
        <Container>
            <Link href="/login">
                <LoginButton>Login or Register</LoginButton>
            </Link>
        </Container>
    );
};
