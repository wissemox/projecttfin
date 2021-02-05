const {body , validationResult} = require('express-validator');
const router = require('../routes/auth');

const registerRules = () =>[ 
    body('name',"Name is required").notEmpty(), 
    body('lastName',"Last name isrequired").notEmpty(), 
    body('email',"email is required").isEmail(), 
    body('name',"Password must contain 6 charcter").isLength({
        min : 6, 
        max: 20
    }), 
]; 
const loginRules = () =>[ 
    body('email',"email is required").isEmail(), 
   
]; 

const validator = (req,res, next)=>{
    const errors = validationResult(req)
    //Mafhmtch
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array().map(el=>({
            msg: el.msg
        }))});
    }
    next() ;
}; 

module.exports={validator , registerRules , loginRules}