// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// const { authorize } = require("passport");
// Creating our User model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
        type: String,
        unique: true,
        required: true
  },
  full_name: {
    type: String,
    unique: false,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

/*
userSchema.pre('save', function (next) {
    var user = this;
    console.log (`In userSchema.pre`);
    if (this.isModified('password') || this.isNew) {
        console.log (`Generating salt`);
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                console.log (`Setting password`);
                user.password = hash;
                console.log (`Password ${user.password}`);
                next();
            });
        });
    } else {
        return next();
    }
});
*/

userSchema.pre('save', function (next) {
    var user = this;
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    next ();
});


userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;