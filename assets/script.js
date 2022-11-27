
function genRandomNumber() {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return numbers[Math.floor(Math.random() * numbers.length)];
}


function genRandomCharacter() {
    var specialCharacters = ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'];
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

function genRandomLowercase() {
    var lowerCaseCharacters =['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'];
    return lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
}

function genRandomUppercase() {
    var upperCaseCharacters = ['A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'];
return upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    //pass passwordLength
    //pass includeLowercase true/false
    //pass includeUppercase true/false
    //pass includeNumbers true/false
    //pass includeSpecialCharacters true/false
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
