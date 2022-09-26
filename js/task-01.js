const catEl = document.querySelector("#categories");
const categories = [...catEl.children];
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.childElementCount} `);
}