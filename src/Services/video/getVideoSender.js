export const getVideoSender = function(remotePeerConnection, streamId) {
    console.log("this.getVideoSender");

    var videoSender = null;
    if (
        (adapter.browserDetails.browser === "chrome" ||
            (adapter.browserDetails.browser === "firefox" &&
                adapter.browserDetails.version >= 64)) &&
        "RTCRtpSender" in window &&
        "setParameters" in window.RTCRtpSender.prototype
    ) {
        const senders = remotePeerConnection.getSenders();

        for (let i = 0; i < senders.length; i++) {
            if (senders[i].track != null && senders[i].track.kind == "video") {
                videoSender = senders[i];
                break;
            }
        }
    }
    return videoSender;
};
