const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const server = http.createServer(app);
let list=[]

app.use(bodyParser.urlencoded({extended:true}));



app.get("/login",(req,res)=>{
  
 
res.send(`
  <form onsubmit='localStorage.setItem("username", document.getElementById("username").value)' action="/product" method="POST">
    <input id="username" type="text" name="title">
    <button type="submit">Login</button>
  </form>
`);

})
app.post("/product", (req, res, next) => {
 
  res.redirect("/")
});

app.get("/", (req, res, next) => {
  const htmlString = `${list.length === 0 ? '<span>No Messages</span>' : ''}
    ${list.map((message) => `<div>${message.username} : ${message.message}</div>`)}`;
const response=`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">

<input id="message" type="text" name="title">
<input id="username"  type="hidden" name="username">
<button type="submit">Send Message</button>

</form>`
const final=htmlString+response
res.send(final)
});

app.post('/',(req,res,next)=>{
console.log(req.body)
const newitem={"username":req.body.username,"message":req.body.title}
list.push(newitem)

list.map((item)=>console.log(item))
res.redirect("/")
})

server.listen(5500, () => console.log("Server started on port 5500"));
