const mongoose=require('mongoose');
const tableModel=require('../models/tableModel');

const getAllData= async (req,res)=>{
    try{
        const allData=await tableModel.find();
        if(allData){
            res.status(200).json(allData);
        }

    }catch(err){
        res.status(401).json({message:err});
    }
}
const createRow =async (req,res)=>{
    try{
        const {sNo,name,govtPrice,wholePrice,retailPrice,quantity,category}=req.body;
        const created=await tableModel.create({sNo,name,govtPrice,wholePrice,retailPrice,quantity,category});
        if(created){
            res.status(200).json({message:"table row created succesfully"});
        }
        else{
            res.status(400).json({message:"table row not created"});
        }
    }
    catch(err){
        // console.log(err);
        res.status(400).json({message:"error"});
    }
}

const updateRow=async (req,res)=>{
    try{
        const {filter,update}=req.body;
        const updated=await tableModel.findOneAndUpdate(filter,update);
        
        
        if(updated){
            res.status(200).json({message:"updated succesfully"});
        }
        else{
            res.status(400).json({message:"not updated"});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({message:"error"});
    }
}


module.exports={getAllData,createRow,updateRow}