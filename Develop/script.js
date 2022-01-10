// Assignment code here
// function to generate a random numeric value
//var randomNumber = function(min, max) {
  //var value = Math.floor(Math.random() * (max - min + 1) + min);

  //return value;
//};

var generatePassword = function() {
  
  //obtain password length min 8 max 129 characters
  var range = "";

  while (range === "" || range === null) {
    var characterRange = prompt("How many characters would you like your password to contain?");

    if (isNaN(characterRange)) {
      window.alert("Password length must be provided as a number.");
    } else if (characterRange > 129) {
      window.alert("Password length must be less than 129 characters.");
    } else if (characterRange === null) {
      return; 
    } else if (characterRange < 8) {
      window.alert("Password length must be at least 8 characters.");
    } else {
      range = characterRange;
      console.log("Your password length is " + range);
    }
  }
  

  //ask about including special characters
  var specialChar = window.confirm("Click OK to confirm including special characters.");

    if (specialChar) {
      console.log("include special characters");
    } else {
      console.log("do not include special characters");
    }

      //ask about including numeric characters
  var numericChar = window.confirm("Click OK to confirm including numeric characters.");

    if (numericChar) {
      console.log("include numeric characters");
   } else {
      console.log("do not include numeric characters");
    }

    //ask about including uppercase characters
  var upperChar = window.confirm("Click OK to confirm including uppercase characters.");

    if (upperChar) {
      console.log("include uppercase characters");
    } else {
      console.log("do not include uppercase characters");
    }

    //ask about including lowercase characters
  var lowerChar = window.confirm("Click OK to confirm including lowercase characters.");

  if (lowerChar) {
    console.log("include lowercase characters");
  } else {
    console.log("do not include lowercase characters");
  }

for ( var i = 0; i < length; i++) {
  var randomNumber = Math.floor(Math.random() * letters.length);
  console.log(randomNumber);
}

var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
//var password = "";
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
