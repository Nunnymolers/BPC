var express = require('express');

var http = require('http');

var path = require('path');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '16mb' }));

var server = http.createServer(app);

var port =  process.env.PORT ? parseInt(process.env.PORT) : 8080;

app.use(express.static(__dirname + '/web/dist'));

app.get('/', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './index.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});

app.get('/register', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './register.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});

app.post('/register', (req, res, next) => {

	console.log(req.body)
	res.send('OK')
});

app.get('/events', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './events.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});

app.get('/classes', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './classestest.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});

app.get('/about', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './about.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});


app.get('/gallery', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './gallery.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});


/* Defines what function to all when the server recieves any request from http://localhost:8080 */
server.on('listening', () => {

	/* Determining what the server is listening for */
	var addr = server.address()
		, bind = typeof addr === 'string'
			? 'pipe ' + addr
			: 'port ' + addr.port
	;

	/* Outputs to the console that the webserver is ready to start listenting to requests */
	console.log('Listening on ' + bind);
});

/* Tells the server to start listening to requests from defined port */
server.listen(port);
