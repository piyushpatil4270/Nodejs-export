const path = require("path");
const fs = require("fs");
const rootDir=require("../util/path")


module.exports = class Product {
  constructor(prodName) {
    this.title = prodName;
  }
  save() {
    const p = path.join(
      rootDir,
      "data",
      "products.json"
    );
    console.log(p)
    fs.readFile(p,(err,fileContent)=>{
      let items=[];
        if(!err){
            try {
              items=JSON.parse(fileContent)
            } catch (error) {
              console.log("error parsing file "+error)
            }
        }
        items.push(this)
      
    
      
       
       console.log("This is item type "+items)
        fs.writeFile(p,JSON.stringify(items,null,2),(err)=>{
         if(err)console.log(err)
         else console.log("item added successfully")
        })
    })
  }
  static fetchAll(cb) {
    const p = path.join(
      rootDir,
      "data",
      "products.json"
    );
    fs.readFile(p,(err,fileContent)=>{
         if(err)cb([]);
      
         const prods=JSON.parse(fileContent)
         
         console.log(prods)
         cb(prods)
    })
  }
};