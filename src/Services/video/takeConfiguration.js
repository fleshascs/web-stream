import { addIceCandidate } from "./addIceCandidate";
import { getPeerConnection } from "./getPeerConnection";
import { gotDescription } from "./gotDescription";

export const takeConfiguration = function(
    idOfStream,
    configuration,
    typeOfConfiguration
) {
    console.log("takeConfiguration");

    var streamId = idOfStream;
    var type = typeOfConfiguration;
    var conf = configuration;

    const pc = getPeerConnection(streamId);

    pc.remotePeerConnection
        .setRemoteDescription(
            new RTCSessionDescription({
                sdp: conf,
                type: type,
            })
        )
        .then(function(response) {
            console.debug(
                "set remote description is succesfull with response: " +
                    response +
                    " for stream : " +
                    streamId +
                    " and type: " +
                    type
            );

            //console.debug(conf);

            pc.setIsRemoteConnectionSet(true);
            var length = pc.iceCandidates.length;
            console.debug("Ice candidate list size to be added: " + length);
            for (var i = 0; i < length; i++) {
                addIceCandidate(
                    pc.remotePeerConnection,
                    streamId,
                    tpc.iceCandidates[i]
                );
            }
            pc.iceCandidates = [];

            if (type == "offer") {
                //SDP constraints may be different in play mode
                console.log("try to create answer for stream id: " + streamId);

                pc.remotePeerConnection
                    .createAnswer({
                        OfferToReceiveAudio: false,
                        OfferToReceiveVideo: false,
                    })
                    .then(function(configuration) {
                        console.log(
                            "created answer for stream id: " + streamId
                        );
                        gotDescription(configuration, streamId);
                    })
                    .catch(function(error) {
                        console.error("create answer error :" + error);
                    });
            }
        })
        .catch(function(error) {
            console.error(
                "set remote description is failed with error: " + error
            );

            if (
                error.toString().indexOf("InvalidAccessError") > -1 ||
                error.toString().indexOf("setRemoteDescription") > -1
            ) {
                /**
                 * This error generally occurs in codec incompatibility.
                 * AMS for a now supports H.264 codec. This error happens when some browsers try to open it from VP8.
                 */
                console.error('thiz.callbackError("notSetRemoteDescription");');

                // thiz.callbackError("notSetRemoteDescription");
            }
        });
};
