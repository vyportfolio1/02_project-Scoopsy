
  const specialsSlider = document.getElementById('imageSlider');
  const specialImages = specialsSlider.querySelectorAll('.ice');
  let currentSpecialIndex = 0;

  function showSpecial(index) {
    specialImages.forEach((image, i) => {
      const width = image.offsetWidth;
      const translateValue = (i - index) * width;
      image.style.transform = `translateX(${translateValue}px)`;
      image.style.transition = '1s ease';
    });
    currentSpecialIndex = index;
  }

  function nextSpecial() {
    currentSpecialIndex = (currentSpecialIndex + 1) % specialImages.length;
    showSpecial(currentSpecialIndex);
  }

  function prevSpecial() {
    currentSpecialIndex = (currentSpecialIndex - 1 + specialImages.length) % specialImages.length;
    showSpecial(currentSpecialIndex);
  }

  document.querySelector('.leftb').addEventListener('click', prevSpecial);
  document.querySelector('.rightb').addEventListener('click', nextSpecial);

  showSpecial(currentSpecialIndex);


const flavorSlider = document.getElementById('flavorSlider');
const flavorImages = flavorSlider.querySelectorAll('.ice2');
let currentFlavorIndex = 0;

function showFlavor(index) {
  flavorImages.forEach((image, i) => {
    const width = image.offsetWidth;
    const translateValue = (i - index) * width;
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