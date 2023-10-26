
const express= require('express');
const router = express.Router();
const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const jwtSecret = "Youcannothackthisdatabase"


router.post("/loginuser", [
    body('email', 'Not valid email').isEmail(),
    body('password','Password should contain min 5 letters').isLength({min: 5})]  
    
    , async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
    
    
   
    try {
            let email = req.body.email;

          let userData =  await  User.findOne(
            {email}
            );
            if(!userData){
              
                return res.status(400).json({errors:"Invalid email id and password "});
            }

            const pwdCompare = await bcrypt.compare(req.body.password , userData.password)

            if(!pwdCompare){
                return res.status(400).json({errors:"Invalid email id and password "});
    
            }
            const data={
                user:{
                    id:userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)
            return res.json({success:true , authToken:authToken})
    
    
         } catch (error) {
             
                 console.log(error)
                 res.json({success:false})
         }
     })
module.exports = router;