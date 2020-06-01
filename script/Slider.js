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
    firstSlide.appendChild(picture);
  }
}

function rowTwo () {
  for ( var i = 0; i < slideTwo.length; i++) {
    var picture = document.createElement("li");
    picture.classList.add("picture");
    picture.innerHTML = '<img src="' + slideTwo[i] + '"/>';
    secondSlide.appendChild(picture);
  }
}

// Scrooling pictures in infinite carusel. Left or right

function moveLeftFirst () {
  $("ul.first > li:last-child").remove().prependTo(".first");
}

function moveRightFirst () {
  $("ul.first > li:first-child").remove().appendTo(".first");
}

function moveLeftSecond () {
  $("ul.second > li:last-child").remove().prependTo(".second");
}

function moveRightSecond () {
  $("ul.second > li:first-child").remove().appendTo(".second");
}
