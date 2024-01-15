// import mongoose module
const mongoose =require ("mongoose");
const chefSchema = mongoose.Schema({
    name: String,
    speciality: String,
    experience:Number,
   
});
// Model Name (collection "matches" will be created/generated)
const chef = mongoose.model("chef",chefSchema);
// Make file exportable
module.exports = chef;