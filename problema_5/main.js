const validator = (password) => {


    const validateObject = {
      length: false, //Expect this to be true
      uppercase: false, //  Expect this to be true
      lowercase: false, //  Expect this to be true
      numbers: false,  //  Expect this to be true
      numbersLength: false, //  Expect this to be true
      specialCharacters: false, //  Expect this to be true
        repeatedCharacters: true, //  Expect this to be fakse
        noZero: true, 
        noSpaces: true,
    };
    function validatePassword(password, validateObject) {
      let prev = "";
        let numbersCount = 0
      // The password must be at least 16 characters long
      if (password.length >= 16) {
        validateObject.length = true;
      }
      if (password.includes("0")) {
        validateObject.noZero = false;
      }
      if (password.includes(" ")) {
        validateObject.noSaces = false;
      }
    
      for (let i = 0; i < password.length; i++) {
        if (password[i] === prev) {
          validateObject.repeatedCharacters = false;
        }
        if (password[i] === password[i].toUpperCase()) {
            validateObject.uppercase = true;
        }
        if (password[i] === password[i].toLowerCase()) {
            validateObject.lowercase = true;
        }
        switch (password[i]) {
            case "!":
            case "@":
            case "#":
            case "$":
            case "%":
            case "^":
            case "&":
            case "*":
            case "-":
            case "_":
            case "+":
            case "=":
            case "?":
                validateObject.specialCharacters = true;
    
        }
        if (Number.isInteger(parseInt(password[i]))) {
            validateObject.numbers = true;
            numbersCount++;
        }
        if (numbersCount >= 4) {
            validateObject.numbersLength = true;
        }
    
    
        prev = password[i];
      }
      validateObject.isValid = Object.values(validateObject).every((value) => value === true);
      return validateObject
    }
     return validatePassword(password, validateObject)
    }
    