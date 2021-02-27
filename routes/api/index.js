const router = require("express").Router();
const changeRoutes = require("./change");

// Change routes
router.use("/change", changeRoutes);

module.exports = router;
