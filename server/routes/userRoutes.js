const express=require('express');
const router =express.Router();
const userCon=require('../controllers/user')


router.post('/signup',userCon.createUser);
router.post('/login',userCon.loginUser);
router.get('/all',userCon.getAllUsers);

module.exports=router;