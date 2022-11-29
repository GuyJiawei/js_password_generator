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
console.log("validCharacters=", validCharacters);
validCharacters = validCharacters.concat(lowerCaseCharacters);
console.log("validCharacters=", validCharacters);

var addUpper = document.querySelector("#includeUppercase");
var addNumbers = document.querySelector("#includeNumbers");
var addSpecChar = document.querySelector("#includeSpecialCharacters");

// Assignment Code
var generateBtn = document.querySelector("#generate");

addUpper.addEventListener("click", function() {
  console.log("addUpper callback")
  console.log(validCharacters)
  if (addUpper.checked === true) {
    validCharacters = validCharacters.concat(upperCaseCharacters);
  }
})
addNumbers.addEventListener("click", function() {
  console.log("addNumbers callback")
  console.log(validCharacters)
  if (addNumbers.checked === true) {
    console.log(addNumbers, " =addNumbers")
    validCharacters = validCharacters.concat(numbers);
  }
})
addSpecChar.addEventListener("click", function() {
  console.log("addSpecChar callback")
  console.log(validCharacters)
  if (addSpecChar.checked === true) {
    validCharacters = validCharacters.concat(specialCharacters);
  }
})
function generatePassword() {
    //pass passwordLength
    //pass includeLowercase true/false
    //pass includeUppercase true/false
    //pass includeNumbers true/false
    //pass includeSpecialCharacters true/false
    passwordLength= document.getElementById("numberClick").value;
    console.log("passwordLength = ", passwordLength)
    console.log("validCharacters=", validCharacters);
    
    console.log("validCharacters=", validCharacters);
    
    
    console.log("validCharacters=", validCharacters);
    var randomPassword = "";
    for(var i = 0; i < passwordLength; i++)
    {
      var index = Math.floor(Math.random() * validCharacters.length);
      console.log("index = ", index);
      randomPassword += validCharacters[index]
      console.log(randomPassword);
    }
    console.log(randomPassword);
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
    
    //if statment?
    // document.getElementById("includeUppercase").checked;
    // validCharacters= document.getElementById("includeNumbers").checked;
    // validCharacters= document.getElementById("includeSpecialCharacters").checked;
    // //eventlistener to get values for the rest of the checkboxes
    //depending on the values create super array
    //using for (var i = 0; i < passwordLength; i++)
    //generate random number between 0 and validCharacters.length
    //build string using random number as index of validCharacters
 
    //password = password + validCharacters[i]
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
