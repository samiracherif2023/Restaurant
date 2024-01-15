// import mongoose module
const mongoose =require ("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{type:String, unique: true},
    password:Number,
    phone:Number,
});
// Model Name (collection "matches" will be created/generated)
const user = mongoose.model("user",userSchema);
// Make file exportable
module.exports = user;
userSchema.plugin(uniqueValidator);