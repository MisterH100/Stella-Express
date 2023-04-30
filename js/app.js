

var http = require('http');
var fs = require('fs');



function loadPage(req, res){
    res.writeHeader(200, {'Content-Type': 'text/html'});  //getting the type of file 
	
	fs.readFile('../index.html', function(err, data){   //getting the path and reading the contents of file
		if(err){
		res.writeHead(404);
		res.write('Page not found');                   //displaying error
	 }else{
		res.write(data);                              //displaying the file
	 }
	 res.end();                                      //end response once file displayed
	});
	
}
http.createServer(loadPage).listen(8080);            //create sever on port
console.log('Server running at ${port}')