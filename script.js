// Example script to add interactive functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    // You can add more interactive functionalities here
});
window.onscroll = function() {updateProgressBar()};

// progress bar
function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

// image slider
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
}

//updating slide

function updateSlidePosition() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}



function flipSlide(element) {
const card = element.closest('.card');
if (card.style.transform === 'rotateY(180deg)') {
    card.style.transform = 'rotateY(0deg)';
} else {
    card.style.transform = 'rotateY(180deg)';
}
}



