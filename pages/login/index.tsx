// #region Global Imports
import React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container, Box, GoogleLink, Icon, Title } from "@Styled/Login";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, ILogin } from "@Interfaces";
// #endregion Interface Imports

export const Login: NextPage<ILogin.IProps, ILogin.InitialProps> = ({
    t,
    i18n,
}) => {
    return (
        <Container>
            <Box>
                <Title>Login or Register</Title>
                <GoogleLink href="/auth/google">
                    <Icon src="/static/images/google-brands.svg" /> Login with
                    Google+
                </GoogleLink>
            </Box>
        </Container>
    );
};

Login.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ILogin.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Login);
