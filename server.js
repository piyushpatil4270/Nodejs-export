const http = require("http");
const express=require("express")
const bodyParser=require("body-parser")

const app=express()
const server = http.createServer(app);

const adminRoutes=require("./routes/admin")
const shopRoutes=require("./routes/shop")


app.use(bodyParser.urlencoded())
app.use("/admin",adminRoutes)
app.use("/shop",shopRoutes)
app.use((req,res,next)=>{
  
    res.status(404).send('<h4>Page Not Found</h4>')
})




server.listen(5500, () => console.log("Server started on port 5500"));
