const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwd1El = document.getElementById("passwd1")
let passwd2El = document.getElementById("passwd2")

let passwordSize = 16

function generatePswd() {
    let password1 = "";
    let password2 = "";
    
    for(let i = 0; i < passwordSize; i++){
        password1 += characters[Math.floor(Math.random()*characters.length)]
        password2 += characters[Math.floor(Math.random()*characters.length)]
    }
    
    showGeneratedPaswd(password1, password2)
}

function changeSizePassword(newSizePassword){
    passwordSize = newSizePassword
}

function showGeneratedPaswd(password1, password2){
    passwd1El.textContent = password1
    passwd2El.textContent = password2    
}