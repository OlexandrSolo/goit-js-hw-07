const elements={
inputLabel: document.getElementById('name-input'),
userName: document.getElementById('name-output')
}

elements.inputLabel.addEventListener('change', getUserInput);
const defaultName = elements.userName.textContent;

function getUserInput(e) {
    e.preventDefault();
    const outputText = e.currentTarget.value.trim()
    elements.userName.innerHTML = outputText || defaultName;
}