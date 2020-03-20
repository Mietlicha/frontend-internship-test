const clickMe = document.querySelector('#show-popup-form');
const popup = document.querySelector('.popup');
const popupEscape = document.querySelector('.popup-escape');

clickMe.addEventListener('click', () => {
  popup.style.display = 'block';
});

popupEscape.addEventListener('click', () => {
  popup.style.display = 'none';
});
