import { changeBandwidth } from "./changeBandwidth";
import { localStream } from "./index";

let bandwidth = 900; //default bandwidth kbps

export class PeerConnection {
    remotePeerConnection;
    iceCandidates;
    isRemoteConnectionSet;
    streamId;
    onicecandidate;
    onTrack;

    constructor(streamId, onicecandidate, onTrack) {
        console.log("create new PeerConnection");

        this.onTrack = onTrack;
        this.onicecandidate = onicecandidate;
        this.streamId = streamId;
        this.remotePeerConnection = new RTCPeerConnection();
        this.iceCandidates = new Array();
        this.isRemoteConnectionSet = false;

        this.remotePeerConnection.addStream(localStream);

        this.addListeners();
    }

    setIsRemoteConnectionSet = isSet => {
        this.isRemoteConnectionSet = isSet;
    };

    addListeners = () => {
        this.remotePeerConnection.onicecandidate = function(event) {
            console.log("onicecandidate");

            this.onicecandidate(
                this.remotePeerConnection,
                event,
                this.streamId
            );
        };

        this.remotePeerConnection.ontrack = function(event) {
            console.log("onTrack", event);
            //thiz.onTrack(event, streamId);
        };

        this.remotePeerConnection.oniceconnectionstatechange = function(event) {
            if (this.remotePeerConnection.iceConnectionState == "connected") {
                changeBandwidth(bandwidth, streamId)
                    .then(() => {
                        console.log("Bandwidth is changed to " + bandwidth);
                    })
                    .catch(e => console.error(e));
            }
        };
    };
}
