const passwordLength = document.getElementById("length");
const passwordUppercase = document.getElementById("uppercase");
const passwordLowercase = document.getElementById("lowercase");
const passwordNumbers = document.getElementById("numbers");
const passwordConsecutive = document.getElementById("consecutive-characters");
const noZero = document.getElementById("nozero");
const noSpaces = document.getElementById("nospaces");
const isValid = document.getElementById("isvalid");
const verificationsElement = document.getElementById("verifications");
const passwordInput = document.getElementById("password-input");


const addColors = (validations) => {
   if (validations.length) {
         passwordLength.classList.add("true");
         passwordLength.classList.remove("false");
   }else{
            passwordLength.classList.add("false");
            passwordLength.classList.remove("true");
   }
    if (validations.uppercase) {
        passwordUppercase.classList.add("true");
        passwordUppercase.classList.remove("false");
    }else{
        passwordUppercase.classList.add("false");
        passwordUppercase.classList.remove("true");
    }
    if (validations.lowercase) {
        passwordLowercase.classList.add("true");
        passwordLowercase.classList.remove("false");
    }else{
        passwordLowercase.classList.add("false");
        passwordLowercase.classList.remove("true");
    }
    if (validations.numbersLength) {
        passwordNumbers.classList.add("true");
        passwordNumbers.classList.remove("false");
    }else{
        passwordNumbers.classList.add("false");
        passwordNumbers.classList.remove("true");
    }
    if (validations.repeatedCharacters) {
        passwordConsecutive.classList.add("true");
        passwordConsecutive.classList.remove("false");
    }else{
        passwordConsecutive.classList.add("false");
        passwordConsecutive.classList.remove("true");
    }
    if (validations.noZero) {
        noZero.classList.add("true");
        noZero.classList.remove("false");
    }else{
        noZero.classList.add("false");
        noZero.classList.remove("true");
    }
    if (validations.noSpaces) {
        noSpaces.classList.add("true");
        noSpaces.classList.remove("false");
    }else{
        noSpaces.classList.add("false");
        noSpaces.classList.remove("true");
    }

        
}

const manipulateDom = (validations) => {
    addColors(validations);
}

passwordInput.addEventListener("input", (e) => {
    //Verifica que se haya introducido un carácter y limpia en caso de que no
    e.target.value.length > 0 ? verificationsElement.classList.remove("hidden") : verificationsElement.classList.add("hidden");
    const validations = validator(e.target.value);
    manipulateDom(validations);
    console.log(validations)
        
});