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

let step = 1
document.getElementById('confirm').addEventListener('click', function() {
    clearArea();
    if (step < steps.length) {
        document.getElementById('draw-text').innerHTML = steps[step]
        document.getElementById('counter').innerHTML = step+1 + "."
        step++
      } else if (step == steps.length) {
        step = 0
      }
    });


// Canvas Initialise
// Canvas Initialise
var canvas, ctx, bMouseIsDown = false, iLastX, iLastY

function init () {
canvas = document.getElementById('drawingArea');
ctx = canvas.getContext('2d');

ctx.globalAlpha = 1;
ctx.fillStyle = "white";
ctx.beginPath();
ctx.fillRect(0, 0, canvas.width, canvas.height);

bind();
drawColor();
clearArea();
}

function bind () {

canvas.onmousedown = function(e) {
    bMouseIsDown = true;
    iLastX = e.clientX - canvas.offsetLeft + (window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);
    iLastY = e.clientY - canvas.offsetTop + (window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop);
}
canvas.onmouseup = function() {
    bMouseIsDown = false;
    iLastX = -1;
    iLastY = -1;
}
canvas.onmousemove = function(e) {
    if (bMouseIsDown) {
        var iX = e.clientX - canvas.offsetLeft + (window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft);
        var iY = e.clientY - canvas.offsetTop + (window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop);
        ctx.beginPath();
        ctx.moveTo(iLastX, iLastY);
        ctx.lineTo(iX, iY);
        ctx.stroke();
        iLastX = iX;
        iLastY = iY;
    }
};

}

// This does not select the colour chosen?
function drawColor () {
    ctx.strokeStyle = document.querySelector('#selColor').value;
}
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

onload = init;

// Download the canvas with the click of a button
var dwn = document.getElementById('btndownload');

// add more finesse here, that it would say 0-drawing-1.png
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