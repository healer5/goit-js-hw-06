function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const changeColorButton = document.querySelector('.change-color');
const changeColor = document.querySelector('.color');
const body = document.querySelector('body');

changeColorButton.addEventListener('click', () => {
  const color = getRandomHexColor(); 
  body.style.background = color; 
  bgrColor.textContent = color;
});

