// use this module to regenerate the HTML after a change has been made
import { generateHTML } from "./cars.js";

const parentHTML = document.querySelector("#container")

const renderAllHTML = () => {
    parentHTML.innerHTML = generateHTML()
}

renderAllHTML()

document.addEventListener("stateChanged", e => {
    console.log("State of data has changed.  Regenerating HTML...")
    renderAllHTML()
})