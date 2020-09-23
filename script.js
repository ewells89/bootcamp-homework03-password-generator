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

function generatePassword() {
    // return "A string for a password.";
 
      // password length
  var passwordLength = prompt("How long would you like your password to be (between 8 and 128 characters)?.");
    console.log(passwordLength);
  
  // confirm special characters
  var specialCharacters = prompt("Would you like your password to contain special characters?");
    console.log(specialCharacters);

  // confirm numeric
  var numericValues = prompt("Would you like your password to contain numeric values?");
    console.log(numericValues);

  // confirm lowercase
  var lowercase = prompt("Would you like your password to contain lowercase letters?");

  // confirm uppercase
  var uppercase = prompt("Would you like your password to contain uppercase letters?");

  // WHEN I click the button to generate a password

  // THEN I am presented with a series of prompts for password criteria

  // WHEN prompted for password criteria

  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password

  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // WHEN prompted for character types to include in the password

  // THEN I choose lowercase, uppercase, numeric, and/or special characters

  // WHEN I answer each prompt

  // THEN my input should be validated and at least one character type should be selected

  // WHEN all prompts are answered

  // THEN a password is generated that matches the selected criteria

  // WHEN the password is generated

  // THEN the password is either displayed in an alert or written to the page
    
};