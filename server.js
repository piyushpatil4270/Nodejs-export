const http = require("http");
const requestHandler=require('./routes.js')

const server = http.createServer(requestHandler);

server.listen(5500, () => console.log("Server started on port 5500"));
