// Write a function that takes user input and creates a password
// based on that input and returns it
var userName = prompt("What's your name?");
var userNumber = prompt("What's your favorite number");
function generatePassword() {
    /****
     * WRITE YOUR CODE HERE
     */
    alert("Hello " + userName + " I am generating you password");
  
    return userName + userNumber;
  }
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
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
  