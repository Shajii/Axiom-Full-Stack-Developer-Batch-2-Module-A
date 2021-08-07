// DOM Objects
const toggle = document.getElementById('toggle');
const openSignUp = document.getElementById('signUpOpen');
const closeSignUp = document.getElementById('signUpClose');
const container = document.getElementById('container');


// Event Listeners
toggle.addEventListener('click', () => {
    document.body.classList.toggle('modifyNav');
})


openSignUp.addEventListener('click', () => {
    container.classList.add('modifyContainer');
})

closeSignUp.addEventListener('click', () => {
    container.classList.remove('modifyContainer');
})
