// Two slides that will contain pictures from assets

var slideOne = ["assets/slider-image-7.jpg", "assets/slider-image-6.jpg", "assets/slider-image-9.jpg", "assets/slider-image-8.jpg", "assets/slider-image-5.jpg"];
var slideTwo = ["assets/slider-image-4.jpg", "assets/slider-image-1.jpg", "assets/slider-image-2.jpg", "assets/slider-image-3.jpg"];

function rowOne() {

    $( slideOne ).each(function( key, value ) {
        $('.first').append($('<li><img src="' + value + '"/></li>'));
      });
}

function rowTwo() {
    $( slideTwo ).each(function( key, value ) {
      $('.second').append($('<li><img src="' + value + '"/></li>'));
      });
} 


// Scrooling pictures in infinite carusel. Left or right

function moveLeftFirst() {
  $("ul.first > li:last-child").remove().prependTo(".first");
}

function moveRightFirst() {
  $("ul.first > li:first-child").remove().appendTo(".first");
}

function moveLeftSecond() {
  $("ul.second > li:last-child").remove().prependTo(".second");
}

function moveRightSecond() {
  $("ul.second > li:first-child").remove().appendTo(".second");
}

$(".previous").click(function () {
  moveLeftFirst();
  moveLeftSecond();
});

$(".next").click(function () {
  moveRightFirst();
  moveRightSecond();
});

rowOne();
rowTwo();