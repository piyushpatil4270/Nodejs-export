const path=require("path")
const fs=require("fs")
const express=require("express")
const router=express.Router()
const prodController=require("../controllers/products")
router.post("/:productId",prodController.getProduct)



module.exports=router