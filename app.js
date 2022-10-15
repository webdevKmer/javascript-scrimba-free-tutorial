const saveInputBtn = document.getElementById('save-input-btn')
const leadInputElt = document.getElementById('lead-input')

const leadsElt = document.getElementById('leads')

let myLeads = []

saveInputBtn.addEventListener('click', () => {
    if(leadInputElt.value != ""){
        myLeads.push(leadInputElt.value)
        // leadsElt.innerHTML += '<li><a href="https://' + leadInputElt.value + '" target="_blank">' + leadInputElt.value + '</a></li>'
        leadsElt.innerHTML += `
        <li>
            <a href="https://${leadInputElt.value}" target="_blank">${leadInputElt.value}</a>
        </li>
        `
        leadInputElt.value = ''
    } else {
        console.log('wrong value...')
    }    
    console.log('clicked', myLeads)
})