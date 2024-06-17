const elements = {
  randomColor: document.querySelector('.change-color'),
  labelColor: document.querySelector('.color'),
};

elements.randomColor.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  const color = getRandomHexColor();
  elements.labelColor.textContent = color;
  document.body.style.backgroundColor = color;
  elements.labelColor.style.color = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
