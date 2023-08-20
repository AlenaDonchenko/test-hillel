
document.addEventListener("DOMContentLoaded", function() {
    getPhoto();
});

function getPhoto() {
    let imgElement = document.getElementById("random-photo");
    const imageList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"];
    imgElement.src = 'HW_23Img/' +  imageList[Math.floor(Math.random() * imageList.length)];

}

