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

    // string for the concatenated values based on the user's inputs
    var passwordString = "";

  // Function Logic
    if(passwordLength > 8 && passwordLength < 128){
      console.log("the password length is acceptable");
      if(specialCharacters){
        for(var i = 0; i < passwordLength; i++){
          passwordString = passwordString + getSpecial();
        }
        console.log(passwordString);
      }else{
      };


      if(numericValues){

      }else{
      };


      if(lowercase){

      }else{
      };

      if(uppercase){

      }else{
      };


    } else{
      console.log("please specify an accepted password length.");
    };  

    return passwordString;
};


function getSpecial(){
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return special[Math.floor(Math.random() * special.length)];

};

