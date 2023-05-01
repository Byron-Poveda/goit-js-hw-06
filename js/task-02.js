const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById("ingredients");
ingredients.map(element =>{
  const li = document.createElement('li');
  li.classList.add("item")
  li.textContent = element
  list.append(li)
});