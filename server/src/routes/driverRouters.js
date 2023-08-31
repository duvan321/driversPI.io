const { Router } = require("express");

const {
  driverGetHandler,
  driverGetIdHandrer,
  driverPostHandler,
} = require("../driversHandlers/driverHandres");
const driverRouter = Router();
driverRouter.get("/", driverGetHandler);
driverRouter.get("/:idDriver", driverGetIdHandrer);
driverRouter.post("/", driverPostHandler);

module.exports = driverRouter;
