var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pass = '';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
  var specialCharacters = '!@#$%^&*';
  var numbers = '0123456789';
  let allChar = lowerCaseLetters + upperCaseLetters + specialCharacters + numbers;
  let genPass = '';

  var lowerCaseWindow = confirm("Do you want to include lower-case letters?")
  if (lowerCaseWindow === true) {
      pass += lowerCaseLetters;
      
  }

  var upperCaseWindow = confirm("Do you want to include upper-case letters?")
  if (upperCaseWindow === true) {
      pass += upperCaseLetters;

  }
  var numberWindow = confirm("Do you want to include numbers?")
  if (numberWindow === true) {
      pass += numbers;
      
  }
  var specialCharacterWindow = confirm("Do you want to include special characters?")
  if (specialCharacterWindow === true) {
      pass += specialCharacters;
      
  }
  var userInput = parseInt(prompt("How many characters do you want your password to be?"))
  for (i=0; i < userInput; i++){
      let char = Math.floor(Math.random() * pass.length);
      genPass += allChar.charAt(char);
    }
    
    return pass;
}
    
generateBtn.addEventListener("click", writePassword);
