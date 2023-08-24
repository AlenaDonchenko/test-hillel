const imageList = ["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg", "img_5.jpg"];
let imgElement = document.getElementById("photo");
let index = 0;
showSlides();
function showSlides() {
    imgElement.src = 'img/' + imageList[index];
}
function nextImage() {
    if (index < imageList.length - 1) {
        index++;
        imgElement.src = 'img/' + imageList[index];
    }
     buttons();
}
function previousImage() {
    if (index > 0) {
        index--;
        imgElement.src = 'img/' + imageList[index];
    }
     buttons();
}
 function buttons() {
     const prevButton = document.querySelector(".prev-button");
     const nextButton = document.querySelector(".next-button");
     if (index === 0) {
         prevButton.style.display = 'none';
     } else {
         prevButton.style.display = 'block';
     }

     if (index === imageList.length - 1) {
         nextButton.style.display = 'none';
     } else {
         nextButton.style.display = 'block';
     }

 }
