const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById('generate-btn');
const pwOne = document.getElementById('pw-one');
const pwTwo = document.getElementById('pw-two');
const copyBtns = document.querySelectorAll('.copy-btn');
const copyPwOne = document.getElementById('copy-pw-one');
const copyPwTwo = document.getElementById('copy-pw-two');

function generatePassword() {
  let newPassword = "";
  for (let i=0; i < 15; i++) {
    let pwIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[pwIndex]
  }
  return newPassword
}

generateBtn.addEventListener("click", function generatePW() {
  for (i = 0; i < copyBtns.length; ++i) {
		copyBtns[i].style.visibility = 'visible';
    copyBtns[i].firstElementChild.classList.remove('fa-clipboard-check');
    copyBtns[i].firstElementChild.classList.add('fa-clipboard');

  }
  pwOne.textContent = generatePassword()
  pwTwo.textContent = generatePassword()
});


 copyPwOne.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText(pwOne.textContent);
      copyPwOne.firstElementChild.classList.remove('fa-clipboard');
		  copyPwOne.firstElementChild.classList.add('fa-clipboard-check');
		} catch (err) {
			console.error(err.name, err.message);
		}
 });

  copyPwTwo.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText(pwTwo.textContent);
      copyPwTwo.firstElementChild.classList.remove('fa-clipboard');
      copyPwTwo.firstElementChild.classList.add('fa-clipboard-check');
		} catch (err) {
			console.error(err.name, err.message);
		}
  });
