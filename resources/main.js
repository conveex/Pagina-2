let slideIndex = 0;
let timer;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    for (let i = 0; i < slides.length; i++) {
        if (slideIndex === 0 && i === slides.length - 1) {
            slides[i].style.transform = `translateX(${100}%)`;
        } else {
            slides[i].style.transform = `translateX(${offset}%)`;
        }
    }
}

function moveSlide(n) {
    clearInterval(timer);
    showSlides(slideIndex += n);
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        moveSlide(1);
    }, 20000);
}

showSlides(slideIndex);
startTimer();