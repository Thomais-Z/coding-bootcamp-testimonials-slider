const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const shift = document.querySelector('.shift');
const shift2 = document.querySelector('.shift2');
const tanya = document.querySelector('.tanya');
const john = document.querySelector('.john');
pressedBtn = true;

const testimonialContainer = document.querySelector('.testimonial-container');

// true for Tanya false for John
btnPrev.addEventListener('click', (e) => {
  e.preventDefault();
  shift.classList.toggle('hidden');
  shift2.classList.toggle('hidden');
  tanya.classList.toggle('hidden');
  john.classList.toggle('hidden');
});
btnNext.addEventListener('click', (e) => {
  e.preventDefault();
  shift.classList.toggle('hidden');
  shift2.classList.toggle('hidden');
  tanya.classList.toggle('hidden');
  john.classList.toggle('hidden');
});
