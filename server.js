var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')

var port = process.env.PORT || 1339;

console.log(new Date());

 
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));  
  
app.get('/', function(req, res) {
	console.log("serve..."); 
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.post('/msg/:param1', function(req, res) {
// 	console.log("serve..."); 
//     var params = req.params;
//     var param1 = params.param1;

//     console.log("param1: " + param1);
//     console.log("body");
//     console.log(req.body);
//     req.body.param1 = param1;
// 	res.json(req.body);
// });

app.use(express.static('public'));

app.listen(port);