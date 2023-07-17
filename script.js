// Assignment Code
var generateBtn = document.querySelector("#generate");
//I need to write out several arrays to include into the password array
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");;
  
  passwordText.value = password;
}
function generatePassword() {

window.alert("Ready to get started? I just need to ask a couple of questions!");

//Empty array to store chars for password
var passwordArray = [];

//I need prompts to describe the parameters of the password to be generated, via user input 


//first prompt is uppercase 
var hasUpper = window.confirm("Should the password include uppercase letters?");
if (hasUpper) {
  passwordArray = passwordArray.concat(upperCase);
}

//second prompt is including lowercase letters
var hasLower = window.confirm("Should the password include lowercase letters?");
if (hasLower) {
  passwordArray = passwordArray.concat(lowerCase);
}

//third prompt will be numeric values, which will add a numeric array to the password array
var hasNumbers = window.confirm("Should the password include numeric characters?");
if (hasNumbers) {
  passwordArray = passwordArray.concat(numbers);
}
//fourth prompt will add a special characters array to password array
var hasSpecial = window.confirm("Should the password include special characters?");
if (hasSpecial) {
  passwordArray = passwordArray.concat(specialChars);
}
//Last prompt should be length of password, between 8 and 128
// this answer should plug into passwordArray

var passwordLength = window.prompt("How long should the password be? Please enter a numeric value between 8 and 128")
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please enter a number between 8 and 128.");
  return;
}
if (isNaN(passwordLength)){
  window.alert("Please enter numbers only. Try again!");
  return;
}



  var password = " ";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    password += passwordArray[randomIndex];
  }
  console.log(password)
  return password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
