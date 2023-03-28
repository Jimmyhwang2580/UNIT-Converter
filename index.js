/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.querySelector("#convert-btn")
let inputEl = document.querySelector("#input-el")
let lengthEl = document.querySelector("#length-el")
let volumeEl = document.querySelector("#volume-el")
let massEl = document.querySelector("#mass-el")

const meterToFeet = 3.281
const litersToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", () => {
    let baseValue = inputEl.value;
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet.toFixed(3)} feet`
    volumeEl.textContent = `${baseValue} liter = ${baseValue * litersToGallon.toFixed(3)} gallon`
    massEl.textContent = `${baseValue} kilogram = ${baseValue * kiloToPound.toFixed(3)} pound`
})