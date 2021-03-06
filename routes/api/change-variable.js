const router = require("express").Router();
const changeController = require("../../controllers/changeController");

// Matches with "/api/change-variable"
router.route("/") 
  .get(changeController.findMajorbyVariables)

//  .post(booksController.create);

module.exports = router;
