const path=require("path")
const fs=require("fs")
const Product = require("../models/product")
const Cart = require("../models/cart")


exports.postCart=(req,res,next)=>{
    const prodId=req.body.productId
    console.log(req.body)
    Product.findById(prodId,(prod)=>{
        console.log("The product is ",prodId)
        Cart.addProduct(prodId,prod.amount)
    })
    res.redirect("/cart")
}

exports.getCart=(req,res,next)=>{
res.send("This is cart page")
}