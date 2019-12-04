//Load express module with `require` directive
import * as express from "express";

var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(8083, function () {
  console.log('app listening on port 8083!')
})