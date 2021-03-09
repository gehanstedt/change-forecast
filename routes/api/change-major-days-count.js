const router = require("express").Router();
const changeController = require("../../controllers/changeController");

// Matches with "/api/change-major-days"
router.route("/") 
  .get(changeController.findMajorDayCount)

//  .post(booksController.create);

module.exports = router;