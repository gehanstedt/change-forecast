const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
var session = require("express-session");
var passport = require("./config/passport");
const { authorize } = require("passport");


// Connect to Mongo database via Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/change-forecast", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
// Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./client/index.html"));
console.log (req);
});

app.listen(PORT, () => {
    console.log(`��� ==> API server now on port ${PORT}!`);
});
