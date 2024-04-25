// JavaScript code for the Slider Project

let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".prev");
let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnailItems = document.querySelector(".carousel .thumbnail")

// variables

let timeRunning = 3000;


nextBtn.onclick = function(){
    showSlider(".next");
}
previousBtn.onclick = function(){
    showSlider(".prev");
}

// showSlider Function

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if(type ===".next"){
        listItem.appendChild(itemSlider[0]);
        thumbnailItems.appendChild(itemThumbnail[0]);
        carousel.classList.add("next");
    }else{
        let lastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[lastItem]);
        thumbnailItems.prepend(itemThumbnail[lastItem]);
        carousel.classList.add("prev");
    }

    runTimeout = setTimeout(()=>{
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
    },timeRunning)
}