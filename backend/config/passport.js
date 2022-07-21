let Student = require('../models/student.model')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = '43504168610-a1kbfok85h46f76qbbphdqjvljvm6ujn.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
        passReqToCallback: true
    },
        async function (request, accessToken, refreshToken, profile, done) {
            // console.log(profile.emails[0].value)
            try {
                const isVerifiedStudent = await Student.findOne({ email: profile.emails[0].value });
                if (isVerifiedStudent) {
                    return done(null, isVerifiedStudent);
                } else {
                    console.log("no boi");
                }
            } catch (err) {

            }
        }
    ));


    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        Student.findById(id, function (err, user) {
            done(null, user);
        });
    })
}
