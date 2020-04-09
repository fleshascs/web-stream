// #region Global Imports
import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";
import { Header, Navbar, LoginRegisterButtons, UserInfo } from "@Components";
import { IdentityContext } from "@Services/session/identity";

import { Main, Container, CollumnsWrapper } from "@Styled/Layout";
import "@Static/css/global.scss";
import "@Static/css/reset.scss";
// #endregion Local Imports

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};
        const isServer = ctx.req;
        if (isServer) {
            // @ts-ignore:
            pageProps.user = ctx.res.user;
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <IdentityContext.Provider value={pageProps.user}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Container>
                            <Main>
                                <Header>
                                    <div style={{ display: "flex" }}>
                                        <Navbar />
                                        {pageProps.user ? (
                                            <UserInfo />
                                        ) : (
                                            <LoginRegisterButtons />
                                        )}
                                    </div>
                                </Header>
                                <CollumnsWrapper>
                                    <Component {...pageProps} />
                                </CollumnsWrapper>
                            </Main>
                        </Container>
                    </ThemeProvider>
                </Provider>
            </IdentityContext.Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
