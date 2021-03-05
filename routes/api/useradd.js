const router = require("express").Router();
const changeController = require("../../controllers/changeController");

// Matches with "/api/change"
router.route("/") 
  .post(changeController.userAdd)

//  .post(booksController.create);

// Matches with "/api/change/:id"
router
  .route("/:id")
  .get(changeController.findById)
  .put(changeController.update)
  .delete(changeController.remove);


module.exports = router;
