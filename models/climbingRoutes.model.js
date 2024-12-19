const mongoose = require('mongoose');

const climbingRouteSchema = mongoose.Schema({
    _id: {type:String, required: true},
    name: {type:String, required: true},
    grade: {type:String, required: true},
    imageUrl: {type:String, required: true},
    complete: {type:Boolean, required: true},
    attempts: {type:Number, required: true},

});

module.exports = mongoose.model('ClimbingRoute', climbingRouteSchema);