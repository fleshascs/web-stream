import jwt from "jsonwebtoken";
const cookieParser = require("cookie-parser")();
const Sockets = module.exports;
let io;

Sockets.init = function(server) {
    var SocketIO = require("socket.io");
    io = new SocketIO({
        path: "/socket.io",
    });
    io.use(authorize);
    io.on("connection", onConnection);
    io.listen(server);
    Sockets.server = io;
};

function onConnection(socket) {
    console.log(
        "--socket onConnection-- socket.request.url",
        socket.request.url
    );

    socket.on("addViewer", function(payload) {
        if (!payload.room) return;
        console.log("viewer joined", socket.user);
        socket.join(payload.room);
        io.to(payload.room).emit("updateViewers", getViewers(payload.room));
    });

    socket.on("removeViewer", function(payload) {
        if (!payload.room) return;

        console.log("viewer left", socket.user);

        socket.leave(payload.room);
    });

    socket.on("disconnect", function() {
        console.log(" socket.rooms", socket.rooms);

        // socket.rooms.forEach(function(room) {
        //     io.to(room).emit("updateViewers", getViewers(room));
        // });
    });

    socket.on("getViewers", function(payload, callback) {
        if (!payload.room) return;
        callback(getViewers(payload.room));
    });
}

function getViewers(roomName) {
    const room = io.sockets.adapter.rooms[roomName];
    return {
        online: room ? room.length : 0,
        authorisedUsers: room ? getOnlineUsers(room.sockets): [],
    };
}

function getOnlineUsers(sockets) {
    const viewers = [];
    for (let socketId in sockets) {
        const user = io.sockets.connected[socketId].user;
        if (user && !viewers.includes(user)) {
            viewers.push(user);
        }
    }
    return viewers;
}

function authorize(socket, next) {
    var request = socket.request;
    if (!request) {
        return callback(new Error("[[error:not-authorized]]"));
    }

    cookieParser(request, {}, function(parseErr) {
        if (parseErr) return next("Error parsing cookies.", false);
        jwt.verify(request.cookies.jwt, process.env.JWT_SECRET, function(
            err,
            decoded
        ) {
            if (!err) {
                //return next(new Error("Authentication error"));
                socket.user = decoded.data;
                console.log(" socket.user", socket.user);
            }
            next();
        });
    });
}
