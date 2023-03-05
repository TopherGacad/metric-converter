const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const resultEl1 = document.getElementById("result-1")
const resultEl2 = document.getElementById("result-2")
const resultEl3 = document.getElementById("result-3")

const meter = 3.281
const liter = 0.264
const kilogram = 2.204

let inputVal = 0

convertBtn.addEventListener("click",function(){
    inputVal = inputEl.value
  
    resultEl1.textContent = `
    ${inputVal} meters = ${(inputVal * meter).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / meter).toFixed(3)} meters`

    resultEl2.textContent = `
    ${inputVal} liters = ${(inputVal * liter).toFixed(3)} galons | ${inputVal} galons = ${(inputVal / liter).toFixed(3)} liters`

    resultEl3.textContent = `
    ${inputVal} kilo = ${(inputVal * kilogram).toFixed(3)} pound | ${inputVal} pound = ${(inputVal / kilogram).toFixed(3)} kilo`
})
