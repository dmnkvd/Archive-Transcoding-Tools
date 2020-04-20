const steps = [
    "a circle",
    "a circle with a rounded edge",
    "a metallic circular object",
    "a badge",
    "a pink badge",
    "a pink badge with black shapes",
    "a pink badge with black shapes, of which some are repeated",
    "a pink badge with black shapes, of which some are repeated. They are grouped into four clusters",
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

    ctx.globalAlpha = 1;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    bind();
    drawColor();
    clearArea();
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
}

// Canvas: Clear the area
function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// Initialize things when the page has loaded
onload = init;

// Give Image white background and convert it to URL data stream
function canvasToImage(){
    canvas = ctx.canvas;

    //cache height and width        
    var w = canvas.width;
    console.log(w)
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
    var imageData = this.canvas.toDataURL("image/jpeg");
    
    //clear the canvas
    ctx.clearRect (0,0,w,h);
    
    //restore it with original / cached ImageData
    ctx.putImageData(data, 0,0);
    
    //reset the globalCompositeOperation to what it was
    ctx.globalCompositeOperation = compositeOperation;
    
    //return the Base64 encoded data url string
    return imageData;
    }

let canvasDataUrl = canvasToImage();  // this should save the return value from canvastoImage function;
// [QUESTION:] Why does this return a TypeError: Cannot read property 'canvas' of undefined (line 116)?

// Initialize things when the page has loaded
onload = init;

let confirm = document.getElementById('confirm');

//[QUESTION] I declared step in the global scope so it would not re-declare itself on every click. Is there a more elegant way to solve this?
let step = 1;

// [QUESTION] The step/array increments each time the user clicks on the "next" button.
// It seems very break-able... What would be a more foolproof way of implementing progress tracking?
confirm.addEventListener("click", function () {
    clearArea();
    sendImgToServer();

    if (step < steps.length) {
        document.getElementById("draw-text").innerHTML = steps[step];
        document.getElementById("counter").innerHTML = step + 1 + ".";
        step++;
    } else if (step == steps.length) {
        step = 0;
    }
});

function sendImgToServer(){
    var post = new XMLHttpRequest();
 // Create a POST request to '/receive'
    post.open("POST", "/receive");

// Send the image data to the server
    post.send(canvasToImage());
    console.log('file is sent');
 }