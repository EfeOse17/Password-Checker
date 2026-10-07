let passwordInput = document.getElementById("passwordInput");
let checkButton = document.getElementById("checkButton");
let result = document.getElementById("result");

    checkButton.addEventListener("click", function() {
        let passwordCheckValue = passwordInput.value;
        let message = "";

            // Scans the length of the password
            if(passwordCheckValue.length < 8) {
                message += "❌Password is too short. It must be at least 8 characters long.<br>";
            } else {
                message += "✅Password is long enough.<br>";
            }

            // Scans if there is a number
            let hasNumber = false;
            let numberCheck = 0;
            while( numberCheck < passwordCheckValue.length) {
                if(!isNaN(passwordCheckValue[numberCheck])) {
                    hasNumber = true;
                    console.log(passwordCheckValue[numberCheck]);
                }
                numberCheck++;
            }

            if(hasNumber){
                message += "✅Password has a number.<br>";
            } else {
                message += "❌Password must contain at least a number.<br>";
            }

            //Scans if there is an uppercase
            let hasUpperCase = false;
            let upperCaseCheck = 0;
                while(upperCaseCheck < passwordCheckValue.length) {
                    if(
                        passwordCheckValue[upperCaseCheck] === passwordCheckValue[upperCaseCheck].toUpperCase() && passwordCheckValue[upperCaseCheck] !== passwordCheckValue[upperCaseCheck].toLowerCase()
                    ) {
                        hasUpperCase = true;
                        console.log(passwordCheckValue[upperCaseCheck]);
                    }
                    upperCaseCheck++;
                }

                if(hasUpperCase) {
                    message += "✅Password has an uppercase letter.<br>";
                } else {
                    message += "❌Password must contain at least an uppercase letter.<br>";
                }

            //Scans if there is a lowercase
            let hasLowerCase = false;
            let lowerCaseCheck = 0;
                while(lowerCaseCheck < passwordCheckValue.length) {
                    if(
                        passwordCheckValue[lowerCaseCheck] === passwordCheckValue[lowerCaseCheck].toLowerCase() && passwordCheckValue[lowerCaseCheck] !== passwordCheckValue[lowerCaseCheck].toUpperCase()
                    ) {
                        hasLowerCase = true;
                        console.log(passwordCheckValue[lowerCaseCheck]);
                    }
                    lowerCaseCheck++;
                }

                if(hasLowerCase) {
                    message += "✅Password has a lowercase letter.<br>";
                } else {
                    message += "❌Password must contain at least a lowercase letter.<br>";
                }

                //Scans if there is a special character
                let hasSpecialCharacter =false;
                let specialCaseCheck = 0;
                    while(specialCaseCheck < passwordCheckValue.length) {
                        let character = passwordCheckValue[specialCaseCheck];
                        if(
                            isNaN(character) && character === character.toLowerCase() && character === character.toUpperCase()
                        ) {
                            hasSpecialCharacter = true;
                            console.log(character);
                        }
                        specialCaseCheck++;
                    }

                    if(hasSpecialCharacter) {
                        message += "✅Password has a special character.<br>";
                    } else {
                        message += "❌Password must contain a special character.<br>";
                    }

                result.innerHTML = message;
    });