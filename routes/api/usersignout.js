const router = require("express").Router();
const changeController = require("../../controllers/changeController");
var passport = require("../../config/passport");
const { authorize } = require("passport");



// Matches with "/api/signout"

router.route("/") 
  .get(function(req, res) {
    console.log (`In GET route signout`);
    req.logout ();
    res.redirect ("/guest/login");
    res.status(201);
});

module.exports = router;
