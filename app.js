var num = 0;

var allImages = [
    "img/2d.png",
    "img/3d.png",
    "img/enamel.png"
]

var prev = document.querySelector("#previous-id");

var next = document.querySelector("#next-id");

var imageView = document.querySelector(".slider img")

next.addEventListener("click", function(){
    num++;
    if (num >=allImages.length){
        num = 0;
    }
    imageView.src = allImages[num];
    imageView.alt = allImages[num];
});

prev.addEventListener("click", function(){
    num--;
    if (num < 0){
        num = allImages.length-1;
    }
    imageView.src = allImages[num];
    imageView.alt = allImages[num];
});