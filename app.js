function addOne(e){
    console.log('Adding One')
}
function addTwo(){
    console.log('Adding Two')
}
function addThree(){
    console.log('Adding Three')
}
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')

let homescore = document.getElementById('home-score')
let guestscore = document.getElementById('guest-score')

btn1.addEventListener('click', () => {
    homescore.textContent = parseInt(homescore.textContent) + 1
})
btn2.addEventListener('click', () => {
    homescore.textContent = parseInt(homescore.textContent) + 2
})
btn3.addEventListener('click', () => {
    homescore.textContent = parseInt(homescore.textContent) + 3
})
btn4.addEventListener('click', () => {
    guestscore.textContent = parseInt(guestscore.textContent) + 1
})
btn5.addEventListener('click', () => {
    guestscore.textContent = parseInt(guestscore.textContent) + 2
})
btn6.addEventListener('click', () => {
    guestscore.textContent = parseInt(guestscore.textContent) + 3
})