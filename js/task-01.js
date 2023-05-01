const countItem = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${countItem.length}`);
countItem.forEach((element) => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('ul > li').length}`); 
});
