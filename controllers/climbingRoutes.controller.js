const ClimbingRoute = require("../models/climbingRoutes.model");
const bodyParser = require("body-parser");

// Get all climbing routes
const getAll = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  ClimbingRoute.find().then((documents) => {
    res.status(200).json({
      message: "Climbing routes fetched successfully!",
      climbingRoutes: documents,
    });
  });
};

// Update Routes
const updateClimbingRoutes = (req, res, next) => {
  bodyParser.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  ClimbingRoute.updateMany({}, req.body, ()=> {
    console.log("Database Updated!")
  });
};

module.exports = { getAll, updateClimbingRoutes };
