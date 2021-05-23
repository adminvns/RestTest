const express = require('express')
const router = express.Router();


//Route
router.get('/',(req,res)=>{
    res.send('This is Post Page')
    });

router.get('/new',(req,res)=>{
        res.send('This is New Page')
});

    
module.exports =router;