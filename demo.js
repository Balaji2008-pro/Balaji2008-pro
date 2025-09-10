//select popup-button, popup-overlay, button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbutton = document.getElementById("popup-button")
var popupbox = document.querySelector(".popup-box")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button 
var cancelbutton= document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container, add-book, b-t-i,b-a-i,b-d-i

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bti = document.getElementById("b-t-i")
var bai = document.getElementById("b-a-i")
var bdi = document.getElementById("b-d-i")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bti.value}</h2>
            <h5>${bai.value}</h5>
            <p>${bdi.value}</p>
            <button onclick="deletebook(event)">delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}