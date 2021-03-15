const router = require("express").Router();
const changeController = require("../../controllers/changeController");
var passport = require("../../config/passport");
const { authorize } = require("passport");



// Matches with "/api/signin"

/*
router.route("/") 
  .post(changeController.userSignin)
*/

router.route("/") 
  .post(passport.authenticate("local"), function(req, res) {
    console.log (res);
    res.json(req.user);
});

module.exports = router;
