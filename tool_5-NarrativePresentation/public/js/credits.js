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
    const finalImg = ["images/page/badge.jpeg"];


    // Credits Page
    const allImages = imagesOne.concat(imagesTwo, imagesThree, imagesFour, imagesFive, imagesSix, imagesSeven, finalImg)
    for (image of allImages) {
        console.log(image)
        let img = document.createElement("img");
        img.src = image;
        document.getElementById("thumbnail-container").appendChild(img);
    }

}
).catch((err) => {
});
