const router = require('express').Router()
//Require bcryp 
require('dotenv').config({path:'./config/.env'})
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const User = require('../models/User')
const isAuth = require('../middlerwares/isAuth')
const {validator , registerRules , loginRules} = require('../middlerwares/validator')
router.post('/register',registerRules() ,validator,async (req,res)=>{
    const{name,lastName,email,password}=req.body; 
    try{
        // if(!name || !lastName || !email || !password ){
        //     return res.status(400).json({msg :'Plese enter all fild'})
        // }
    //Check exsitance user 
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({msg:'User allredy existe'})
    }
    //Create new User 
    user = new User({name , lastName , email , password}); 
    //Save 
    const salt = 10 
    const hashedPassword = await bcrypt.hash(password,salt)
    user.password=hashedPassword;
    await user.save();
    //sign user 
    const payload ={
        id:user._id
    };
    const token = await jwt.sign(payload , process.env.sercerOrkey,{
        expiresIn:'30 days',
    });
    res.status(200).send({msg:'User registred wwith succed',user,token})

    } catch(error) {
        res.status(500).send({msg:'server error'})
    }
})
router.post("/login",loginRules(),validator,async(req,res)=>{
    const {email , password } = req.body 
    try{ 
        // if(!email || !password) {
        //     return res.status(200).send({msg: "Please enter all fields"})
        // }
        let user = await User.findOne({email})
        if(!user) {
            res.status(200).send({msg:'bad Creadtials! Email'})
        }
        const isMatch= await bcrypt.compare(password , user.password)
        if(!isMatch) {
            return res.status(200).send({msg:'bad Creadtials password'})
        }
        const payload ={
            id:user._id
        };
        const token = await jwt.sign(payload , process.env.sercerOrkey,{
            expiresIn:'30 days',
        });
        res.send({msg: "logged in with succes",user,token})
    } catch (error) {
        res.status(500).send({msg:'server error'})
    }
})

router.get('/user',isAuth, (req,res)=>{
    res.status(200).send({user:req.user})
})
module.exports = router;