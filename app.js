let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
//   console.log(myLeads);
    inputEl.value = "";
    renderLeads()
});

function renderLeads() {
    let listItems = ""

    for(let i = 0; i < myLeads.length; i++) {
       listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
       console.log(listItems)
    }
    ulEl.innerHTML = listItems
}

