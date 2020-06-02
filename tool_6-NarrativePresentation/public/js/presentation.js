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
    const imagesOne = imgJson['imagesOne'];
    const imagesTwo = imgJson['imagesTwo'];
    const imagesThree = imgJson['imagesThree'];
    const imagesFour = imgJson['imagesFour'];
    const imagesFive = imgJson['imagesFive'];
    const imagesSix = imgJson['imagesSix'];
    const imagesSeven = imgJson['imagesSeven'];
    const finalImg = "images/page/badge.jpeg";

    const sentences = document.querySelectorAll(".narrative-text");

// Change the src of the #image-container IMG
    let count = 0;
    let currentImg = document.getElementById("image-container");

    let loopImg = (stepArray) => {
        currentImg.src = stepArray[count];
        count++;
        if (count == stepArray.length-1) {
            count = 0;
        }
    };

    let intervalID;
    function gifInterval (array) {
        intervalID = setInterval(loopImg, 200, array)
    }

// In practice, I see that the image src actually changes between several different arrays... Likely a SetInterval problem
    
    let counter = 0
    document.querySelector("#shapeNavigation").addEventListener('click', event => {

        counter++
        clearInterval(intervalID)

        // reset the counter value when it reaches the final click
        if (counter % sentences.length+1 == 0){
            counter = 0
        }

        if (counter == 1){
            currentImg.classList.add("active")
            gifInterval(imagesOne)
        }

        if (counter == 2){
            event.preventDefault;
            currentImg.classList.remove("active")
            void currentImg.offsetWidth;
            currentImg.classList.add("active")
            gifInterval(imagesTwo)
        }

        console.log(counter)


        if (counter == 3){
            event.preventDefault;
            currentImg.classList.remove("active")
            void currentImg.offsetWidth;
            currentImg.classList.add("active")
            gifInterval(imagesThree)
        }

        if (counter == 4){
            event.preventDefault;
            currentImg.classList.remove("active")
            void currentImg.offsetWidth;
            currentImg.classList.add("active")
            gifInterval(imagesFour)
        }

        if (counter == 5){
            gifInterval(imagesFive)
        }

        if (counter == 6){
            gifInterval(imagesSix)
        }

        if (counter == 7){
            currentImg.classList.remove("active")
        }

        if (counter == 8){
            currentImg.classList.add("active")
            gifInterval(imagesSeven)
        }

        if (counter == 9){
            currentImg.src = "images/page/badge.jpeg"
        }

        if (counter == 11){
            window.location.replace("/credits")
        }
        
        // change SVG navigation shapes, starting from shape-1
        document.querySelector(".navSvg").id = `shape-${counter+1}`

        // Animate the change of Sentences, for Each consequent sentence
        Array.from(sentences).forEach(element => {
            element.classList.remove("active")
        })

        sentences[counter].classList.add("active")

        // Set the interval for the image changes

    }, false)

}
).catch((err) => {

});
