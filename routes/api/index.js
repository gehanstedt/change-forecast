const router = require("express").Router();
const changeRoutes = require("./change");
const changeRoutesMajor = require("./change-major");
const changeRoutesMajorDays = require("./change-major-days");
const useraddRoutes = require("./useradd");
const usersigninRoutes = require("./usersignin");


// Change routes
router.use("/change", changeRoutes);
router.use("/change-major", changeRoutesMajor);
router.use("/change-major-days", changeRoutesMajorDays);
router.use("/useradd", useraddRoutes);
router.use("/signin", usersigninRoutes);

module.exports = router;
