// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Title, Buttons, Button } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IStreamControls } from "./StreamControls";
// #endregion Interface Imports

export const StreamControls: React.FunctionComponent<IStreamControls.IProps> = (
    props: IStreamControls.IProps
) => {
    const {
        onSettingsClick,
        onMicClick,
        onCameraClick,
        onScreenShareClick,
        micActive,
        cameraActive,
        screenShareActive,
    } = props;
    return (
        <Container>
            <Title>Controls</Title>
            <Buttons>
                <Button className="material-icons" onClick={onSettingsClick}>
                    settings
                </Button>
                <Button
                    className="material-icons"
                    active={micActive}
                    onClick={onMicClick}
                >
                    mic
                </Button>
                <Button
                    className="material-icons"
                    active={cameraActive}
                    onClick={onCameraClick}
                >
                    videocam
                </Button>
                <Button
                    className="material-icons"
                    active={screenShareActive}
                    onClick={onScreenShareClick}
                >
                    video_label
                </Button>
            </Buttons>
        </Container>
    );
};
