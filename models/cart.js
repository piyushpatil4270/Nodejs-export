const path=require("path")
const fs=require("fs")



const p=path.join(path.dirname(process.mainModule.filename),'data','cart.json')

module.exports=class Cart{
   static addProduct(id,prodPrice){
     fs.readFile(p,(err,fileContent)=>{
        try {
            console.log("The file is "+p)
        } catch (error) {
            console.log(error)
        }
        let cart={products:[],totalPrice:0}
        if(!err){
            cart=JSON.stringify(fileContent)
        }
        const existingProductidx=cart.products.findIndex((prod)=>id===prod.id)
        const existingProduct=cart.products[existingProductidx]
        let updatedProduct;
        if(existingProduct){
            updatedProduct={...existingProduct}
            updatedProduct.qty+=1
            cart.products=[...cart.products]
            cart.products[existingProductidx]=updatedProduct
        }
        else {
            updatedProduct={id:id,qty:1}
            cart.products=[...cart.products,updatedProduct]
        }
        cart.totalPrice=cart.totalPrice+ + prodPrice
        fs.writeFile(p,JSON.stringify(cart),(err)=>{
            if(err)console.log(err)
        })
     })
   }
}