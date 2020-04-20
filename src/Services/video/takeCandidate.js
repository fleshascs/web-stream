import { addIceCandidate } from "./addIceCandidate";
import { getPeerConnection } from "./getPeerConnection";

export const takeCandidate = function(idOfTheStream, tmpLabel, tmpCandidate) {
    console.log("takeCandidate");

    var streamId = idOfTheStream;
    var label = tmpLabel;
    var candidateSdp = tmpCandidate;

    var candidate = new RTCIceCandidate({
        sdpMLineIndex: label,
        candidate: candidateSdp,
    });

    const pc = getPeerConnection(streamId);
    if (pc.isRemoteConnectionSet == true) {
        addIceCandidate(pc.remotePeerConnection, streamId, candidate);
    } else {
        console.debug(
            "Ice candidate is added to list because remote description is not set yet"
        );
        pc.iceCandidates.push(candidate);
    }
};
