let imageLoop = read files from folder 1



document.querySelector(".image-container").src = "/public/images/1/1-canvas-0n4v.jpeg"

let images = ['']

window.setInterval(() => {
    for (let i = 0; i < images.length; i++) {
        document.querySelector(".image-container").src = images[i];
    }
}, 1000);