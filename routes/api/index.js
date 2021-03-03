const router = require("express").Router();
const changeRoutes = require("./change");
const changeRoutesMajor = require("./change-major");

// Change routes
router.use("/change", changeRoutes);
router.use("/change-major", changeRoutesMajor);

module.exports = router;
