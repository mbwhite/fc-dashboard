var express = require('express');
var router = express.Router();

var webSocket;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {

	console.log(req.body);
	webSocket.emit('news', req.body);
  res.send('POST request to the homepage')
	

})



module.exports = router;
module.webSocket = webSocket;