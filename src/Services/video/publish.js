import { socket as mediaSocket } from "@Services/socket/mediaSocket";

export const publish = function(streamId, localStream) {
    console.log("this.publish");
    var jsCmd = {
        command: "publish",
        streamId: streamId,
        token: null,
        video: localStream.getVideoTracks().length > 0 ? true : false,
        audio: localStream.getAudioTracks().length > 0 ? true : false,
    };

    mediaSocket.send(JSON.stringify(jsCmd));
};
