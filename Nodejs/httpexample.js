	var http = require('http');
	var servervariable = http.createServer(function(reqest,response){
		response.writeHead(200);
		response.end('Hello Http : after writeHead');
	});
	servervariable.listen(8080);