let spanIterable = document.querySelector("#value");
let counterValue = 0;
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanIterable.textContent = counterValue;
});
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    spanIterable.textContent = counterValue;
});
