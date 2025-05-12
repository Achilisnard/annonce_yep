
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");
slides.forEach((slide, index) => {
  slide.style.display = index === 0 ? "block" : "none";
});
function changeSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}



