import io from "socket.io-client";

export let socket;
export const connectToSocket = () => {
    var ioParams = {
        reconnectionAttempts: 5,
        reconnectionDelay: 1500,
        transports: ["polling", "websocket"],
        path: "/socket.io",
    };
    socket = io.connect("", ioParams);
};
