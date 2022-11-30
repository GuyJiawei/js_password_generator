var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

var passwordLength = "";

var validCharacters = [];

validCharacters = validCharacters.concat(lowerCaseCharacters);

var addUpper = document.querySelector("#includeUppercase");
var addNumbers = document.querySelector("#includeNumbers");
var addSpecChar = document.querySelector("#includeSpecialCharacters");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Add event listeners to all selectors in the form and pass valid arrays to validCharacters
addUpper.addEventListener("click", function() {
  if (addUpper.checked === true) 
  {
    validCharacters = validCharacters.concat(upperCaseCharacters);
  }
})
addNumbers.addEventListener("click", function() {
  if (addNumbers.checked === true) 
  {
    validCharacters = validCharacters.concat(numbers);
  }
})
addSpecChar.addEventListener("click", function() {
  if (addSpecChar.checked === true) 
  {
    validCharacters = validCharacters.concat(specialCharacters);
  }
})

//define function generatePassword
function generatePassword() {
    passwordLength= document.getElementById("numberClick").value;
    var randomPassword = "";
    //loop to create passwrod of selected length
    for(var i = 0; i < passwordLength; i++)
    //create randomised password from valid characters array
    {
      var index = Math.floor(Math.random() * validCharacters.length);
      randomPassword += validCharacters[index];
    }
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
