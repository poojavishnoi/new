var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var ouputDiv = document.querySelector("#output")



btnTranslate.addEventListener("click", function clickEventHandler(){
    ouputDiv.innerText = "asasaskjs " + txtInput.value
})