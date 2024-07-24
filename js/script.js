
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function updateCarousel() {
  const width = carouselItems[0].offsetWidth * 2;
  carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
  currentIndex =
    currentIndex === Math.ceil(carouselItems.length / 2) - 1
      ? 0
      : currentIndex + 1;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    currentIndex === 0
      ? Math.ceil(carouselItems.length / 2) - 1
      : currentIndex - 1;
  updateCarousel();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

window.addEventListener("resize", updateCarousel);
updateCarousel(); 
setInterval(nextSlide, 4000); 


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links-hamburger');

  
  function resetNavLinks() {
    if (window.innerWidth > 667) {
      navLinks.style.display = 'none';
    }
  }

  hamburger.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    console.log(navLinks.style.display);
    hamburger.classList.toggle('open');
  });

  window.addEventListener('resize', resetNavLinks);

  resetNavLinks();
});
