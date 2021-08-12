
// MENU HAMBURGER TOGGLE//
const hamburgerBtn = document.querySelector('.menu-hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', () =>{
  hamburgerBtn.classList.toggle('open');
  nav.classList.toggle('nav-open');
  body.classList.toggle('scroll');
});