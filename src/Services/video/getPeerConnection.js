import { PeerConnection, addLocalStream } from "@Services/video/peerConnection";
import { iceCandidateReceived } from "./iceCandidateReceived";

export const remotePeerConnection = new Array();

export const getPeerConnection = streamId => {
    if (!remotePeerConnection[streamId]) {
        remotePeerConnection[streamId] = new PeerConnection(
            streamId,
            iceCandidateReceived,
            () => {}
        );
    }
    return remotePeerConnection[streamId];
};
