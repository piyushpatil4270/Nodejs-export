const http = require("http");
const express=require("express")
const bodyParser=require("body-parser")

const app=express()


app.use(bodyParser.urlencoded())

app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input type='text' name='size'><button type'submit' >Submit</button></form>")
})


app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})
app.use("/",(req,res,next)=>{
    res.send("<h1>Hello from Node-js</h1>")
})
const server = http.createServer(app);

server.listen(5500, () => console.log("Server started on port 5500"));
