const { Router } = require("express");
const driverRouter = require("../routes/driverRouters");
const teamRouter = require("../routes/teamRouter");
const router = Router();
router.use("/drivers", driverRouter);
router.use("/teams", teamRouter);
module.exports = router;
