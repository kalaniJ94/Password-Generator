// Assignment Code
var generateBtn = document.querySelector("#generate");
//I need to write out several arrays to include into the password array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialNumbers = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//I need a prompt (or several prompts?) describing the parameters of the password to be generated

//First prompt should be length of password, between 8 and 128
// this answer should plug into password.length array
 .length

//second prompt is lowercase or uppercase (.toUpperCase) or (.toLowerCase)

//third prompt will be numeric values, whish will add a numeric array to the password array

//fourth prompt will add a special characters array to password array

//when all prompts are answered, all selected arrays should be combined and password will be generated from the "main" array, using .length

//either display password with window.alert or use CSS to display password in the box 











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

