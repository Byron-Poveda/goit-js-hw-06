const countItem = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${countItem.length}`);
for (let i = 0; i < countItem.length; i += 1) {
    const iterable = countItem[i];
    const title = iterable.querySelector("h2").textContent;
    const countLi = iterable.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${countLi}`);
}