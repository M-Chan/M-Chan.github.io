let slidePosition = 0;

const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;


function prev() {
    if(slidePosition === 0) {
        slidePosition = (totalSlides - 1); //go back to the last slide of the carousel if at the beginning
    }
    else slidePosition--; //move back by one slide

    updateSlides();
};

function next() {
    if(slidePosition === (totalSlides - 1)) {
        slidePosition = 0; //go back to the beginning of the carousel if reached the end
    }
    else slidePosition++; //move along by one slide

    updateSlides()
};

function updateSlides() {
    //below hides all slides
    for (let slide of slides) {
        slide.classList.remove("slide--visible");
        slide.classList.add("slide--hidden");
    }
    slides[slidePosition].classList.add("slide--visible"); //show current slide
};