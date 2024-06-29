const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path=require("path")

const app = express();
const server = http.createServer(app);
const shopRouter=require("./routes/shop")
const adminRouter=require("./routes/admin")
const contactRouter=require('./routes/contact')
const responseRouter=require("./routes/success")
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",shopRouter)
app.use("/admin",adminRouter)
app.use("/contact",contactRouter)
app.use("/success",responseRouter)

app.use((req,res,next)=>{
  
  res.status(404).sendFile(path.join(__dirname,"views","error.html"))
})



server.listen(5500, () => console.log("Server started on port 5500"));
