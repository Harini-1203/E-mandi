const mongoose=require("mongoose");

const tableSchema=new mongoose.Schema({
    sNo:Number,
    name:String,
    govtPrice:Number,
    wholePrice:Number,
    retailPrice:Number,
    quantity:Number,
    category:String,
})

const tableModel=mongoose.model('table',tableSchema);
module.exports=tableModel;