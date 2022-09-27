// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector("#value");

buttonDecrement.addEventListener("click", onDecrementClick);
buttonIncrement.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
function onIncrementClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}