const router = require("express").Router();
const changeController = require("../../controllers/changeController");

// Matches with "/api/change-bymonth-count"
router.route("/") 
  .get(changeController.findByMonthCount)

module.exports = router;