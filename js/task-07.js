// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, 
//  перетягуючи повзунок, буде змінюватися розмір тексту.

const inputSize = document.querySelector('#font-size-control');
const text= document.querySelector('#text');

inputSize.addEventListener("input", () => (text.style.fontSize = `${inputSize.value}px`));
