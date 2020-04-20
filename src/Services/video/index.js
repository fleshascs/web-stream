import { PeerConnection, addLocalStream } from "@Services/video/peerConnection";
import { socket as mediaSocket } from "@Services/socket/mediaSocket";
import { iceCandidateReceived } from "./iceCandidateReceived";
import { gotDescription } from "./gotDescription";
import { takeCandidate } from "./takeCandidate";
import { takeConfiguration } from "./takeConfiguration";
import { getPeerConnection } from "./getPeerConnection";
import { startPublishing } from "./startPublishing";
import { publish } from "./publish";

const options = {
    video: true,
};

export let localStream;

export async function shareScreen(video) {
    video.addEventListener("canplay", function() {
        video.play();
    });

    try {
        const streamId = "123";
        const stream = await getDisplayMedia();
        localStream = stream;
        video.srcObject = stream;
        var audioTrack = stream.getAudioTracks();
        if (audioTrack.length > 0) {
            stream.removeTrack(audioTrack[0]);
        }
        publish(streamId, stream);

        mediaSocket.onmessage = function(event) {
            var obj = JSON.parse(event.data);
            console.log("onmessage", obj);

            if (obj.command === "start") {
                startPublishing(obj.streamId);
            } else if (obj.command == "takeCandidate") {
                takeCandidate(obj.streamId, obj.label, obj.candidate);
            } else if (obj.command === "takeConfiguration") {
                takeConfiguration(obj.streamId, obj.sdp, obj.type);
            }
        };
    } catch (error) {
        console.log("shareScreen error", error);
    }
}

export async function shareWebCam(video) {
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
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        return navigator.mediaDevices.getDisplayMedia(options);
    } else if (navigator.mediaDevices && navigator.getDisplayMedia) {
        // @ts-ignore: https://github.com/microsoft/TypeScript/issues/33232
        return navigator.getDisplayMedia(options);
    }

    return undefined;
}
