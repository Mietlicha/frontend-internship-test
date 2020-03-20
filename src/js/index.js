const clickMe = document.querySelector('#show-popup-form');
const popup = document.querySelector('.popup');
const popupEscape = document.querySelector('.popup-escape');
const form = document.querySelector('.popup__form');
const thank = document.querySelector('.thank-message');

const afterSubmit = () => {
  popup.style.display = 'none';
  clickMe.style.display = 'none';
  thank.style.display = 'block';
};

clickMe.addEventListener('click', () => {
  popup.style.display = 'block';
});

popupEscape.addEventListener('click', () => {
  popup.style.display = 'none';
});

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();

  setTimeout(afterSubmit, 3000);
});
