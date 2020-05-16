// Canvas Initialise
let canvas,
    ctx,
    bMouseIsDown = false,
    iLastX,
    iLastY;

function init() {
    canvas = document.getElementById("drawingArea");
    ctx = canvas.getContext("2d");

    ctx.globalAlpha = 1;

    bind();
    drawColor();
    clearArea();
}

function bind() {
    canvas.onmousedown = function (e) {
        bMouseIsDown = true;
        iLastX =
            e.clientX -
            canvas.offsetLeft +
            (window.pageXOffset ||
                document.body.scrollLeft ||
                document.documentElement.scrollLeft);
        iLastY =
            e.clientY -
            canvas.offsetTop +
            (window.pageYOffset ||
                document.body.scrollTop ||
                document.documentElement.scrollTop);
    };
    canvas.onmouseup = function () {
        bMouseIsDown = false;
        iLastX = -1;
        iLastY = -1;
    };
    canvas.onmousemove = function (e) {
        if (bMouseIsDown) {
            var iX =
                e.clientX -
                canvas.offsetLeft +
                (window.pageXOffset ||
                    document.body.scrollLeft ||
                    document.documentElement.scrollLeft);
            var iY =
                e.clientY -
                canvas.offsetTop +
                (window.pageYOffset ||
                    document.body.scrollTop ||
                    document.documentElement.scrollTop);
            ctx.beginPath();
            ctx.moveTo(iLastX, iLastY);
            ctx.lineTo(iX, iY);
            ctx.stroke();
            iLastX = iX;
            iLastY = iY;
        }
    };
}

function drawColor() {
    ctx.strokeStyle = document.querySelector("#selColor").value;
}

function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// Creates an image with a white background
function canvasToImage(){
    //cache height and width        
    var w = canvas.width;
    var h = canvas.height;
    
    var data;
    
    //get the current ImageData for the canvas.
    data = ctx.getImageData(0, 0, w, h);
    
    //store the current globalCompositeOperation
    var compositeOperation = ctx.globalCompositeOperation;
    
    //set to draw behind current content
    ctx.globalCompositeOperation = "destination-over";
    
    //set background color
    ctx.fillStyle = "white";
    
    //draw background / rect on entire canvas
    ctx.fillRect(0,0,w,h);
    
    //get the image data from the canvas
    var imageData = canvas.toDataURL("image/jpeg");
    
    //clear the canvas
    ctx.clearRect (0,0,w,h);
    
    //restore it with original / cached ImageData
    ctx.putImageData(data, 0,0);
    
    //reset the globalCompositeOperation to what it was
    ctx.globalCompositeOperation = compositeOperation;
    
    //return the Base64 encoded data url string
    return imageData;
    }

// Initialize things when the page has loaded
onload = init;

// Download the canvas locally with a button
// [QUESTION 3] This is a draft mockup. How to approach running this app from a server, and save the files to a subfolder there? Node? Requests?
var dwn = document.getElementById("btndownload");

// [QUESTION 4] How to implement a multi-user solution that saves each users's drawings with a unique ID in the filename?
// [QUESTION 4.1] The above imageData sends a stream of base64 image data to download... How could this stream be sent to a local node.js server and put into a file with a unique user Identifier?
dwn.onclick = function() {
    download(`drawing-test.png`);
  }

 function download(filename) {
   /// create an "off-screen" anchor tag
   var lnk = document.createElement('a'), e;
 
   /// the key here is to set the download attribute of the a tag
   lnk.download = filename;
 
   lnk.href = canvasToImage();
 
   /// create a "fake" click-event to trigger the download
   if (document.createEvent) {
     e = document.createEvent("MouseEvents");
     e.initMouseEvent("click", true, true, window,
                      0, 0, 0, 0, 0, false, false, false,
                      false, 0, null);
 
     lnk.dispatchEvent(e);
   } else if (lnk.fireEvent) {
     lnk.fireEvent("onclick");
   }
 }