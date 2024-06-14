const controls = document.getElementById('controls');
const box = document.getElementById('boxes');
controls.addEventListener('click', handleClick)

function handleClick(e) {
    e.preventDefault();
    
    console.dir(e.target);

}



