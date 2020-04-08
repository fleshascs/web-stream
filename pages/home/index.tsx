// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    Container,
    Top,
    TopText,
    Middle,
    MiddleLeft,
    MiddleLeftButtons,
    MiddleRight,
    Apod,
    ApodButton,
} from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import {
    Heading,
    LocaleButton,
    Video,
    Card,
    VideoCard,
    Right,
    ViewersList,
} from "@Components";
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
import { shareScreen, shareWebCam } from "@Services/video";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    const screen = React.useRef<HTMLVideoElement>(null);
    const webCam = React.useRef<HTMLVideoElement>(null);
    const toggleShareScreen = () => {
        console.log("screen share", screen.current);
        shareScreen(screen.current);
    };

    const toggleShareWebCam = () => {
        console.log("web cam", webCam.current);
        shareWebCam(webCam.current);
    };

    return (
        <Container>
            <Middle>Front page</Middle>

            {/* <VideoCard>
                <div>
                    <Video ref={webCam} />
                </div>
                <div>test</div>
            </VideoCard> */}

            {/* <Top>
                <img src="/static/images/pankod-logo.png" alt="Pankod Logo" />
            </Top>
            <Middle>
                <MiddleLeft>
                    <MiddleLeftButtons>
                        {renderLocaleButtons(i18n.language)}
                    </MiddleLeftButtons>
                </MiddleLeft>
                <MiddleRight>
                    <TopText>{t("common:Hello")}</TopText>
                    <Heading text={t("common:World")} />
                    <Apod>
                        <ApodButton
                            onClick={() => {
                                dispatch(
                                    HomeActions.GetApod({
                                        params: { hd: false },
                                    })
                                );
                            }}
                        >
                            Discover Space
                        </ApodButton>
                        <img
                            src={home.image.url}
                            height="300"
                            width="150"
                            alt="Discover Space"
                        />
                    </Apod>
                </MiddleRight>
            </Middle> */}
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
