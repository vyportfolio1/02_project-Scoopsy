const sliderContainer = document.getElementById('imageSlider');
const images = sliderContainer.querySelectorAll('.ice');

 
let currentIndex = 0;

 
function showImage(index) {
  
  images.forEach((image, i) => {
      image.style.transform = `translateX(${(i - index) * 70}%)`;
      image.style.transition = "1s ease";
  });
  currentIndex = index;
}

 
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

 
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

 
document.querySelector('.leftb').addEventListener('click', prevImage);
document.querySelector('.rightb').addEventListener('click', nextImage);

 
showImage(currentIndex);
