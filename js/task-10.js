function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputCreate = document.querySelector([`input`]);
const buttonCreate = document.querySelector('button[data-create]');
const div = document.getElementById(`controls`);
const buttonDestroy = document.querySelector([`button[data-destroy]`]);
let allBoxs = document.querySelectorAll('#boxes');
let countWidth = 0;
buttonCreate.addEventListener('click', function () {
  createBoxes(inputCreate.value);
  allBoxs = document.querySelectorAll('#boxes');
});

buttonDestroy.addEventListener('click', function () {
  destroyBoxes(allBoxs.length);
  allBoxs = document.querySelectorAll('#boxes');
});
function createBoxes(amount) {
  let count = allBoxs.length;
  for (let i = 0; i < amount; i += 1) {
    const divInsert = document.createElement(`div`);
    divInsert.id = 'boxes';
    divInsert.style.backgroundColor = getRandomHexColor();
    div.after(divInsert);
    count += 1;
    let dimesionsDiv = count * 10 + 20;
    divInsert.style.width = dimesionsDiv + 'px';
    divInsert.style.height = dimesionsDiv + 'px';
  }
}
function destroyBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    allBoxs[i].remove()
  }
}
