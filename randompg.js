const passwordField = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const strengthText = document.getElementById('strengthText');
const strengthBar = document.getElementById('strengthBar');
const generateBtn = document.getElementById('generateBtn');

const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-=\"_+{}[]|:;<>,.?/~`';

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordField.value);
    alert('Password copied!');
});

generateBtn.addEventListener('click', generatePassword);

function generatePassword() {
    let characters = '';
    if (uppercase.checked) characters += upperChars;
    if (lowercase.checked) characters += lowerChars;
    if (numbers.checked) characters += numberChars;
    if (symbols.checked) characters += symbolChars;

    let password = '';
    for (let i = 0; i < lengthSlider.value; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordField.value = password;
    evaluateStrength();
}

function evaluateStrength() {
    let strength = 0;
    if (uppercase.checked) strength++;
    if (lowercase.checked) strength++;
    if (numbers.checked) strength++;
    if (symbols.checked) strength++;

    if (lengthSlider.value >= 12) strength++;
    if (lengthSlider.value >= 18) strength++;

    if (strength >= 5) {
        strengthText.textContent = 'Strong';
        strengthBar.style.background = 'green';
    } else if (strength >= 3) {
        strengthText.textContent = 'Medium';
        strengthBar.style.background = 'orange';
    } else {
        strengthText.textContent = 'Weak';
        strengthBar.style.background = 'red';
    }
}
generatePassword();