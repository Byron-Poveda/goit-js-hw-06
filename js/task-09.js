const body = document.querySelector('body');
const spanChange = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', function () {
  body.style.backgroundColor = getRandomHexColor();
  spanChange.textContent = body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
