// Array with promopts / steps of the drawing game.
const steps = [
    "a circle",
    "a circle with a rounded edge",
    "a badge",
    "a pink badge",
    "a pink badge with black shapes",
    "a pink badge with black shapes, of which some are repeated",
    "a pink badge with black shapes, of which some are repeated. The shapes are grouped into four clusters",
    "a pink badge with black text of four words. The words are in English",
    'a pink badge with black text saying "PEACE", "IN THE", "BALKANS"',
];

// Canvas: Initialise global variables
var canvas,
    ctx,
    bMouseIsDown = false,
    iLastX,
    iLastY;

// Canvas: Initialise function
function init() {
    canvas = document.getElementById("drawingArea");
    ctx = canvas.getContext("2d");
    ctx.alpha = false;
    bind();
    drawColor();
}

// Canvas: Drawing function
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

// Canvas: Set colour from HTML selection
function drawColor() {
    ctx.strokeStyle = document.querySelector("#selColor").value;
    document.querySelector("#selColor").style.color = document.querySelector("#selColor").value;
    document.querySelector("#selColor").style.borderColor = document.querySelector("#selColor").value;
}

// Canvas: Clear the area
function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Initialize things when the page has loaded
onload = init;

// Give Image white background and convert it to URL data stream
function canvasToImage(){
    //cache height and width        
    let w = canvas.width;
    let h = canvas.height;
    
    let data;
    
    //get the current ImageData for the canvas.
    data = ctx.getImageData(0, 0, w, h);
    
    //store the current globalCompositeOperation
    let compositeOperation = ctx.globalCompositeOperation;
    
    //set to draw behind current content
    ctx.globalCompositeOperation = "destination-over";
    
    //set background color
    ctx.fillStyle = "white";
    
    //draw background / rect on entire canvas
    ctx.fillRect(0,0,w,h);
    
    //get the image data from the canvas
    const imageData = canvas.toDataURL("image/jpeg");
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
window.onLoad = init;

let step = 1;

document.getElementById('confirm').onclick = () => {
    sendImgToServer();

    if (step < steps.length) {
        document.getElementById("draw-text").innerHTML = steps[step];
        document.getElementById("counter").innerHTML = step + 1 + ".";
        ++step
    } else if (step == steps.length) {
        location.href = "/a-story-of-an-object";
    }
    clearArea();

}

// send the image to the server (on click of next button)
function sendImgToServer(){
 // Create a POST request to '/receive'
    const data = {
        img: canvasToImage(),
        increment: step
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
// How is credentials:'include' related to the express-session?
        credentials: 'include',
        body: JSON.stringify(data)
    }
    fetch('/receive', options);
// Send the image data to the server
    console.log('image is sent');
 }