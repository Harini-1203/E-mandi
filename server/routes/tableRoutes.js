const express=require('express');
const tableRoute=express.Router();
const {getAllData,createRow,updateRow} =require('../controllers/tableControllers')

tableRoute.get('',getAllData);
tableRoute.post('/',createRow);
tableRoute.put('',updateRow);

module.exports=tableRoute;