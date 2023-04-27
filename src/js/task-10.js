function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// entrar a las carrear de google "profesionales"
const inputCreate = document.querySelector([`input`]);
const buttonCreate = document.querySelector(
  'button[data-create]'
);
const div = document.querySelector(`#boxes`)
const buttonDestroy = document.querySelector([`data-destroy`]);
buttonCreate.addEventListener('click', () => {
  
});
function createBoxes(amount){
  const divInsert = document.createElement(`div`)
  divInsert.id = "boxes"
  console.log(divInsert); 
  for (let i = 0; i < amount; i += 1){
    div.after( divInsert);
  }
}
createBoxes(5)
