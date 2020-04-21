const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const sys = require('util');
const session = require('express-session')

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: 'picasso',
    resave: true,
    saveUninitialized: true
  }));

app.get('/', (req, res) => {
    res.sendfile('index.html');
  });

app.listen(3000, () => {
  console.log("Listening on port 3000!")
});

app.post('/receive', (req, res) => {

  // Receive the request JSON
  const incomingJSON = req.body;
  const imgData = incomingJSON.img;
  const num = incomingJSON.increment;

  const session = req.sessionID.substring(0,4)

  // Target file path
  let filePath = __dirname + `/testWrite/${num}-canvas-${session}.jpeg`;

  let data = imgData.replace(/^data:image\/\w+;base64,/, "");

  // Create a buffer and set its encoding to base64
  let buf = new Buffer.from(data, 'base64');
  
  //TODO: If file already exists, do not overwrite it.
  fs.writeFile(filePath, buf, (err) => {
    if (err) throw err
    // Respond to client that the canvas image is saved.
    res.end();
  });

});