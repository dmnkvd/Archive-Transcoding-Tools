const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const sys = require('util');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
  });

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

// [QUESTION] How to go about implementing a multi-user solution that saves each users's drawings with a unique ID in the filename?
app.post('/receive', function (req, res) {
  // The image data will be stored here
  var body = '';
  // Target file path

// [QUESTION] How to save a canvas made on step 3. as canvas-3.jpeg -- To connect the innerHTML changes and file-saving convention on node?
// I thought of sending the value of ${i} as another http request... I didn't manage. I am sure there is a better way!
  var filePath = __dirname + `/testWrite/canvas.jpeg`;

  req.on('data', function(data) {
    body += data;
  });

  // When whole ima ge uploaded complete.
  req.on('end', function (){
    // Get rid of the image header as we only need the data parts after it.
    var data = body.replace(/^data:image\/\w+;base64,/, "");
    // Create a buffer and set its encoding to base64
    var buf = new Buffer.from(data, 'base64');
    // Write
    fs.writeFile(filePath, buf, function(err){
      if (err) throw err
      // Respond to client that the canvas image is saved.
      res.end();
    });
  });
});