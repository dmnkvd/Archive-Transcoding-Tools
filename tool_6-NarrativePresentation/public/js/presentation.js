// Get the Image Data from the Server
(async function fetchImg() {
    try {
        const response = await fetch(`/image`, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const img = await response.json();
        return img;
    } catch (error) {
        console.error(error);
    }

    const allImg = await fetchImg();
    return allImg;

})().then((imgJson) => {
    // console.log(imgObject)
    const imagesOne = imgJson['imagesOne']
    const imagesTwo = imgJson['imagesTwo']
    const imagesThree = imgJson['imagesThree']
    const imagesFour = imgJson['imagesFour']
    const imagesFive = imgJson['imagesFive']
    const imagesSix = imgJson['imagesSix']
    const imagesSeven = imgJson['imagesSeven']

    const finalImg = "images/page/badge.jpeg"

// This defines the steps of the image container presentation
    const imageNames = [imagesOne, imagesTwo, imagesThree, imagesFour, imagesFive, imagesSix, imagesSeven]

    const svgClasses = []
    const sentences = document.querySelectorAll(".narrative-text")

// Change the src of the .image-container IMG

    let count = 0
    let currentImg = document.querySelector(".image-container");

    let loopImg = (stepArray) => {
        currentImg.src = stepArray[count];
        count++;
        if (count == stepArray.length) {
            count = 0;
        }
    }

    let gifCounter = (arrayName, interval) => {
        setInterval(function () {
            loopImg(arrayName);
        }, interval);
    }

    let counter = 0

    document.querySelector("#shapeNavigation").addEventListener('click', event => {
        const imgInterval = 1000
        counter++
        console.log(counter)

        // reset the counter value when it reaches the final sentence
        if (counter % sentences.length == 0){
            counter = 0
        }

        if (counter == 1){
            currentImg.classList.add("active")
            gifCounter(imagesOne, 100)
        }

        if (counter == 2){
            gifCounter(imagesTwo, 150)
        }

        if (counter == 3){
            gifCounter(imagesThree, 250)
        }

        if (counter == 4){
            gifCounter(imagesFour, 250)
        }

        if (counter == 5){
            gifCounter(imagesFive, 250)
        }

        if (counter == 7){
            currentImg.classList.remove("active")
        }

        if (counter == 8){
            currentImg.classList.add("active")
        }


        if (counter == 9){
            currentImg.classList.remove("active")
            gifCounter(finalImg, 1000000000)
            currentImg.src = "images/page/badge.jpeg"
            currentImg.classList.add("active")
        }
        
        // change SVG navigation shapes
        document.querySelector(".navSvg").id = `shape-${counter+1}`

        // Animate the change of Sentences, for Each consequent sentence
        Array.from(sentences).forEach(element => {
            element.classList.remove("active")
        })

        sentences[counter].classList.add("active")

        // Set the interval for the image changes

    })
    // Create a GIF visual effect



}
).catch((err) => {

});