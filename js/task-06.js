// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onCheckInputLength);

function onCheckInputLength() {
    if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
      } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
      }
}

