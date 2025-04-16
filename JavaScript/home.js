
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".choose-item");
    items.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = "translateY(20px)";
      setTimeout(() => {
        item.style.transition = "all 0.6s ease";
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, index * 200);
    });
  });
  

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Appointment Booked Successfully!');
  });
  


  const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentSlide = 0;

const updateCarousel = () => {
  const slideWidth = carousel.querySelector('.testimonial-card').offsetWidth;
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
};

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : 2;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide < 2) ? currentSlide + 1 : 0;
  updateCarousel();
});

// Handle responsiveness
window.addEventListener('resize', updateCarousel);
