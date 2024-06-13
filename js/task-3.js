const inputLabel = document.getElementById('name-input');
const userName = document.getElementById('name-output')

// console.log(inputLabel.value);

inputLabel.addEventListener('change', getUserInput);

function getUserInput(e) {
    e.preventDefault();
    const outputText = e.currentTarget.value.trim()
    userName.innerHTML = outputText || userName.textContent;
}