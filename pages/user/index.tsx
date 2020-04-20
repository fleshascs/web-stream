import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { Container, Middle } from "@Styled/User";
import { socket as mediaSocket } from "@Services/socket/mediaSocket";
import { Video, Card, Left, Right, ViewersList, Shoutbox } from "@Components";
import { StreamControls } from "@Components/StreamControls";
import { shareScreen, shareWebCam } from "@Services/video";
import { ReduxNextPageContext, IUser } from "@Interfaces";

export const User: NextPage<IUser.IProps, IUser.InitialProps> = ({
    t,
    i18n,
}) => {
    const screen = React.useRef<HTMLVideoElement>(null);
    const webCam = React.useRef<HTMLVideoElement>(null);
    const [micActive, setMicActive] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [screenShareActive, setScreenShareActive] = useState(false);

    const toggleShareScreen = () => {
        console.log("screen share", screen.current);
        setScreenShareActive(true);
        shareScreen(screen.current);
    };

    const toggleShareWebCam = () => {
        console.log("web cam", webCam.current);
        setCameraActive(true);
        shareWebCam(webCam.current);
    };

    useEffect(() => {
        // var sendPing = function() {
        //     var jsCmd = {
        //         command: "ping",
        //     };
        //     mediaSocket.send(JSON.stringify(jsCmd));
        // };
        // mediaSocket.onmessage = function(event: any) {
        //     var obj = JSON.parse(event.data);
        //     console.log("onmessage", obj);
        // };
        // var jsCmd = {
        //     command: "getStreamInfo",
        //     streamId: "123",
        // };
        // mediaSocket.send(JSON.stringify(jsCmd));
        // setInterval(() => {
        //     sendPing();
        // }, 3000);
    }, []);

    return (
        <Container>
            <Left>
                <>
                    <ViewersList />
                    <StreamControls
                        onSettingsClick={() => alert("settings")}
                        micActive={micActive}
                        cameraActive={cameraActive}
                        screenShareActive={screenShareActive}
                        onMicClick={() => {
                            console.log("mic toggle");
                        }}
                        onCameraClick={toggleShareWebCam}
                        onScreenShareClick={toggleShareScreen}
                    />
                </>
            </Left>
            <Middle>
                <div>
                    <Card>
                        <Video ref={screen} />
                    </Card>
                    {/* <iframe width="560" height="315" src="http://fleshas.lt:5080/LiveApp/play.html?name=123"></iframe> */}
                </div>
                {/* <div>
                    <button onClick={toggleShareScreen}>Share Screen</button>
                    <button onClick={toggleShareWebCam}>Web cam</button>
                </div> */}
            </Middle>

            <Right>
                <Shoutbox />
            </Right>
        </Container>
    );
};

User.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IUser.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(User);
