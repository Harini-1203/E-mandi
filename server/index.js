const express=require("express");
const app=express();
app.use(express.json());

//dotenv
require("dotenv").config();

//database connection
const connectDb=require('./config/connectDb')
connectDb();

//cors
const cors=require('cors');
app.use(cors());


app.use('/api/users',require('./routes/userRoutes'))

app.listen('3000',()=>{
    console.log("on port 3000");
})
