const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePassword = document.getElementById("generatePassword")
let randomPassword1 = document.getElementById("randomPassword1")
let randomPassword2 = document.getElementById("randomPassword2")
let randomPassword = ""

function generateRandomPassword() {

    let randomPassword = ""
    for (i = 0; i < 15; i++) {
        randomPassword +=  characters[Math.floor( Math.random() * 91)]
    }
    
    return randomPassword
}

generatePassword.addEventListener('click', function() {
    randomPassword1.textContent = generateRandomPassword()
    randomPassword2.textContent = generateRandomPassword()
})