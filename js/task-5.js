const randomColor = document.querySelector('.change-color')
const labelColor = document.querySelector('.color');

randomColor.addEventListener('click', handleClick)

function handleClick(e) {
    e.preventDefault();
    const color = getRandomHexColor();
    labelColor.textContent = color;
    document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
