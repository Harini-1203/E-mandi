const ComplaintModel=require('../models/ComplaintModel');

const createComplaint=async (req,res)=>{
    try{
        const {email,name,details}=req.body;
        const row={
            email,name,details
        };
        const created=await ComplaintModel.create(row);
        if(created){
            return res.status(200).json({message:"created complaint successfully"});
        }
        return res.status(400).json({message:"error while creating complaint"});
    }
    catch(err){
        console.log(err);
    }   
}

const trackStatus=async (req,res)=>{
    try{
        const {id}=req.body;
        const isFound=await ComplaintModel.find({id});
        if(isFound){
           return res.status(200).json({message:isFound.status});
        }
        return res.status(400).json({message:"id is not valid"});
    }
    catch(err){
        console.log(err);
    }
}

const getAllComplaints=async (req,res)=>{
    try{
        const complaints=await ComplaintModel.find({});
        if(complaints){
            res.send(complaints);
            return res.status(200).json({message:})
        }
    }
    catch(err){

    }
}