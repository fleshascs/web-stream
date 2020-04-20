import { socket as mediaSocket } from "@Services/socket/mediaSocket";

export const iceCandidateReceived = function(event, streamId) {
    console.log("this.iceCandidateReceived");
    if (event.candidate) {
        var jsCmd = {
            command: "takeCandidate",
            streamId: streamId,
            label: event.candidate.sdpMLineIndex,
            id: event.candidate.sdpMid,
            candidate: event.candidate.candidate,
        };

        console.log("sending ice candiate for stream Id " + streamId);
        console.log(JSON.stringify(event.candidate));

        mediaSocket.send(JSON.stringify(jsCmd));
    }
};
