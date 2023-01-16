const express=require('express')
const router=express.Router()
const a = require("get-npm-package-version");

router.get("/",(req,res)=>{

    let test = req.query.test;
    let version= a(test);
    console.log(test);
    console.log(version);
    if (version != null){    
     res.render('test.ejs', {version});
    }else{
     res.send('package not found in npm registry');
    }


})
module.exports=router;


