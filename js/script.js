const nav    = document.getElementById("nav-links");
const burger = document.getElementById("burger");
const prev   = document.getElementById("prev");
const next   = document.getElementById("next");
const slides = document.getElementsByClassName("mySlides");

var slideIndex = 1;

function showSlides() {
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
} 

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function toggleMenu() {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("crossed_line");
}

burger.addEventListener("click", toggleMenu);
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

showSlides();