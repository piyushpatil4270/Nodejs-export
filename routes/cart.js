const express=require("express")
const { postCart, getCart } = require("../controllers/cart")
const router=express.Router()

router.post("/",postCart)
router.get("/",getCart)

module.exports=router