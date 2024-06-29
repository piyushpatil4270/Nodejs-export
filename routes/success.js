const express = require("express")
const router=express.Router()
const path=require("path")
const rootDir=require("../util/path")

router.post("/",(req,res)=>{
    res.sendFile(path.join(rootDir,"views","success.html")) 
})


module.exports=router