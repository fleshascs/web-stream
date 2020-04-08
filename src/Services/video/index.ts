const options = {
    video: true,
};

export async function shareScreen(video: any) {
    video.addEventListener("canplay", function() {
        video.play();
    });

    try {
        const stream = await getDisplayMedia();
        video.srcObject = stream;
    } catch (error) {
        console.log("shareScreen error", error);
    }
}

export async function shareWebCam(video: any) {
    video.addEventListener("canplay", function() {
        video.play();
    });

    try {
        const stream = await getGetUserMedia();
        video.srcObject = stream;
    } catch (error) {
        console.log("share webcam error", error);
    }
}

const getGetUserMedia = () => {
    if (navigator.mediaDevices) {
        return navigator.mediaDevices.getUserMedia(options);
    }
    return undefined;
};

function getDisplayMedia() {
    // @ts-ignore: https://github.com/microsoft/TypeScript/issues/33232
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        // @ts-ignore: https://github.com/microsoft/TypeScript/issues/33232
        return navigator.mediaDevices.getDisplayMedia(options);

        // @ts-ignore: https://github.com/microsoft/TypeScript/issues/33232
    } else if (navigator.mediaDevices && navigator.getDisplayMedia) {
        // @ts-ignore: https://github.com/microsoft/TypeScript/issues/33232
        return navigator.getDisplayMedia(options);
    }

    return undefined;
}
