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

// [QUESTION] This is my current way of looping through the progress. What would be a more foolproof way of implementing progress tracking?

// [QUESTION] I am also using step in the download function to remember the filename -- Is it bad practice to declare a variable gloablly like this?
let step = 1;
document.getElementById("confirm").addEventListener("click", function () {
    clearArea();
    if (step < steps.length) {
        document.getElementById("draw-text").innerHTML = steps[step];
        document.getElementById("counter").innerHTML = step + 1 + ".";
        step++;
    } else if (step == steps.length) {
        step = 0;
    }
});

// Canvas Initialise
var canvas,
    ctx,
    bMouseIsDown = false,
    iLastX,
    iLastY;

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
    stepCounter();
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

// Initialize things when the page has loaded
onload = init;

// Download the canvas locally with a button
// [QUESTION] How to run this app from a server, and save the files to a subfolder there?
var dwn = document.getElementById("btndownload");

// [QUESTION] How to implement a multi-user solution that remembers each users's filename by a unique identifier?
dwn.onclick = function() {
    download(drawingArea, `drawing-${step}.png`);
  }

 function download(canvas, filename) {
   /// create an "off-screen" anchor tag
   var lnk = document.createElement('a'), e;
 
   /// the key here is to set the download attribute of the a tag
   lnk.download = filename;
 
   /// convert canvas content to data-uri for link. When download
   /// attribute is set the content pointed to by link will be
   /// pushed as "download" in HTML5 capable browsers
   lnk.href = canvas.toDataURL("image/png;base64");
 
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