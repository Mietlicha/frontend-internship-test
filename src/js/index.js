const clickMe = document.querySelector('#show-popup-form');
const popup = document.querySelector('.popup');
const popupEscape = document.querySelector('.popup-escape');
const form = document.querySelector('.popup__form');
const thank = document.querySelector('.thank-message');

clickMe.addEventListener('click', () => {
  popup.classList.add('animation-reverse');
  setTimeout(() => popup.classList.add('show'), 200);
  setTimeout(() => popup.classList.remove('animation-reverse'), 300);
});

popupEscape.addEventListener('click', () => {
  setTimeout(() => popup.classList.remove('show'), 200);
  setTimeout(() => form.reset(), 300);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  popup.classList.add('animation');
  clickMe.classList.add('hide');
  thank.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 3000);
});
