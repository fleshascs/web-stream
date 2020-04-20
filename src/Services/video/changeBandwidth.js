import { getVideoSender } from "./getVideoSender";

export const changeBandwidth = function(bandwidth, streamId) {
    console.log("  this.changeBandwidth ");

    var errorDefinition = "";

    var videoSender = getVideoSender(streamId);

    if (videoSender != null) {
        const parameters = videoSender.getParameters();

        if (!parameters.encodings) {
            parameters.encodings = [{}];
        }

        if (bandwidth === "unlimited") {
            delete parameters.encodings[0].maxBitrate;
        } else {
            parameters.encodings[0].maxBitrate = bandwidth * 1000;
        }

        return videoSender.setParameters(parameters);
    } else {
        errorDefinition = "Video sender not found to change bandwidth";
    }

    return Promise.reject(errorDefinition);
};
