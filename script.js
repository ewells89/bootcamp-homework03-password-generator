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
 
  // Variable Declarations

    // password length
    var passwordLength = prompt("How long would you like your password to be (between 8 and 128 characters)?.");
      console.log(passwordLength);

    // string for the concatenated values based on the user's inputs
    var passwordString = "";

  // Function Logic
    if(passwordLength > 8 && passwordLength < 128){
      console.log("the password length is acceptable");

      // VARIABLES

        // confirm special characters
          var specialCharacters = confirm("Would you like your password to contain special characters?");
          console.log(specialCharacters);

        // confirm numeric
        var numericValues = confirm("Would you like your password to contain numeric values?");
          console.log(numericValues);

        // confirm lowercase
        var lowercase = confirm("Would you like your password to contain lowercase letters?");
          console.log(lowercase);

        // confirm uppercase
        var uppercase = confirm("Would you like your password to contain uppercase letters?");
          console.log(uppercase);
      
      //LOGIC 

      for(var i = 0; i < passwordLength; i++){
        if(specialCharacters){
          passwordString = passwordString + getSpecial();
          }else{};

        if(numericValues){
          passwordString = passwordString + getNumeric();
        }else{};

        if(lowercase){
          passwordString = passwordString + getLower();
        }else{};

        if(uppercase){
          passwordString = passwordString + getUpper();
        }else{};

      }
      console.log(passwordString);
    } else{
      console.log("please specify an accepted password length.");
      alert("Please specify an accepted password length.");
    };  

    return passwordString;
};

// Callback Functions
function getSpecial(){
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return special[Math.floor(Math.random() * special.length)];
};

function getNumeric(){
  var number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
};

function getLower(){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
};

function getUpper(){
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
};