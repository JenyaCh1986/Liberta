

const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.img-slider');
const sliderLine = document.querySelector('.slider-line');

const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;



sliderNext.addEventListener('click', nextSlide);


sliderPrev.addEventListener('click', prevSlider);




function nextSlide() {
    sliderCount++;

    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }
    rollSlider();
}

function prevSlider () {
    sliderCount--;
    if (sliderCount < 0) {
       sliderCount = sliderImages.length -1;
    }
    rollSlider();
}
function rollSlider () {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
setInterval (()=> {
    nextSlide()
}, 1000);