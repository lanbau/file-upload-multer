var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/index.htm', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.htm')
})

app.post('/fileupload', multer({ dest: './uploads/'}).single('file'), function (req, res, next) {
  console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	res.status(204).end();
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
