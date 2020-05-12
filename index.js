var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

var actions = require('./src/actions')


// setup the server w/ cors  
var app = express();
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.all('*', function(req, res, next) {
	var origin = req.get('origin');
	res.header('Access-Control-Allow-Origin', origin);
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


//all of the endpoints for the server
var endpoints = [
{
	url: 'testGetCall',
	action: 'get_testGetCall'
}];



endpoints.forEach(function(endpoint) {
	var endpointFunction = function(req, res) {
		/*
		TODO:
			1.Create baton
			2.Validate params
			3.pass only params and response to action
		*/ 
		actions[endpoint.action](req, res)

	}
	if (endpoint.post) {
		app.post('/' + endpoint.url, endpointFunction);
		return
	}
	app.get('/' + endpoint.url, endpointFunction);
})


var server = app.listen(process.env.PORT || 8081, function() {
	console.log("Scene Stamp Server Running @ port ", this.address().port)

	//startIntervalTasks()
})


var startIntervalTasks = () => {
	//will run all automated tasks 
	if (process.env.NODE_ENV === 'production') {
		//insert prod here 	
	}
}

module.exports = {
	server: server,
	startIntervalTasks: startIntervalTasks,
}