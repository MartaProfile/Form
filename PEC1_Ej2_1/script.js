
// Elementos del DOM

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const age = document.getElementById('age');



// Función para mostrar mensajes de error

function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = 'control-formulario error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}



// Función para mostrar que fue exitoso

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'control-formulario success';
}



// Función para validar el email

function EmailValido(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}



// Función para validar la contraseña con los parámetros dados

function isValidPassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)\_\+\-=\{\}\[\]\|\\:;"'<>,\.\?\/])[A-Za-z\d!@#\$%\^&\*\(\)\_\+\-=\{\}\[\]\|\\:;"'<>,\.\?\/]{8,}$/;
    return re.test(password);
}



// Función para validar los años del usuario entr elos parámetros dados

function isAgeValid(age) {
    return age >= 0 && age < 1000;
}



// Evento del formulario

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'El nombre de usuario es obligatorio');
    } else {
        showSuccess(username);
    } 


    if (email.value === '') {
        showError(email, 'El email es obligatorio');
    } else if (!EmailValido(email.value)) {
        showError(email, 'El email no es válido');
    } else {
        showSuccess(email);
    } 

    
    if (age.value === '') {
        showError(age, 'La edad es obligatoria');
    } else if (!isAgeValid(age.value)) {
        showError(age, 'La edad debe ser mayor o igual a 0 e inferior a 1000');
    } else {
        showSuccess(age);
    }


    if (password.value === '') {
        showError(password, 'La contraseña es obligatoria');
    } else if (!isValidPassword(password.value)) {
        showError (password, 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un signo especial')
    } else {
        showSuccess(password);
    } 


    if (confirmPassword.value === '') {
        showError(confirmPassword, 'Debes confirmar tu contraseña');
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Las contraseñas no coinciden');
    } else {
        showSuccess(confirmPassword);
    } 

})