// Assignment Code
var generateBtn = document.querySelector("#generate");
//I need to write out several arrays to include into the password array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

window.alert("Ready to get started? I just need to ask a couple of questions!");
//I need a prompt (or several prompts?) describing the parameters of the password to be generated

//second prompt is including lowercase letters
// var hasLower = window.confirm("Should the password include lowercase letters?") - Redundant? Password must include lowercase letters to form body. 

//first prompt is uppercase 
var hasUpper = window.confirm("Should the password include uppercase letters?"){
  if: (hasUpper){
    hasUpper = password.text;
  }
}
if !(hasUpper){

};

//second prompt will be numeric values, which will add a numeric array to the password array
var hasNumbers = window.confirm("Should the password include numeric characters? Press okay!");
//third prompt will add a special characters array to password array
var hasSpecial = window.confirm("Should the password include special characters? Press okay!");

//Last prompt should be length of password, between 8 and 128
// this answer should plug into password.length array. Need a way to keep the answer within those parameters, probably if > < 
var passwordLength = window.prompt("How long should the password be? Please enter a numeric value between 8 and 128");
//when all prompts are answered, all selected arrays should be combined and password will be generated from the "main" array, using .length





// function generatePassword(); !!activate when ready!!

window.alert("Your new password is: " + password)




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

