const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const sys = require('util');
const session = require('express-session')

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(session({
    secret: 'secret-word',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000,
      httpOnly: true,
      secure: false
    }
  }));

// Initialise session ID variable. The variable is global -- I have read against declaring global variables.
let id = 0

// [QUESTION] I tested this with two browsers, and it stops writing files after 2 or 3 steps.
// [QUESTION] How to enable the server for multiple users at the same time?


  app.use("/", (req, res, next) => {
  // [QUESTION] I also tried to put it inside app.post (L93). It creates a new session after every received request. 
    if (req.url == "/") {
        id = req.sessionID.substring(0,4);  
        console.log(req.sessionID)
    }
    return next()
  
  }, express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
// [QUESTION]The message never gets logged to the console -- why is that so?
// Apparently it is related to express.static (L42)... 
  console.log("Welcome to the homepage")
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

  // let id = req.sessionID.substring(0,4);  

  // Target file path
  let filePath = path.join(__dirname, `/public/images/${num}/${num}-canvas-${id}.jpeg`);

  let data = imgData.replace(/^data:image\/\w+;base64,/, "");

  // Create a buffer and set its encoding to base64
  let buf = new Buffer.from(data, 'base64');
  
  //TODO: If file already exists, do not overwrite it.
  fs.writeFile(filePath, buf, (err) => {
    if (err) throw err
  });

});

app.get('/a-story-of-an-object', (req, res) => {
  // Adapted from https://arjunphp.com/node-js-auto-generate-photo-gallery-directory/
    let imagesOne = getImagesFromDir(path.join(__dirname, 'public/images/1'));
    let imagesTwo = getImagesFromDir(path.join(__dirname, 'public/images/2'));
    let imagesThree = getImagesFromDir(path.join(__dirname, 'public/images/3'));
    let imagesFour = getImagesFromDir(path.join(__dirname, 'public/images/4'));
    let imagesFive = getImagesFromDir(path.join(__dirname, 'public/images/5'));
    let imagesSix = getImagesFromDir(path.join(__dirname, 'public/images/6'));
    let imagesSeven = getImagesFromDir(path.join(__dirname, 'public/images/7'));
    res.render('a-story-of-an-object', {imagesOne: imagesOne, imagesTwo: imagesTwo, imagesThree: imagesThree, imagesFour: imagesFour, imagesFive: imagesFive, imagesSix: imagesSix, imagesSeven: imagesSeven})
  });
  
  // Adapted from https://arjunphp.com/node-js-auto-generate-photo-gallery-directory/
  
  // dirPath: target image directory
  function getImagesFromDir(dirPath) {
   
    // All images holder
    let allImages = [];
  
    // Iterator over the directory
    let files = fs.readdirSync(dirPath);
    relPath = dirPath.replace(/.*?(?=images)/,"");
  
    // Iterator over the files, push jpeg images to allImages array.
    for (file of files) {
        let fileLocation = path.join(dirPath, file);
        var stat = fs.statSync(fileLocation);
        if (stat && stat.isFile() && ['.jpeg', '.png'].indexOf(path.extname(fileLocation)) != -1) {
            allImages.push(relPath + '/' + file); // push all .jpg and .png files to all images 
        }
    }
  
    // return all images in array format
    return allImages;
  }
  

// TODO: 
// When done looping through the steps, take the user to the finish page, and view the gallery.
