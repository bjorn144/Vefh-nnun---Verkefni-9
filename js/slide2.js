let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// Show the initial slide
showSlide(slideIndex);

// Show a specific slide
function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === n);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === n);
  });
}

// Change slide (next/prev)
function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
  resetAutoSlide();
}

// Go to a specific slide
function currentSlide(n) {
  slideIndex = n - 1;
  showSlide(slideIndex);
  resetAutoSlide();
}

// Auto slide function
function autoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// Reset auto-slide timer
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000);
}

// Start auto-slide
autoSlideInterval = setInterval(autoSlide, 5000);
