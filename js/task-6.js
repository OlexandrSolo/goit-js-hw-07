const MIN_SIZE = 1;
const MAX_SIZE = 100;

const elements = {
    itemsBox: document.getElementById('boxes'),
    userInput: document.getElementById('controls').children[0],
    createElements: document.getElementById('controls').children[1],
    clearElements: document.getElementById('controls').children[2]
}

elements.createElements.addEventListener('click', createBoxes);
elements.clearElements.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    elements.itemsBox.innerHTML = '';
    elements.userInput.value = 0;
}

function createBoxes() {
    const userSize = elements.userInput.value;
    const newArr = [];
    let width = 30;
    let height = 30;
    if(!isAmount(userSize)){
       return alert('кількість елементів виходить за межі від 1 до 100')
    }
    
    for(let i = 1; i<= userSize; i++){
        newArr.push(`<div style="width:${width}px; height:${height}px; background-color: ${getRandomHexColor()};"></div>`)
        width+=10;
        height+=10;
    }
    elements.itemsBox.insertAdjacentHTML('beforeend', newArr.join(''))
}


function isEmpty(list){
    if(list.length){
        return false
    }
    return true
}

function isAmount(size){
    return (size>=MIN_SIZE) && (size<=MAX_SIZE) ? true : false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
