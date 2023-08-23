/*document.addEventListener("DOMContentLoaded", function() {
    getPhoto();
});*/
function getPhoto() {
    let imgElement = document.getElementById("random-photo");
    const imageList = ["img_01.jpg", "img_02.jpg", "img_03.jpg", "img_04.jpg", "img_05.jpg", "img_06.jpg", "img_07.jpg", "img_08.jpg", "img_09.jpg"];
    imgElement.src = 'HW_23Img/' +  imageList[Math.floor(Math.random() * imageList.length)];
}

