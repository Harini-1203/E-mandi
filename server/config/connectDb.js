const mongoose = require("mongoose");

const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("connected");
    }
    catch(err){
        console.log(err);
        return 0;
    }
}

module.exports=connectDb;