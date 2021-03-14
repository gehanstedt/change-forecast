const router = require("express").Router();
const changeController = require("../../controllers/changeController");

// Matches with "/api/userstatus"
router.route("/") 
  .get(changeController.userStatus)

module.exports = router;
