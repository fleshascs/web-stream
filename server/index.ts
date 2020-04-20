// #region Global Imports
import next from "next";
import express from "express";
import path from "path";
import nextI18NextMiddleware from "next-i18next/middleware";
import { urlencoded, json } from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
// #endregion Global Imports

// #region Local Imports
import nextI18next from "./i18n";
import routes from "./routes";
import { initialiseAuthentication } from "./auth";
import { connectToDatabase, client } from "./database/connection";
import * as socket from "./socket";
// #endregion Local Imports

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(async () => {
    const server = express();
    await connectToDatabase();
    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(urlencoded({ extended: true }));
    server.use(json());
    server.use(cookieParser());
    server.use(passport.initialize());
    server.use(express.static(path.join(__dirname, "../static")));
    server.use(nextI18NextMiddleware(nextI18next));
    initialiseAuthentication(server);

    server.get("/auth", async (req, res) => {
        try {
            const result = await client.query("SELECT * FROM users;");
            res.json({ search: result, url: process.env.DATABASE_URL });
        } catch (error) {
            console.log("error", error);
        }
    });

    server.get("*", (req, res, next) => handler(req, res));
    const httpServer = server.listen(port);
    //@ts-ignore
    socket.init(httpServer);

    // eslint-disable-next-line no-console
    console.log(
        `> Server listening at http://localhost:${port} as ${
            dev ? "development" : process.env.NODE_ENV
        }`
    );
});
