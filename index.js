const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const resultEl1 = document.getElementById("result-1")
const resultEl2 = document.getElementById("result-2")
const resultEl3 = document.getElementById("result-3")


let inputVal = 0
convertBtn.addEventListener("click",function(){
    inputVal = inputEl.value
    console.log(inputVal)
})