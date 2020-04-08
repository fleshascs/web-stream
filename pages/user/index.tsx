// #region Global Imports
import React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container, Middle } from "@Styled/User";
// #endregion Local Imports

// #region Interface Imports
import { Video, Card, Right, ViewersList } from "@Components";
import { shareScreen, shareWebCam } from "@Services/video";
import { ReduxNextPageContext, IUser } from "@Interfaces";
// #endregion Interface Imports

export const User: NextPage<IUser.IProps, IUser.InitialProps> = ({
    t,
    i18n,
}) => {
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
            <Right>
                <ViewersList />
            </Right>
            <Middle>
                <div>
                    <Card>
                        <Video ref={screen} />
                    </Card>
                </div>
                <div>
                    <button onClick={toggleShareScreen}>Share Screen</button>
                    <button onClick={toggleShareWebCam}>Web cam</button>
                </div>
            </Middle>

            <Right />
        </Container>
    );
};

User.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IUser.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(User);
