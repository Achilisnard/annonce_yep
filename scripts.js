
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

// Function to load text from a file and display it in an element
function loadTextFromFile(filePath, elementId) {
  fetch(filePath)
    .then((response) => response.text())
    .then((text) => {
      const pElement = document.querySelector(`#${elementId} p`);
      if (pElement) {
        pElement.innerText = text;
      } else {
        console.error(`Element not found: #${elementId} p`);
      }
    });
}

async function chargerYAML() {
  const response = await fetch('data.yml');
  const yamlText = await response.text();

  const data = jsyaml.load(yamlText);

  document.getElementById('titre').textContent = data.titre;
  document.getElementById('lieu').textContent = data.lieu;
  document.getElementById('contacte').textContent = data.contacte;
  document.getElementById('prix').textContent = data.prix;
  ifram = document.getElementById('map_id');
  ifram.src = data.geolocalisation;

}

chargerYAML();
// Load text for the "A propos" section
loadTextFromFile("text/a-propos.txt", "a-propos");
