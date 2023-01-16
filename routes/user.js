const express=require('express')
const router=express.Router()
let db = require("../db.js")
router.get("/",(req,res)=>{
    let id = req.query.id;
    let sql = "select * from user where id ='"+id+"';";
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.render('user.ejs', {});
      });
})
module.exports=router;


