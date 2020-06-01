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

    let count = 0

    let loopImg = (stepArray) => {
        document.querySelector(".image-container").src = stepArray[count];
        count++;
        if (count == stepArray.length) {
            count = 0;
        }
    }

    // Create a GIF visual effect
    setInterval(function () {
        loopImg(imagesThree);
    }, 100);

}
).catch((err) => {

});