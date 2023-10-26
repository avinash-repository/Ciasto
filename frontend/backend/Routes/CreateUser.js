const express= require('express');
const router = express.Router();
const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

router.post("/creatuser",[
   body('email', 'Not valid email').isEmail(),
   body('name').isLength({min:4}), 
 body('password','Password should contain min 5 letters').isLength({min: 5})]  

, async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
const salt=await bcrypt.genSalt(10);
let secPassword= await bcrypt.hash(req.body.password, salt)

    try {
       await  User.create({ 
            name:req.body.name,
            password: secPassword,
            email: req.body.email,
            address: req.body.address


        })
    res.json({success:true});

    } catch (error) {
        
            console.log(error)
            res.json({success:false})
    }
})



module.exports = router;