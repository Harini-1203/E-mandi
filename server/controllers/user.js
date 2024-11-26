var userModel=require('../models/user');
const bcrypt=require('bcrypt');


const getAllUsers= async (req,res)=>{
    const allUsers=await userModel.find().select('-password').lean();
    if(!allUsers){
        return res.status(400).json({message:"not enough users"})
    }
    res.json(allUsers)
}



const createUser = async (req, res) => {
    try {
        const { name, email, mobileNo, address, password } = req.body;

        // Check for duplicate mobileNo
        const dup = await userModel.findOne({ mobileNo });
        if (dup) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Hash password and create user
        const hashed = await bcrypt.hash(password, 10);
        const user = { name, email, mobileNo, address, password: hashed };
        const create = await userModel.create(user);

        if (create) {
            return res.status(201).json({ message: "Created successfully." });
        } else {
            return res.status(400).json({ message: "Error while creating user." });
        }
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            res.status(400).json({ message: "Duplicate key error." });
        } else {
            res.status(500).json({ message: "Server error." });
        }
    }
};


const loginUser=async (req,res)=>{
    try{
        const {mobileNo,password}=req.body;
        const userExists=await userModel.findOne({mobileNo});
        if(userExists){
            if(bcrypt.compare(userExists.password,password)) {
                return res.status(200).json({message:"login SuccessFull"});
            }
            else{
                return res.status(400).json({message:"Incorrect Password"});
            }
        }
        else{
            return res.status(400).json({message:"Incorrect Phone number"});
        }
    }
    catch(err){
        console.log(err);
    }
}

userModel.deleteMany({ mobile: 9391000686 });



module.exports={createUser,loginUser,getAllUsers};