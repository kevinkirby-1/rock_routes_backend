const serverRoutes = require("express").Router();
const climbingRoutesController = require("../controllers/climbingRoutes.controller");

serverRoutes.get("/routes", climbingRoutesController.getAll);
serverRoutes.put("/routes", climbingRoutesController.updateClimbingRoutes);

module.exports = serverRoutes;
