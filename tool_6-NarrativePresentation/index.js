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
const port = 3000

// [QUESTION] I tested this with two browsers, and it stops writing files after 2 or 3 steps.
// [QUESTION] How to enable the server for multiple users at the same time?


app.use("/", (req, res, next) => {
  // [QUESTION] I also tried to put it inside app.post (L93). It creates a new session after every received request. 
  if (req.url == "/") {

  }
  return next()

}, express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  // [QUESTION]The message never gets logged to the console -- why is that so?
  // Apparently it is related to express.static (L42)... 
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log("Listening on port 3000!")
});

app.post('/receive', (req, res) => {

  // Receive the request JSON
  const incomingJSON = req.body;
  const imgData = incomingJSON.img;
  const num = incomingJSON.increment;

  let id = req.sessionID.substring(0, 4);

  // let id = req.sessionID.substring(0,4);  

  // Target file path
  let filePath = path.join(__dirname, `/public/images/${num}/${num}-canvas-${id}.jpeg`);

  let data = imgData.replace(/^data:image\/\w+;base64,/, "");

  // Create a buffer and set its encoding to base64
  let buf = new Buffer.from(data, 'base64');

  console.log(filePath)

  fs.writeFileSync(filePath, buf, (err) => {
    if (err) throw err
  })

  res.end()
});

app.get('/thank-you', (req, res) => {
  res.sendFile("public/thank-you.html");
})

app.get('/credits', (req, res) => {
  res.sendFile("public/credits.html");
})

app.get('/story-pug', (req, res) => {
  let imagesOne = getImagesFromDir(1);
  let imagesTwo = getImagesFromDir(2);
  let imagesThree = getImagesFromDir(3);
  let imagesFour = getImagesFromDir(4);
  let imagesFive = getImagesFromDir(5);
  let imagesSix = getImagesFromDir(6);
  let imagesSeven = getImagesFromDir(7);

  console.log(imagesTwo);
  res.render('story', {
    imagesOne: imagesOne,
    imagesTwo: imagesTwo,
    imagesThree: imagesThree,
    imagesFour: imagesFour,
    imagesFive: imagesFive,
    imagesSix: imagesSix,
    imagesSeven: imagesSeven
  })
})

app.get('/story', (req, res) => {
  res.sendFile("public/story.html");
})

app.get('/image', function(req, res){
  let imagesOne = getImagesFromDir(1);
  let imagesTwo = getImagesFromDir(2);
  let imagesThree = getImagesFromDir(3);
  let imagesFour = getImagesFromDir(4);
  let imagesFive = getImagesFromDir(5);
  let imagesSix = getImagesFromDir(6);
  let imagesSeven = getImagesFromDir(7);

  res.send({
    imagesOne: imagesOne,
    imagesTwo: imagesTwo,
    imagesThree: imagesThree,
    imagesFour: imagesFour,
    imagesFive: imagesFive,
    imagesSix: imagesSix,
    imagesSeven: imagesSeven
  })
  res.end()
 })

// Adapted from https://arjunphp.com/node-js-auto-generate-photo-gallery-directory/

// dirPath: target image directory
function getImagesFromDir(stepNum) {
  dirPath = path.join(__dirname, `public/images/${stepNum}`);
  // All images holder
  let allImages = [];

  // Iterator over the directory
  let files = fs.readdirSync(dirPath);
  relPath = dirPath.replace(/.*?(?=images)/, "");

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