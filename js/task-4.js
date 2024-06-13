const form = document.querySelector('.login-form')

// console.dir(form.elements[0]);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const elementsForm = [...form.elements]
;
    elementsForm.forEach(ele => {
console.log(ele.input);
        if (!ele.value.trim()) {
            alert('All form fields must be filled in');
        }
        console.log(ele.value);
        
    })

    // console.log(elementsForm)
})