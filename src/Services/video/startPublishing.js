import { getPeerConnection } from "./getPeerConnection";
import { gotDescription } from "./gotDescription";

export const startPublishing = function(idOfStream) {
    console.log("this.startPublishing");
    var streamId = idOfStream;
    const pc = getPeerConnection(streamId);
    pc.remotePeerConnection
        .createOffer({
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false,
        })
        .then(function(configuration) {
            gotDescription(pc.remotePeerConnection, configuration, streamId);
        })
        .catch(function(error) {
            console.error(
                "create offer error for stream id: " +
                    streamId +
                    " error: " +
                    error
            );
        });
};
