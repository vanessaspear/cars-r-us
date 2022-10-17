import { getInterior, setInterior } from "./database.js"

//save a copy of the interior array
const interiors = getInterior();

//add event listener here
document.addEventListener("change", e => {
    if (e.target.id === "interiors") {
        const interior = parseInt(e.target.value)
        setInterior(interior)
    }
})

//add html output here
export const interior = () => {
   
    //use .map() for converting objects to <li> elements, returns an array
    const options = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.interior}</option>`
    })

    //use join() method to make one long string of HTML options
    const html = options.join("")

    return html 

}