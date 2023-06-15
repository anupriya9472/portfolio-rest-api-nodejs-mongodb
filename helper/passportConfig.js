import bcrypt from "bcrypt";
import { Strategy as localStrategy } from "passport-local";
import collections from "../models/index.js";

const passportConfig = (passport) => {

    passport.use(
        new localStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
            const user = await collections.User.findOne({ email });
            try {
                if (!user) return done(null, false);

                if (!await bcrypt.compare(password, user.password)) return done(null, false);

                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await collections.User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    });

}
export default passportConfig;