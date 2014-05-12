var http = require("http");

http.createServer (function(request,response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hi!! This is my first node server.\n");
	response.write("Abhi Jain.");
	response.end();
}).listen(9691);

