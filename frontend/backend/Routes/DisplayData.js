const express = require('express')
const router = express.Router()


router.post('/cakedata', (req, res)=>{

    try{
         
        res.send([global.cake_item , global.cake_category])
    }
    catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports= router;
