let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    const carouselWidth = document.querySelector('.carousel').clientWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${-currentSlide * carouselWidth}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

window.addEventListener('resize', () => {
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
