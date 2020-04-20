export let socket;
export const connectToSocket = () => {
    socket = new WebSocket("ws://fleshas.lt:5080/LiveApp/websocket");
    //socket = new WebSocket(process.env.MEDIA_SOCKET_URL);
};

//console.log('process.env', process.env);
