import { socket as mediaSocket } from "@Services/socket/mediaSocket";

export const gotDescription = function(
    remotePeerConnection,
    configuration,
    streamId
) {
    console.log("this.gotDescription");

    remotePeerConnection
        .setLocalDescription(configuration)
        .then(function(responose) {
            console.debug(
                "Set local description successfully for stream Id " + streamId
            );

            var jsCmd = {
                command: "takeConfiguration",
                streamId: streamId,
                type: configuration.type,
                sdp: configuration.sdp,
            };

            console.debug("local sdp: ");
            // console.debug(configuration.sdp);

            mediaSocket.send(JSON.stringify(jsCmd));
        })
        .catch(function(error) {
            console.error("Cannot set local description. Error is: " + error);
        });
};
