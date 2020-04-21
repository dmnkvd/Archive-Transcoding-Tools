const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const sys = require('util');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendfile('index.html');
  });

app.listen(3000, () => {
  console.log("Listening on port 3000!")
});

app.post('/receive', (req, res) => {
  // The image data will be stored here
  let body = [];
  // Target file path

  const incomingJSON = req.body;
  const imgData = incomingJSON.img;
  const num = incomingJSON.increment;

// // The current solution always overwrites the image, rather than creating a different one on every step of the game.
// // [QUESTION] I’ve tried adding a counter variable on every scope of the index.js functions, to no success... It only increments once.

// // [QUESTION] How to save a canvas made on step 3. as canvas-3.jpeg -- To reflect the incrementations in client-side and file-saving here on the server-side?
  let filePath = __dirname + `/testWrite/canvas-${num}.jpeg`;
  let data = imgData.replace(/^data:image\/\w+;base64,/, "");
  // Create a buffer and set its encoding to base64
  let buf = new Buffer.from(data, 'base64');
  // Write
  
  fs.writeFile(filePath, buf, (err) => {
    if (err) throw err
    // Respond to client that the canvas image is saved.
    res.end();
  });

});


// // // [QUESTION] What are 'data' and 'end' referring to? Are they HTTP events? Is there a list somewhere? Could not find it...
//   req.on('data', (data) => {
//     body.push(chunk);
//     console.log(body);
//   });

//   // When whole image has been uploaded.
//   req.on('end', () => {
//     // Get rid of the image header as we only need the data parts after it.
//     let data = body.replace(/^data:image\/\w+;base64,/, "");
//     // Create a buffer and set its encoding to base64
//     let buf = new Buffer.from(data, 'base64');
//     // Write
    
//     fs.writeFile(filePath, buf, (err) => {
//       if (err) throw err
//       // Respond to client that the canvas image is saved.
//       res.end();
//     })
//   }) 
// })