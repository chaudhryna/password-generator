const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById('generate-btn');
const pwOne = document.getElementById('pw-one');
const pwTwo = document.getElementById('pw-two');

function generatePassword() {
  let newPassword = "";
  for (let i=0; i <= 15; i++) {
    let pwIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[pwIndex]
  }
  return newPassword
}

generateBtn.addEventListener("click", function generatePW() {
  pwOne.textContent = generatePassword()
  pwTwo.textContent = generatePassword()
});
