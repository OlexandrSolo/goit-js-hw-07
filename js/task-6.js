const MIN_SIZE = 1;
const MAX_SIZE = 100;

const elements = {
    itemBox: document.getElementById('boxes'),
    userInput: document.getElementById('controls').children[0],
    createElements: document.getElementById('controls').children[1],
    clearElements: document.getElementById('controls').children[2]
}

elements.createElements.addEventListener('click', createBoxes);
elements.clearElements.addEventListener('click', destroyBoxes);

function createBoxes() {
    const userSize = elements.userInput.value;
    if (isAmount(userSize)) {
        elements.userInput.value = '';
        return elementBox(userSize)
    }
    elements.userInput.value = '';
    return alert('кількість елементів виходить за межі від 1 до 100')
}

function destroyBoxes() {
    elements.itemBox.innerHTML = ''
}

function elementBox(amount) {
    const elementBox = [];
    const previousElement = isEmpty()
    console.log(previousElement);
    let multiplier = previousElement || 30;
    for (let i = 1; i <= amount; i += 1){
        const randomColor = getRandomHexColor();
        elementBox.push(`<div style="width:${multiplier}px; height:${multiplier}px; background-color: ${randomColor};"></div>`)
        multiplier += 10;
    }
    return elements.itemBox.insertAdjacentHTML('beforeend', elementBox.join(''));
}

function isAmount(size) {
    return size>=MIN_SIZE && size<=MAX_SIZE ? true : false
}

function isEmpty(){
    if(elements.itemBox.children.length){
        return (elements.itemBox.children.length * 10) + 30
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

isEmpty()