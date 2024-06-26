const fs=require("fs")


const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        fs.readFile("message.txt", "utf8", (err, data) => {
          if (err) {
           console.log("Error: "+err)
           data="Error"
          }
    
          res.write("<html>");
          res.write("<head><title>Send Message</title></head>");
          res.write("<body>");
          res.write(
            '<form action="/message" method="POST"><input name="message"  type="text"  /><button type="submit">Send</button></form>'
          );
          res.write(`<p>${data}</p>`);
          res.write("</body>");
          res.write("</html>");
          return res.end();
        });
      } else if (url === "/message" && method === "POST") {
        console.log("message server");
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
        req.on("end", () => {
          const parsedmsg = Buffer.concat(body).toString();
          console.log(parsedmsg)
          const newmsg=parsedmsg.split('=')[1]
          console.log("eljsljl "+newmsg)
          fs.writeFileSync("message.txt",newmsg);
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      }
}


module.exports=requestHandler