const mongoose=require('mongoose')

const userS=new mongoose.Schema({
    name:String,
    email:String,
    mobileNo:{
        type:Number,
        required:true,
        unique:true
    },
    address:String,
    password:String
})
const userModel = mongoose.model('user', userS);
module.exports = userModel;