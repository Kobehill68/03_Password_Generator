// Assignment Code
var generateBtn = document.querySelector("#generate");


// Added arrays 
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "?", "=", "+", "-", ".", "[", "]", "/","|", "{", "}", ";", ":"];
var newPassword = "";
var combineArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Will generate a password based on the user input
function generatePassword() {
  newPassword = ""; 
  combineArray = [];

  // will ask the user to choose how long there password will be
  var passwordLength = prompt("Please enter a number between 8 and 128 for your password length");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //Tis will alert the user if they did not choose a number between the set values
    alert("You must choose a number between 8 and 128 !");
  } 
  else {
    var Uppercase = confirm("Would you like to include UPPER case characters?");
    var LowerCase = confirm("Would you like to include lower case characters?");
    var Number = confirm("Would you like to include numbers?");
    var Special = confirm("Would yo u like to include Special charaters?"); 

    // If ther is no selction made it will tell the user that they must make at least one selection
    if (!Uppercase && !LowerCase && !Number && !Special){
      alert("You must choose at least one character selection!")
    } 
    else{
      if(Uppercase) {
        combineArray = combineArray.concat(upCase);
      }

      if(LowerCase) {
        combineArray = combineArray.concat(lowCase);
      }

      if(Number) {
        combineArray = combineArray.concat(num);
      }

      if(Special) {
        combineArray = combineArray.concat(specialChar);
      }

      // This is looking through the arrays for the password length the user selected 
      for(i = 0; i <passwordLength; i++) {
        newPassword += combineArray[Math.floor(Math.random() * combineArray.length)];
      }

    }
    // This will reture the new password to the user
    return newPassword;

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
