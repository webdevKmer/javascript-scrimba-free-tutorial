console.log('hello from js')
let num1Val = 0
let num2Val = 0


function getDatas(){
    num1Val = document.getElementById('num1').value
    num2Val = document.getElementById('num2').value
    let result = document.getElementById('result')
    return result
}

const addBtn = document.getElementById('add')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')

function add(){
    getDatas()
    result.textContent = parseInt(num1Val) + parseInt(num2Val)
    console.log("adding...")
    console.log(num1Val, num2Val, result.textContent)
}
function substract(){
    getDatas()
    result.textContent = parseInt(num1Val) - parseInt(num2Val)
    console.log("substracting...")
    console.log(num1Val, num2Val, result.textContent)
}
function divide(){
    getDatas()
    result.textContent = parseInt(num1Val) / parseInt(num2Val)
    console.log("dividing...")
    console.log(num1Val, num2Val, result.textContent)
}
function multiply(){
    getDatas()
    result.textContent = parseInt(num1Val) * parseInt(num2Val)
    console.log("multiplying...")
    console.log(num1Val, num2Val, result.textContent)
}
multiplyBtn.addEventListener('click', ()=> {
    multiply()
})
minusBtn.addEventListener('click', () => {
    substract()
})
divideBtn.addEventListener('click', () => {
    divide()
})
addBtn.addEventListener('click', ()=> {
    add()
})