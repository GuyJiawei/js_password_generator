// Arrays of all possible characters
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

// empty variable to pass selected length to
var passwordLength = "";

// empty to add selected arrays to as the user chooses
var validCharacters = [];

// set default characters to lower case
validCharacters = validCharacters.concat(lowerCaseCharacters);

// variables to target each of the selector checkboxes
var addUpper = document.querySelector("#includeUppercase");
var addNumbers = document.querySelector("#includeNumbers");
var addSpecChar = document.querySelector("#includeSpecialCharacters");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listeners to all selectors in the form and pass valid arrays to validCharacters
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

// define function generatePassword
function generatePassword() {
  // target password length selection box and pass value to passwordLength variable
  // turn passwordLength into an integer
  //if statment to restrict selection to any number between 8 and 128
  passwordLength= parseInt(document.getElementById("numberClick").value);
    if (passwordLength < 8 || passwordLength > 128) 
    {
      alert("Please select a number between 8 and 128");
      return null;
    }
  var randomPassword = "";
  // loop to create password of selected length
  for(var i = 0; i < passwordLength; i++)
  // create randomised password from valid characters array
  {
    var index = Math.floor(Math.random() * validCharacters.length);
    randomPassword += validCharacters[index];
  }
  return randomPassword;
};

{}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
