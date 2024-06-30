const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const errorC=require("./controllers/error")


const app = express();
const server = http.createServer(app);
const shopRouter=require("./routes/shop")
const adminRouter=require("./routes/admin")
const contactRouter=require('./routes/contact')
const responseRouter=require("./routes/success")
const prodRouter=require("./routes/product")
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",shopRouter)
app.use("/admin",adminRouter)
app.use("/contact",contactRouter)
app.use("/success",responseRouter)
app.use("/details",prodRouter)

app.use(errorC.errorController)



server.listen(5500, () => console.log("Server started on port 5500"));
