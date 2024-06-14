const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const userData = {
        [e.target.elements.email.name]: e.target.elements.email.value,
        [e.target.elements.password.name]: e.target.elements.password.value
    }
    form.reset();
    if (isEmpty(userData)) {
        console.log('TASK-4 ====>', userData);
        return userData;
    };
}


function isEmpty({email, password}) {
    if (email.trim() === '' && password.trim() === '') {
        alert('All form fields must be filled in')
        return false;
    }
    return true;
}