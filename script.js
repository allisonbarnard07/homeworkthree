// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


function generatePassword() {
    var result = "";

    var passwordLength = 0;

    while (passwordLength > 128 || passwordLength < 8) {
        passwordLength = prompt("How many characters would you like your password to be? (Between 8 and 128)");

        if (passwordLength > 128 || passwordLength < 8) {
            alert("Password must be between 8 - 128 characters.");
        }
    }
    var options = [];

    while (options.length == 0) {
        options = [];
    var includeUpper = confirm("Would you like to include Uppercase letters?");
    var includeLower = confirm("Would you like to include lower case letters?");
    var includeNumbers = confirm("Would you like to inlclude numbers?");
    var includeSpecial = confirm("Would you like to include special characters?");

    if (includeUpper) {
        options = options.concat(uppercase);
    }

    if (includeLower) {
        options = options.concat(lowercase);
    }

    if (includeNumbers) {
        options = options.concat(numbers);
    }

    if (includeSpecial) {
        options = options.concat(special);
    }

    if (options.length == 0) {
        alert("You must select at least one option");
    }
}

for (i = 0; i < passwordLength; i++) {
    result = result + options[Math.floor(Math.random() * options.length)];
}

return result;
}

generateBtn.addEventListener("click", writePassword)
