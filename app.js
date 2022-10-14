// To do
// Add functionnality "Copy on click"
// Set password length

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let availableCharacters = []

const passwordLength = 15

const genPasswordBtn = document.getElementById('gen-passwords')
const password1Elt = document.getElementById('password1')
const password2Elt = document.getElementById('password2')

const numbersCheckbox = document.getElementById('numbers')
const symbolsCheckbox = document.getElementById('symbols')

console.log(symbolsCheckbox.checked, numbersCheckbox.checked)

function getCharacters() {
    if(numbersCheckbox.checked && symbolsCheckbox.checked) {
        availableCharacters = characters.concat(symbols).concat(numbers)
    } else if(numbersCheckbox.checked) {
        availableCharacters = characters.concat(numbers)
    } else if (symbolsCheckbox.checked){
        availableCharacters = characters.concat(symbols)
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