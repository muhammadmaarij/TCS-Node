var http = require("http");
http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> Hello World </h1>");
  })
  .listen(8081);
console.log("server is running at a localhost: 8081");
