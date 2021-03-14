const router = require("express").Router();
const changeRoutes = require("./change");
const changeRoutesMajor = require("./change-major");
const changeRoutesMajorDays = require("./change-major-days");
const changeRoutesDaysCount = require("./change-days-count");
const changeRoutesByMonthCount = require("./change-bymonth-count");
const changeRoutesVariable = require("./change-variable");
const useraddRoutes = require("./useradd");
const userstatusRoutes = require("./userstatus");
const usersigninRoutes = require("./usersignin");
const usersignoutRoutes = require("./usersignout");




// Change routes
router.use("/change", changeRoutes);
router.use("/change-variable", changeRoutesVariable);
router.use("/change-major", changeRoutesMajor);
router.use("/change-major-days", changeRoutesMajorDays);
router.use("/change-days-count", changeRoutesDaysCount);
router.use("/change-bymonth-count", changeRoutesByMonthCount);
router.use("/useradd", useraddRoutes);
router.use("/userstatus", userstatusRoutes);
router.use("/signin", usersigninRoutes);
router.use("/signout", usersignoutRoutes);

module.exports = router;
