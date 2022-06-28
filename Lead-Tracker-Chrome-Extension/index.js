let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const tabBtn =document.getElementById("save-btn")

var leadsFromLocalStorage=localStorage.getItem("myLeads")
if(Boolean(leadsFromLocalStorage)==true){
  myLeads=JSON.parse(leadsFromLocalStorage)
  renderLeads(myLeads);

}

tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true},function(tabs){
 myLeads.push(tabs[0].url)
 localStorage.setItem("myLeads",JSON.stringify(myLeads))
 renderLeads(myLeads)
  } )



})


inputBtn.addEventListener("click", function () {

  //const val = document.querySelector('input').value; Alternative  method

  myLeads.push(inputEl.value)
  inputEl.value=" "
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  renderLeads(myLeads)

})
//create a for loop to render data from the array myLead

function renderLeads(myLeads) {
  let listItems = " "
  for (let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML+="<li>"+ myLeads[i] + "</li>"
    //listItems += "<li><a target='_blank'  href=myLeads[i]'>" + myLeads[i] + "</a></li>"
   // listItems+="<li><a target='_blank'  href='"+myLeads[i] + "'>"+ myLeads[i] + "</a></li>"
    listItems+=`<li>
    <a target='_blank'  href='${myLeads[i]}'>${myLeads[i]}</a>
    </li>`
 
   
   //const li=document.createElement("li")
    //li.textContent= myLeads[i]
    //ulEl.append(li)
  }
  ulEl.innerHTML = listItems
  /*
  let BTN = document.querySelector("#change");
BTN.innerHTML="<button>BUY!</button>"*/} 

function delLeads() {
  localStorage.clear()
  window.location.reload()
  myLeads=[]
}
const delBtn = document.getElementById("del")
delBtn.addEventListener("click",function(){
  delLeads()
})
//ALHAMDULILLAH COMPLETED THE FIRST SUCESSFUL PROJECT IN JAVASCRIPT