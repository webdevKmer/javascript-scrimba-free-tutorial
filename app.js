const convertInput = document.getElementById('convert-input')
const convertBtn = document.getElementById('convert-btn')

const lengthText = document.getElementById('length')
const massText = document.getElementById('mass')
const volumeText = document.getElementById('volume')

let units = {
    "mass": {
        startUnit : "kilos",
        endUnit : "pounds",
        ratio : 2.204,
    },
    "volume": {
        startUnit : "liters",
        endUnit : "gallons",
        ratio : 0.264,
    },
    "length": {
        startUnit : "meters",
        endUnit : "feets",
        ratio : 3.281,
    }
}

convertBtn.addEventListener('click', () => {
    if(convertInput.value){
        lengthText.textContent = convertValue('length', convertInput.value)
        massText.textContent = convertValue('mass', convertInput.value)
        volumeText.textContent = convertValue('volume', convertInput.value)        
        convertInput.value = ""
    } else {
        defaultText = "Enter a value in the field!"
        lengthText.textContent = defaultText
        massText.textContent = defaultText
        volumeText.textContent = defaultText
    }
})

function convertValue(unit, value){
    let unitData
    if (unit == "length"){
        unitData = units.length
    } else if (unit == "volume"){
        unitData = units.volume
    } else if (unit == "mass"){
        unitData = units.mass
    }
    return `${value} ${unitData.startUnit} = ${(value*unitData.ratio).toFixed(3)} ${unitData.endUnit} | ${value} ${unitData.endUnit} = ${(value*1/unitData.ratio).toFixed(3)} ${unitData.startUnit}` 
}

function getSingularUnits(unit){
    if (unit == "length"){
        units.length.startUnit = "meter"
        units.length.endUnit = "feet"
    } else if (unit == "volume"){
        units.volume.startUnit = "liter"
        units.volume.endUnit = "gallon"
    } else if (unit == "mass"){
        units.mass.startUnit = "kilo"
        units.mass.endUnit = "pound"
    }
}