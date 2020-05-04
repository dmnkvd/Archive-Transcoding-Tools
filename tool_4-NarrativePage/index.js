const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const sys = require('util');
const session = require('express-session')

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// app.use('/images', express.static('images'));

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

// Initialise session ID variable. The variable is global...
// [QUESTION] I tested this with two browsers, and it stops working after 3 or 4 steps.
// How to implement this for multiple users at the same time?
let id = 0

  app.use("/", (req, res, next) => {
    if (req.url == "/") {
        console.log("welcome to the homepage")
        id = req.sessionID.substring(0,4);  
    }
    return next()
  
  }, express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
// [QUESTION]The message never gets logged to the console -- why is that so?
// I also tried to set the session ID here, but nothing happened.
  console.log("Welcome to the homepage")
  res.sendfile('index.html');
  });

app.get('/a-story-of-an-object', (req, res) => {
// Adapted from https://arjunphp.com/node-js-auto-generate-photo-gallery-directory/
  let images = getImagesFromDir(path.join(__dirname, 'public/images'));
  res.render('a-story-of-an-object', {images: images })
});

// Adapted from https://arjunphp.com/node-js-auto-generate-photo-gallery-directory/
// dirPath: target image directory
function getImagesFromDir(dirPath) {
 
  // All iamges holder, defalut value is empty
  let allImages = [];

  // Iterator over the directory
  let files = fs.readdirSync(dirPath);

  // Iterator over the files and push jpg and png images to allImages array.
  for (file of files) {
      let fileLocation = path.join(dirPath, file);
      var stat = fs.statSync(fileLocation);
      if (stat && stat.isDirectory()) {
          getImagesFromDir(fileLocation); // process sub directories
      } else if (stat && stat.isFile() && ['.jpeg', '.png'].indexOf(path.extname(fileLocation)) != -1) {
          allImages.push('images/'+file); // push all .jpg and .png files to all images 
      }
  }

  // return all images in array format
  return allImages;
}

app.listen(3000, () => {
  console.log("Listening on port 3000!")
});

app.post('/receive', (req, res) => {

  // Receive the request JSON
  const incomingJSON = req.body;
  const imgData = incomingJSON.img;
  const num = incomingJSON.increment;

  // Target file path
  let filePath = __dirname + `public/images/${num}-canvas-${id}.jpeg`;

  let data = imgData.replace(/^data:image\/\w+;base64,/, "");

  // Create a buffer and set its encoding to base64
  let buf = new Buffer.from(data, 'base64');
  
  //TODO: If file already exists, do not overwrite it.
  fs.writeFile(filePath, buf, (err) => {
    if (err) throw err
    // Respond to client that the canvas image is saved.
  });

});

// TODO: 
// When done looping through the steps, take the user to the finish page, and view the gallery.

// GALLERY:
// Read the file system results
// identify the string pattern in the filename with the number
// create a div group based on the filename
// group the images there
// For each image in folder, create a div

// 