let currentIndex = 0;
const items = document.querySelectorAll('.ice');
const totalItems = items.length;
const itemWidth = items[0].offsetWidth;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * itemWidth + 'px';
  items.forEach(item => {
    item.style.transform = `translateX(${newTransformValue})`;
    item.style.transition = 'transform 1s ease';
  });

  // Check if it's the last transitioned item and reset the position
  items.forEach((item, index) => {
    item.addEventListener('transitionend', function () {
      if (index === totalItems - 1 && currentIndex === 0) {
        items.forEach(item => {
          item.style.transition = 'none';
          item.style.transform = `translateX(${-totalItems * itemWidth}px)`;
        });

        // Adding a delay to reset the transition property after the reset
        setTimeout(() => {
          items.forEach(item => {
            item.style.transition = 'transform 1s ease';
          });
        }, 50);
      } else if (index === 0 && currentIndex === totalItems - 1) {
        items.forEach(item => {
          item.style.transition = 'none';
          item.style.transform = 'translateX(0)';
        });

        // Adding a delay to reset the transition property after the reset
        setTimeout(() => {
          items.forEach(item => {
            item.style.transition = 'transform 1s ease';
          });
        }, 50);
      }
    });
  });
}