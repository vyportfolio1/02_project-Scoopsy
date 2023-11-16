document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".all-carusel");
    const prevBtn = document.querySelector(".fa-chevron-left");
    const nextBtn = document.querySelector(".fa-chevron-right");

    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".ice");
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showSlide(currentIndex);
    }

    // Show the initial slide
    showSlide(currentIndex);

    // Add event listeners to arrow buttons
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});