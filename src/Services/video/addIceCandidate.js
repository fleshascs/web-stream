export const addIceCandidate = function(peerConnection, streamId, candidate) {
    console.log("this.addIceCandidate");
    peerConnection
        .addIceCandidate(candidate)
        .then(function(response) {
            console.log("Candidate is added for stream " + streamId);
        })
        .catch(function(error) {
            console.error(
                "ice candiate cannot be added for stream id: " +
                    streamId +
                    " error is: " +
                    error
            );
            //  console.error(candidate);
        });
};
