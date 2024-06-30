const path = require("path");
const fs = require("fs");
const rootDir=require("../util/path")


module.exports = class Product {
  constructor(prodName) {
    this.title = prodName;
    this.description="This is a very good product";
    this.amount="5000";
    this.id=Math.floor(Math.random() * 90000) + 10000;
    this.image="https://i.ytimg.com/vi_webp/SQ4sV9LILJY/maxresdefault.webp"
   
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
        fs.writeFile(p,JSON.stringify(items),(err)=>{
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
        else {
         try {
          const prods=JSON.parse(fileContent)
         
          console.log(prods)
          cb(prods)
         } catch (error) {
          console.log(error)
          cb([])
         }
        }
       
    })
  }
  static findById=(prodId,cb)=>{
    this.fetchAll((products) => {
      const product = products.find(p => p.id === parseInt(prodId));
      cb(product);
    });
  }
};