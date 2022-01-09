// Assignment code here
var generatePassword = function() {
  
  //obtain password length min 8 max 129 characters
  var length = "";

  while (length === "" || length === null) {
    var characterLength = prompt("How many characters would you like your password to contain?");

    console.log(characterLength);
    if (isNaN(characterLength)) {
      window.alert("Password length must be provided as a number.");
    } else if (characterLength > 129) {
      window.alert("Password length must be less than 129 characters.");
    } else if (characterLength === null) {
      return; 
    } else if (characterLength < 8) {
      window.alert("Password length must be at least 8 characters.");
    } else {
      length = characterLength;
      console.log("Your password length is " + length);
    }
  }
  

  //ask about including special characters


for ( var i = 0; i < length; i++) {
  //
}
};

// password decisions


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
