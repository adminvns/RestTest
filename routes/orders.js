const express = require('express')
const router = express.Router();


//Route
router.get('/',(req,res)=>{
    res.send('This is the Orders Page')
    });


    
module.exports =router;