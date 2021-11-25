const slider = document.getElementById('charAmtRng');
const number = document.getElementById('charAmtNum');
const form = document.getElementById('passwordgeneratorform');
const includeUppercaseElement = document.getElementById('incUppercase');
const includeLowercaseElement = document.getElementById('incLowercase');
const includeNumberElement = document.getElementById('incNumbers');
const includeSymbolElement = document.getElementById('incSymbols');
const passwordDisplay = document.getElementById('passwordDisplay');

const UPPERCASE_CHAR_CODES = arrayLowToHigh(65,90);
const LOWERCASE_CHAR_CODES = arrayLowToHigh(97,122);
const NUMBER_CHAR_CODES = arrayLowToHigh(48,57);
const SYMBOL_CHAR_CODES = arrayLowToHigh(33, 47).concat( arrayLowToHigh(58, 64)).concat( arrayLowToHigh(91, 96)).concat( arrayLowToHigh(123,126));

slider.addEventListener('input', copyLength);
number.addEventListener('input', copyLength);

function copyLength(e) {
    const value = e.target.value;
    slider.value = value;
    number.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const charAmount = number.value
    const includeUppercase = includeUppercaseElement.checked
    // const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumberElement.checked
    const includeSymbols = includeSymbolElement.checked
    const password = generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    const passwordCharacters = [];
    for(let i=0; i<charAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}
function arrayLowToHigh(low, high){
    const array = [];
    for(let i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}