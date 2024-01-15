// import mongoose module
const mongoose =require ("mongoose");
const platSchema = mongoose.Schema({
    name: String,
    price: Number,
    description:String,
   
});
// Model Name (collection "matches" will be created/generated)
const plat = mongoose.model("plat",platSchema);
// Make file exportable
module.exports = plat;