export declare module IStreamControls {
    export interface IProps {
        micActive: boolean;
        cameraActive: boolean;
        screenShareActive: boolean;
        onSettingsClick: () => void;
        onMicClick: () => void;
        onCameraClick: () => void;
        onScreenShareClick: () => void;
    }

    export interface IState {}
}
