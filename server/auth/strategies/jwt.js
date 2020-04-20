import passport from "passport";
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";
import { to } from "await-to-js";

//import { getUserById } from "../../database/user";
import { signToken } from "../utils";

const JWTStrategy = passportJWT.Strategy;

const strategy = app => {
    const strategyOptions = {
        jwtFromRequest: req => req.cookies.jwt,
        secretOrKey: process.env.JWT_SECRET,
        passReqToCallback: true,
    };

    const verifyCallback = async (req, jwtPayload, cb) => {
        console.log("verifyCallback jwtPayload.data._id", jwtPayload.data._id);
        return cb();
        //const [err, user] = await to(getUserById(jwtPayload.data._id));

        if (err) {
            return cb(err);
        }
        req.user = user;
        return cb(null, user);
    };

    passport.use(new JWTStrategy(strategyOptions, verifyCallback));

    app.use(function(req, res, next) {
        //console.log("signedCookies", req.signedCookies);

        if (req.cookies.jwt) {
            var decoded = jwt.decode(req.cookies.jwt, process.env.JWT_SECRET);
            //console.log("decoded", decoded);
            res.user = decoded.data;
        }
        next();
    });

    app.get(`/logout`, (req, res) => {
        return res
            .status(200)
            .clearCookie("jwt")
            .redirect("/");
    });
};

export { strategy };
