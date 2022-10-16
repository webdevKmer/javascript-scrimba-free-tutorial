// To do : Make the save tab work for firefox browser!!!

const saveInputBtn = document.getElementById('save-input-btn')
const saveTabBtn = document.getElementById('save-tab-btn')
const deleteAllBtn = document.getElementById('delete-all-btn')
const leadInputElt = document.getElementById('lead-input')

const leadsElt = document.getElementById('leads')

let myLeads = []

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

let leadsFromLocalStorage = localStorage.getItem("myLeads")
console.log('leads from local storage...', leadsFromLocalStorage)

if (leadsFromLocalStorage){
    myLeads = JSON.parse(leadsFromLocalStorage)
    render(myLeads)
    console.log('yess leads in local storage...', myLeads)
} else {
    console.log('nothing in local storage...')
}

saveTabBtn.addEventListener('click', () => {
    console.log(tabs[0].url)
    let tabUrl = tabs[0].url
    myLeads.push(tabUrl)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

saveInputBtn.addEventListener('click', () => {
    console.log('click')
    if(leadInputElt.value){
        console.log('value in')
        myLeads.push(leadInputElt.value)
        leadInputElt.value = ''
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    } else {
        console.log('nothing to render...')
    }    
    console.log('leads in 2 local storage', leadsFromLocalStorage)
})

deleteAllBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    render(myLeads)
})

function render(leads){
    leadsElt.innerHTML = ""
    leadsFromLocalStorage = localStorage.getItem("myLeads")
    leads = JSON.parse(leadsFromLocalStorage)
    if(leads){
        for(let i = 0; i < leads.length; i++){
            leadsElt.innerHTML += `
            <li>
            <a href="https://${leads[i]}" target="_blank">${leads[i]}</a>
            </li>`
        }
        console.log('rendering leads...')
    } else {
        console.log('no leads...')
    }
}