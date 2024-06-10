let mongoose = require('mongoose');


let Person_Schema = new mongoose.Schema({
    name : {type : String, required : true },
    age : {type : Number},
    email : {type:String} ,
    favoriteFoods : [String]
});
module.exports = mongoose.model('Person',Person_Schema)
