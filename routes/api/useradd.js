const router = require("express").Router();
const changeController = require("../../controllers/changeController");

// Matches with "/api/useradd"
router.route("/") 
  .post(changeController.userAdd)

module.exports = router;
