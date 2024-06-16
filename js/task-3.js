const inputLabel = document.getElementById('name-input');
const userName = document.getElementById('name-output')

inputLabel.addEventListener('change', getUserInput);
const defaultName = userName.textContent;

function getUserInput(e) {
    e.preventDefault();
    const outputText = e.currentTarget.value.trim()
    userName.innerHTML = outputText || defaultName;
}