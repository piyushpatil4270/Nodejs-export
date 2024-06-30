const path=require("path")
const rootDir=require("../util/path")

const Product=require('../models/product')


exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add-product.html")) 
 }


 
 exports.addProduct=(req,res,next)=>{
    const product=new Product(req.body.title)
    console.log("The product is "+product.title)
    product.save()
    res.redirect('/')
}

