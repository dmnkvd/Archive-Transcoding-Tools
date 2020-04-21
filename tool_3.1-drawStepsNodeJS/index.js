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

app.post('/receive', function (req, res) {
  // The image data will be stored here
  let body = '';
  // Target file path

// The current solution always overwrites the image, rather than creating a different one on every step of the game.
// [QUESTION] I’ve tried adding a counter variable on every scope of the index.js functions, to no success... It only increments once.

// [QUESTION] How to save a canvas made on step 3. as canvas-3.jpeg -- To reflect the incrementations in client-side and file-saving here on the server-side?
  let num = 0;
  let filePath = __dirname + `/testWrite/canvas${num}.jpeg`;

// [QUESTION] What are 'data' and 'end' referring to? Are they HTTP events? Is there a list somewhere? Could not find it...
  req.on('data', function(data) {
    body += data;
  });

  // When whole image has been uploaded.
  req.on('end', function (){
    // Get rid of the image header as we only need the data parts after it.
    let data = body.replace(/^data:image\/\w+;base64,/, "");
    // Create a buffer and set its encoding to base64
    let buf = new Buffer.from(data, 'base64');
    // Write
    
    fs.writeFile(filePath, buf, function(err){
      if (err) throw err
      // Respond to client that the canvas image is saved.
      res.end();
    })
    console.log(num)
  })
  
})