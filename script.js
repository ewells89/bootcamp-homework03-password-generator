// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Returns the value of the generated password when clicked. 
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
 
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
      // returns the mix of character types based on the user's selection above.
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
      alert("Please specify a valid password length.");
    };  

    return passwordString.substring(0,passwordLength);      // added a substring method to truncate the value returned by the for loop
};

// Callback Functions
// this function returns the special characters based on user's selection.
function getSpecial(){
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return special[Math.floor(Math.random() * special.length)];
};

// this function returns numeric characters based on user's selection.
function getNumeric(){
  var number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
};

// this function returns lowercase characters based on user's selection.
function getLower(){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
};

// this function returns uppercase characters based on user's selection.
function getUpper(){
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
};