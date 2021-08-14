
// MENU HAMBURGER TOGGLE//
const hamburgerBtn = document.querySelector('.menu-hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', () =>{
  hamburgerBtn.classList.toggle('open');
  nav.classList.toggle('nav-open');
  body.classList.toggle('scroll');
});

// PHONE SLIDER
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-button-left');
const nextButton = document.querySelector('.slider-button-right');

// SET SLIDES POSITION
let pixels = 0;
for (i=0; i<slides.length; i++) {
  slides[i].style.transform = `translate(${pixels}px)`;
  pixels += 260;
}

//NEXT SLIDE BUTTON
nextButton.addEventListener('click', e => {
  const currentSlide = sliderTrack.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = (nextSlide.firstElementChild.width) * nextSlide.dataset.multiply;
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');

  sliderTrack.style.transform = `translate(-${amountToMove}px)`
})