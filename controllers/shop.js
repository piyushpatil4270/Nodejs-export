const path=require("path")
const rootDir=require("../util/path")

exports.shopController=(req,res,next)=>{
    console.log("this is shop router")
    
   res.sendFile(path.join(rootDir,'views','shop.html'))
}