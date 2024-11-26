const mongoose=require('mongoose');
const ComplaintSchema=new mongoose.Schema({
    userid:{
        typeof:mongoose.SchemaType.userid;
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    details:{
        type:String
    },
    status:{
        type:String,
        default:"Not Rsolved"
    }
})
module.exports=mongoose.model(ComplainModel,ComplaintSchema);
