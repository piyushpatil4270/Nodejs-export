const http = require("http");
const express=require("express")

const app=express()

app.use((req,res,next)=>{
    console.log("This is a middleware")
    next()
})
app.use((req,res,next)=>{
    console.log("In the another middleware")
    next()
})


const server = http.createServer(app);

server.listen(5500, () => console.log("Server started on port 5500"));
