// Rotate Logo
let rotation = 0;
function rotateImage() {
    rotation += 360;
    document.getElementById('logo').style.transform = `rotate(${rotation}deg)`;
}

// Login
function login(event) {
    event.preventDefault();

    let errorUsername = '';
    let errorPassword = '';

    errorUsername = validateUsername();
    errorPassword = validatePass();

    document.getElementById('errorUsername').innerHTML = errorUsername;
    document.getElementById('errorPassword').innerHTML = errorPassword;

    if (errorPassword === '' && errorUsername === '') {
        window.location.href = 'about.html';
    }
    
    return errorUsername === '' && errorPassword === '' && true;
}

// Username Validation
function validateUsername() {
    let username = document.getElementById('username').value;
    let errorUsername = '';

    if (username.trim() === '') {
        errorUsername = 'Username are required!'
    }

    else {
        if (username.length < 6) {
            errorUsername = 'Username must be at least 6 characters long.';
        }
    
        else {
            errorUsername = '';
        }
    }

    document.getElementById('errorUsername').innerHTML = errorUsername;

    return errorUsername;
}

// Pass Validation
function validatePass() {
    let password = document.getElementById('pass').value;
    let errorPassword = '';

    if (password.trim() === '') {
        errorPassword = 'Password are required!'
    }

    else {
        var passError = [];

        if (!/[a-z]/.test(password)) {
            passError.push('At least 1 lowercase letter');
        }

        if (!/[A-Z]/.test(password)) {
            passError.push('At least 1 uppercase letter');
        }

        if (!/\d/.test(password)) {
            passError.push('At least 1 number');
        }

        if (!/[@$!%*?&]/.test(password)) {
            passError.push('At least 1 symbol');
        }

        if (passError.length > 0) {
            errorPassword = 'Password must have: ' + passError.join(', ');
        }

        else {
            errorPassword === '';
        }
    }

    document.getElementById('errorPassword').innerHTML = errorPassword;

    return errorPassword;
}

// CapsLock
document.querySelector('#pass').addEventListener('keyup', function (e) {
    if (e.getModifierState('CapsLock')) {
        document.querySelector('#capslock-allert').textContent = 'Caps lock is on!';
    } else {
        document.querySelector('#capslock-allert').textContent = '';
    }
});

// Show & Hide Password
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('pass');
    var showPasswordCheckbox = document.getElementById('showPassword');

    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}