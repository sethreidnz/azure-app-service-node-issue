var http = require("http");
var path = require("path");

const port = process.env.PORT || 3000;
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<html><body>Hello world</body></html>", "utf-8");
  })
  .listen(port);
