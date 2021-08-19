// MENU HAMBURGER TOGGLE//
const hamburgerBtn = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  nav.classList.toggle("nav-open");
  body.classList.toggle("scroll");
});

//TICKET MANAGMENT PHONE SLIDER
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".slider-button-left");
const nextButton = document.querySelector(".slider-button-right");

// SET SLIDES INLINE POSITION
let pixels = 0;
for (i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translate(${pixels}px)`;
  pixels += 260;
}

//SETTING VARIABLES FOR AUTOSLIDE
let directionFlag = false;
let slideCount = 0;

// FUNCTION MOVING SLIDER TO RIGHT
function moveSliderRight() {
  const currentSlide = sliderTrack.querySelector(".current-slide");
  // check if there is next image
  if (currentSlide.nextElementSibling) {
    const nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
    // get transform translate value from slider
    const transformStyle =
      document.querySelector(".slider-track").style.transform;
    const translateAmount = transformStyle.replace(/[^-?\d.]/g, "");
    const amountToMove = translateAmount - 260;
    sliderTrack.style.transform = `translate(${amountToMove}px)`;
    //if statement to prevent fire multiple intervals by clicking buttons
    if (slideCount < 4) {
      slideCount++;
    }
    if (slideCount == 4) {
      clearInterval(right);
      directionFlag = true;
      autoslide();
    }
  }
}

// FUNCTION MOVING SLIDER TO LEFT
function moveSliderLeft() {
  const currentSlide = sliderTrack.querySelector(".current-slide");
  // check if there is previous image
  if (currentSlide.previousElementSibling) {
    const prevSlide = currentSlide.previousElementSibling;
    currentSlide.classList.remove("current-slide");
    prevSlide.classList.add("current-slide");
    const transformStyle =
      document.querySelector(".slider-track").style.transform;
    const translateAmount = transformStyle.replace(/[^-?\d.]/g, "");
    const amountToMove = parseInt(translateAmount) + 260;
    sliderTrack.style.transform = `translate(${amountToMove}px)`;
    if (slideCount > 0) {
      slideCount--;
    }
    if (slideCount == 0) {
      clearInterval(left);
      directionFlag = false;
      autoslide();
    }
  }
}

// AUTO SLIDING
function autoslide() {
  if (!directionFlag) {
    right = setInterval(moveSliderRight, 3000);
  } else if (directionFlag) {
    left = setInterval(moveSliderLeft, 3000);
  }
}
autoslide();

//SLIDER BUTTONS FOR SMALLER SCREENS
prevButton.addEventListener("click", moveSliderLeft);
nextButton.addEventListener("click", moveSliderRight);

//USER FLOW ROADMAP

function CheckNext() {
  const inputs = document.querySelectorAll('input[type="radio"]');
  const images = document.querySelectorAll(".user-phone-image");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked == true) {
      if (i == inputs.length - 1) {
        inputs[0].checked = true;
        images[4].classList.remove("active");
        images[0].classList.add("active");
      } else {
        inputs[i + 1].checked = true;
        images[i].classList.remove("active");
        images[i + 1].classList.add("active");
      }
      break;
    }
  }
}

setInterval(CheckNext, 4000);
