let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍎", "🍎", "🍊", "🍎", "🍎", "🍊", "🍊", "🍊", "🍊"]
const appleShelf = document.getElementById("apple-shelf")
const orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruits(){
    let oranges = ""
    let apples = ""
    for (i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎"){
            apples += fruit[i]
            console.log('putting 1 apple in the shelf')
        } else {
            oranges += fruit[i]
            console.log('putting 1 orange in the shelf')
        }
    }
    appleShelf.textContent = apples
    orangeShelf.textContent = oranges
}

sortFruits()