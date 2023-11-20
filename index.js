const imageSlider = document.getElementById('imageSlider');
const iceImages = imageSlider.querySelectorAll('.ice');
let currentImageIndex = 0;

function showImage(index) {
  const containerWidth = imageSlider.offsetWidth;
  const numImages = iceImages.length;
  const imageWidth = containerWidth / numImages;

  iceImages.forEach((image, i) => {
    const translateValue = (i - index) * imageWidth;
    image.style.transform = `translateX(calc(50% + ${translateValue}px))`;
    image.style.transition = '1s ease';
  });
  currentImageIndex = index;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % iceImages.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + iceImages.length) % iceImages.length;
  showImage(currentImageIndex);
}

window.addEventListener('resize', () => {
  showImage(currentImageIndex);
});

document.querySelector('.leftb').addEventListener('click', prevImage);
document.querySelector('.rightb').addEventListener('click', nextImage);

showImage(currentImageIndex);


const flavorSlider = document.getElementById('flavorSlider');
const flavorImages = flavorSlider.querySelectorAll('.ice2');
let currentFlavorIndex = 0;

function showFlavor(index) {
  flavorImages.forEach((image, i) => {
    const width = image.offsetWidth;
    const translateValue = (i - index) * (width * 0.5);  
    image.style.transform = `translateX(calc(50% + ${translateValue}px))`;
    image.style.transition = '1s ease';
  });
  currentFlavorIndex = index;
}

function nextFlavor() {
  currentFlavorIndex = (currentFlavorIndex + 1) % flavorImages.length;
  showFlavor(currentFlavorIndex);
}

function prevFlavor() {
  currentFlavorIndex = (currentFlavorIndex - 1 + flavorImages.length) % flavorImages.length;
  showFlavor(currentFlavorIndex);
}

document.querySelector('.leftf').addEventListener('click', prevFlavor);
document.querySelector('.rightf').addEventListener('click', nextFlavor);

showFlavor(currentFlavorIndex);

const meniuIcon = document.querySelector(".fa-xmarks-lines")
const meniuClose = document.querySelector(".fa-circle-xmark")
const hiddenMeniu = document.querySelector(".mm")

meniuIcon.addEventListener("click", ()=>{
  hiddenMeniu.classList.remove("hidden");
  hiddenMeniu.style.transition = "1s ease-in"
})

meniuClose.addEventListener("click", ()=>{
  hiddenMeniu.classList.add("hidden")
  hiddenMeniu.style.transition = "1s ease-in"
})
