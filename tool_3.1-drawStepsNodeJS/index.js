const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
  });

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

app.post('/receive', function (req, res) {
  // The image data will be store here
  var body = '';
  // Target file path
  var filePath = __dirname + '/testWrite/canvas.png';

  // 
  req.on('data', function(data) {
    body += data;
  });

  console.log(body)

  // When whole ima ge uploaded complete.
  req.on('end', function (){
    // Get rid of the image header as we only need the data parts after it.
    var data = body.replace(/^data:image\/\w+;base64,/, "");
    // Create a buffer and set its encoding to base64
    var buf = new Buffer(data, 'base64');
    // Write
    fs.writeFile(filePath, buf, function(err){
      if (err) throw err
      // Respond to client that the canvas image is saved.
      res.end();
    });
  });
});