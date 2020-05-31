// Two slides that will contain pictures from assets

let slideOne = [
  "assets/slider-image-7.jpg",
  "assets/slider-image-6.jpg",
  "assets/slider-image-9.jpg",
  "assets/slider-image-8.jpg",
  "assets/slider-image-5.jpg"
];

let slideTwo = [
  "assets/slider-image-4.jpg",
  "assets/slider-image-1.jpg",
  "assets/slider-image-2.jpg",
  "assets/slider-image-3.jpg"
];

let firstSlide = document.querySelector(".first");
let secondSlide = document.querySelector(".second");

function rowOne () {
  for ( var i = 0; i < slideOne.length; i++) {
    var picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = '<img src="' + slideOne[i] + '"/>';
    slideOne.appendChild(picture);
  }
}

function rowTwo () {
  for ( var i = 0; i < slideTwo.length; i++) {
    var picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = '<img src="' + slideTwo[i] + '"/>';
    slideTwo.appendChild(picture);
  }
}