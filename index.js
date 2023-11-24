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

const meniuIcon = document.querySelector(".fa-xmarks-lines");
const meniuClose = document.querySelector(".fa-circle-xmark");
const hiddenMeniu = document.querySelector(".mm");

meniuIcon.addEventListener("click", () => {
  hiddenMeniu.classList.remove("invisible");
});

meniuClose.addEventListener("click", () => {
  hiddenMeniu.classList.add("invisible");
});

function toggleThumbsUp(icon) {
 
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');
}

anime({
  targets: '#textSection',
  opacity: [0, 1],
  translateY: [50, 0],  
  easing: 'easeInOutQuad',  
  duration: 1000,  
  delay: anime.stagger(200),  
});

anime({
  targets: '#menuItems a',
  opacity: [0, 1],
  translateY: [20, 0], 
  easing: 'easeInOutQuad', 
  duration: 1000, 
  delay: anime.stagger(200), 
});

anime({
  targets: '#image1',
  opacity: [0, 1],
  translateY: [50, 0],  
  easing: 'easeInOutQuad',  
  duration: 1000,  
  delay: anime.stagger(200), 

  rotate: [0, -12], 
});

anime({
  targets: '#image2',
  opacity: [0, 1],
  translateY: [50, 0],  
  easing: 'easeInOutQuad',  
  duration: 1000,  
  delay: anime.stagger(200), 

  rotate: [0, 12], 
});


document.addEventListener('DOMContentLoaded', function () {
  function animateReviews(entries, observer) {
    const cus = document.querySelector('.cus');
    const rev1 = document.querySelectorAll('.rev1');
    const rev2 = document.querySelectorAll('.rev2');
    const img2 = document.querySelector('.img2');

    if (entries[0].isIntersecting) {
      anime.set([cus, img2], { opacity: 0, translateY: 30 });
      anime.set(rev1, { opacity: 0, translateY: 20 });

      const revTimeline = anime.timeline({ easing: 'easeInOutQuad', duration: 1000 });
      
      revTimeline
      .add({
        targets: img2,
        opacity: 1,
        translateY: 0,
        rotate: [0, -3]
      })
        .add({
          targets: cus,
          opacity: 1,
          translateY: 0,
        })
        .add({
          targets: rev1,
          opacity: 1,
          translateY: 0,
          rotate: [0, 3]
        })
        .add({
          targets: rev2,
          opacity: 1,
          translateY: 0,
          rotate: [0, -4]
        });
 

      observer.unobserve(entries[0].target);
    }
  }

  const observer = new IntersectionObserver(animateReviews, { threshold: 0.1 });
  const container = document.querySelector('.all-cus');
  observer.observe(container);
});




document.addEventListener('DOMContentLoaded', function () {
  function animateEvents(entries, observer) {
      const eventSection = document.querySelector('.event');
      const img3 = document.querySelector('.img3');
      const eventText = document.querySelector('.event-text');

      if (entries[0].isIntersecting) {
          anime.set([eventText, img3], { opacity: 0, translateY: 50 });

          anime.timeline({ easing: 'easeInOutQuad', duration: 1000 })
              .add({
                  targets: eventText,
                  opacity: 1,
                  translateY: 0,
              })
              .add({
                  targets: img3,
                  opacity: 1,
                  translateY: 0,
              });

          observer.unobserve(entries[0].target);
      }
  }

  const observer = new IntersectionObserver(animateEvents, { threshold: 0.2 });

  const eventContainer = document.querySelector('.event');

  observer.observe(eventContainer);
});

document.addEventListener('DOMContentLoaded', function () {
  function animateSubscription(entries, observer) {
    const subscribeSection = document.querySelector('.sub');
    const inputField = document.querySelector('#email');
    const subscribeButton = document.querySelector('.sub button');

    if (entries[0].isIntersecting) {
      anime.set([subscribeSection, inputField, subscribeButton], { opacity: 0, translateY: 50 });

      anime.timeline({ easing: 'easeInOutQuad', duration: 1000 })
        .add({
          targets: subscribeSection,
          opacity: 1,
          translateY: 0,
        })
        .add({
          targets: [inputField, subscribeButton],
          opacity: 1,
          translateY: 0,
        });

      observer.unobserve(entries[0].target);
    }
  }

  const observer = new IntersectionObserver(animateSubscription, { threshold: 0.1 });
  const container = document.querySelector('.sub');
  observer.observe(container);
});

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.meniu a');

  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop;

      anime({
        targets: document.documentElement,
        scrollTop: offset,
        duration: 1000,
        easing: 'easeInOutQuad'
      });
    }
  }
});