import passport from "passport";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//import { UserModel } from "../database/schema";

const setup = () => {
    passport.serializeUser((user, done) => {
        console.log("passport.serializeUser user", user);

        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        console.log("passport.deserializeUser id", id);

        try {
            const user = {
                _id: "999",
                provider: "google",
                providerId: "114218569505994648772",
                firstName: "Karolis",
                lastName: "K.",
                displayName: "Karolis K.",
                email: "cancel.k.k@gmail.com",
                password: null,
            };
            //const user = await UserModel.findById(id);
            return done(null, user);
        } catch (err) {
            return done(err, null);
        }
    });
};

const signToken = user => {
    return jwt.sign({ data: user }, process.env.JWT_SECRET, {
        expiresIn: 604800,
    });
};

const hashPassword = async password => {
    if (!password) {
        throw new Error("Password was not provided");
    }

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const verifyPassword = async (candidate, actual) => {
    return await bcrypt.compare(candidate, actual);
};

export { setup, signToken, hashPassword, verifyPassword };
