let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveTab = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""

    for(let i = 0; i < leads.length; i++) {
       listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
       console.log(listItems)
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function() {
   localStorage.clear()
   myLeads = []
   render( myLeads )
})


const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
//   console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log( localStorage.getItem("myLeads") )
    render( myLeads )
});


saveTab.addEventListener("click", function() {
    // console.log("i was clicked")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
});

