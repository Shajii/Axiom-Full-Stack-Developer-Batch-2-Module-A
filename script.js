const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value === '') {
        showError(input, getFieldId(input)+ " is required!")
    } else if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, getFieldId(input) + " is not valid")
    }
}

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value === '') {
            showError(input, getFieldId(input)+ " is required!")
        } else {
            showSuccess(input);
        }
    });
}

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, getFieldId(input)+ " need to be at least " + min + " Characters")
    } else if (input.value.length > max) {
        showError(input, getFieldId(input)+ " need to be less than " + max + " Characters")
    } else {
        showSuccess(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Pass don't match")
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username,3,10);
    checkLength(password,6,10);  
    checkEmail(email); 
    checkPasswords(password, password2);
  
});
