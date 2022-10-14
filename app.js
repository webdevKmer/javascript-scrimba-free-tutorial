let person = {
    name : "Patrick",
    age : 43,
    city : "Douala"
}

let age = 67

let discount = {
    kid : "free",
    child : "child discount",
    student : "student discount",
    senior : "senior discount",
}

let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']
let nextLargeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

let rps = ['rock', 'paper', 'scissors']

const personBtn = document.getElementById('btn1')
const checkDiscountBtn = document.getElementById('btn2')
const getCountriesBtn = document.getElementById('btn3')

const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')

personBtn.addEventListener('click', () => {
    logData()
})

checkDiscountBtn.addEventListener('click', () => {
    checkDiscount()
})

getCountriesBtn.addEventListener('click', () => {
    getLargestCountries()
})

function checkDiscount() {
    let message = ""
    if (age > 66) {
        message = "You get " + discount.senior
    } else if (age < 6) {
        message = "You can access " + discount.kid
    } else if (age < 18) {
        message = "You get " + discount.child
    } else if (age < 27) {
        message = "You get " + discount.student
    } else {
        message = "You have to pay full price."
    }
    result1.textContent = message
}

function logData(){
    const message = person.name + " is " + person.age + " years old and lives in " + person.city
    result1.textContent = message
    console.log(message)
}

function getLargestCountries(){
    let countries = ""
    for (i = 0; i < largeCountries.length; i++){
        countries += largeCountries[i] + " - "
    }
    result1.textContent = countries
}

function checkNextLargeCountries(){
    nextLargeCountries.pop()
    nextLargeCountries.push('Pakistan', 'Monaco')
    nextLargeCountries.shift()
    nextLargeCountries.unshift('Tuvalu', 'China')

    console.log(nextLargeCountries)
}
//checkNextLargeCountries()

function getRandom(){
    let randNumber = Math.floor(Math.random()*3)
    console.log(rps[randNumber])
}
getRandom()