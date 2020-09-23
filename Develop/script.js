// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write a function called generatePassword.  everything else is done. don't worry about DOM manipulation.  it has to return a value--a string for the password.

function generatePassword () {
  // return "A string for a password.";

  


};