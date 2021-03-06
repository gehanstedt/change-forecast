var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcryptjs");
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "username"
  },
  function(username, password, done) {
    console.log (`Within user - LocalStrategy`);
    console.log (`User from web:  ${username}.  Password from web:  ${password}`)
    // When a user tries to sign in this code runs
    db.User.findOne({
      username: username
    }).then(function(dbUser) {
      console.log (`dbUser:`);
      console.log (dbUser);
      console.log (`dbUser.password:   ${dbUser.password}`);
      console.log (`Web password:  ${password}`);

      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect

      else if (!bcrypt.compareSync(password, dbUser.password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user

      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
