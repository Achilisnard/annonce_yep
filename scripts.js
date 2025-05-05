let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");

function changeSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

// Function to load text from a file and display it in an element
function loadTextFromFile(filePath, elementId) {
  fetch(filePath)
    .then((response) => response.text())
    .then((text) => {
      document.getElementById(elementId).innerText = text;
    });
}

// Load text for the "A propos" section
loadTextFromFile("text/a-propos.txt", "a-propos");