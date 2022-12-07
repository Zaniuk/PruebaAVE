// Result elements
const passwordLength = document.getElementById("length");
const passwordUppercase = document.getElementById("uppercase");
const passwordLowercase = document.getElementById("lowercase");
const passwordNumbers = document.getElementById("numbers");
const passwordConsecutive = document.getElementById("consecutive-characters");
const noZero = document.getElementById("nozero");
const noSpaces = document.getElementById("nospaces");
const isValid = document.getElementById("isvalid");
// Buttons elements
const validPasswordButton = document.getElementById("truthy-password");
const invalidPasswordButton = document.getElementById("falsy-password");
const validPassword = 'Aa153!n@#%9kf$?4hj'
const invalidPassword = 'Aa1!@#$%&*-_+=?'

//Print Helper
const printResult = (result) => {
    passwordLength.innerText= `Longitud: ${result.length}`
    passwordUppercase.innerText= `Mayúsculas: ${result.uppercase}`
    passwordLowercase.innerText= `Minúsculas: ${result.lowercase}`
    passwordConsecutive.innerText= `No contiene carácteres consecutivos: ${result.repeatedCharacters}`
    passwordNumbers.innerText= `Contiene números: ${result.numbers}`
    noZero.innerText= `No ceros: ${result.noZero}`
    noSpaces.innerText= `No espacios: ${result.noSpaces}`
    isValid.innerText= `Es válido: ${result.isValid}`
}

// Event listeners

validPasswordButton.addEventListener("click", () => {  
    printResult(validator(validPassword))
})
invalidPasswordButton.addEventListener("click", () => {
    printResult(validator(invalidPassword))
})