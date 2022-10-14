const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let availableCharacters = []
let addNumbers = true
let addSymbols = true

const passwordLength = 15

const genPasswordBtn = document.getElementById('gen-passwords')
const password1Elt = document.getElementById('password1')
const password2Elt = document.getElementById('password2')

function getCharacters() {
    if(addSymbols && addNumbers) {
        availableCharacters = characters.concat(symbols).concat(numbers)
    } else if(addSymbols) {
        availableCharacters = characters.concat(symbols)
    } else if (addNumbers){
        availableCharacters = characters.concat(numbers)
    } else {
        availableCharacters = characters
    }
    return availableCharacters
}

genPasswordBtn.addEventListener('click', () => {
    console.log('got clicked')
    getCharacters()
    const password1 = getPassword()
    const password2 = getPassword()
    password1Elt.textContent = password1
    password2Elt.textContent = password2
})

function getRandomCharacter(){
    let randomCharacter = availableCharacters[Math.floor(Math.random()*availableCharacters.length)]
    console.log(availableCharacters)
    return randomCharacter
}

function getPassword(){
    let password = ""
    for(let i=0; i<passwordLength; i++){
        password += getRandomCharacter()
    }
    return password
}