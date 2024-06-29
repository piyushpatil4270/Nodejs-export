const express = require("express")
const router=express.Router()
const success=require("../controllers/success")

router.post("/",success.successController)


module.exports=router