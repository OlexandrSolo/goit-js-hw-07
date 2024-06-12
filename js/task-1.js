const getElement = document.querySelectorAll('.item');

function searchElement(arr) {
    const newArr = [...arr];
    console.log(`TASK-1 ==> 
    Number of categories: ${newArr.length}`);
    newArr.forEach(colection => {
       getMessages(colection.children);
    })
}

function getMessages(arr) {
    const [title, list] = arr;
    let messages = `
    Category: ${title.textContent}
    Elements: ${list.children.length}`
    console.log(messages);
}

searchElement(getElement)