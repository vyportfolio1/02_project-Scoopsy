// slider
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

//  mobile nav

const meniuIcon = document.querySelector(".fa-xmarks-lines");
const meniuClose = document.querySelector(".fa-circle-xmark");
const hiddenMeniu = document.querySelector(".mm");

meniuIcon.addEventListener("click", () => {
  hiddenMeniu.classList.remove("invisible");
});

meniuClose.addEventListener("click", () => {
  hiddenMeniu.classList.add("invisible");
});

// like uppdate
let likeCount = 0;

function toggleThumbsUp(icon) {
    
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');

    
    likeCount += icon.classList.contains('fa-regular') ? -1 : 1;

  
    const likeButton = document.getElementById('likeButton');
    const likeCountElement = document.querySelector('.like-count');

    likeButton.classList.toggle('fa-regular', likeCount === 0);
    likeButton.classList.toggle('fa-solid', likeCount > 0);

    likeCountElement.textContent = likeCount;
}

// hero animation

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

// <!-- our Customer reviews -->
const reviewsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateReviews();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const reviewsTargetElement = document.querySelector('.ice');
reviewsObserver.observe(reviewsTargetElement);

function animateReviews() {
  anime.timeline({
    easing: 'easeInOutQuad',
    duration: 1500,
  })
  .add({
    targets: '.jul',
    opacity: [0, 1],
    translateY: [-50, 0],
  })
  .add({
    targets: '.rev1',
    opacity: [0, 1],
    translateX: [-50, 0],
    rotate: [0, 3],
  }, '-=1000')
  .add({
    targets: '.rev2',
    opacity: [0, 1],
    translateX: [-10, 0],
    rotate: [0, -3],
  }, '-=1000')
  .add({
    targets: '.img2',
    opacity: [0, 1],
    translateX: [50, 0],
    rotate: [0, -2],
  }, '-=1000');
}

//  "Events & Catering" section
const eventsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateEvents();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const eventsTargetElement = document.querySelector('.event');
eventsObserver.observe(eventsTargetElement);

function animateEvents() {
  anime.timeline({
    easing: 'easeInOutQuad',
    duration: 1200,
  })
  .add({
    targets: '.img3',
    opacity: [0, 1],
    translateX: [-100, 0],
 
  })
  .add({
    targets: '.txt1',
    opacity: [0, 1],
    translateX: [100, 0],
  }, '-=800')
  .add({
    targets: '.txt2',
    opacity: [0, 1],
    translateX: [80, 0],
  }, '-=500')
  .add({
    targets: '.buttons',
    opacity: [0, 1],
    translateX: [50, 0],
  }, '-=500');
}

// <!-- shop -->

const shopObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateShop();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const shopTargetElement = document.querySelector('.all-carusel2');
shopObserver.observe(shopTargetElement);   

function animateShop() {
  anime.timeline({
    easing: 'easeInOutQuad',
    duration: 1000,
  })
  .add({
    targets: '.flavors',
    opacity: [0, 1],
    translateY: [-100, 0],
  })
  .add({
    targets: '.ice2',
    opacity: [0, 1],
    translateY: [100, 0],
  }, '-=800')
  .add({
    targets: '.ice3',
    opacity: [0, 1],
    translateY: [80, 0],
  }, '-=500')
  .add({
    targets: '.ice4',
    opacity: [0, 1],
    translateY: [50, 0],
  }, '-=500')
  .add({
    targets: '.ice5',
    opacity: [0, 1],
    translateY: [50, 0],
  }, '-=500')
  .add({
    targets: '.img4',
    opacity: [0, 1],
    translateY: [50, 0],
  }, '-=500');
}

// <!-- footer -->

const footerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateFooter();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const footerTargetElement = document.querySelector('.sub');
footerObserver.observe(footerTargetElement);

function animateFooter() {
  anime.timeline({
    easing: 'easeInOutQuad',
    duration: 900,
  })
  .add({
    targets: '.txt4',  
    opacity: [0, 1],
    translateY: [50, 0],
  })
  .add({
    targets: '.email',  
    opacity: [0, 1],
    translateY: [50, 0],
  })
  .add({
    targets: '.fot',  
    opacity: [0, 1],
    translateY: [50, 0],
  });
}