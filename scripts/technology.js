import { getTechnology, setTechnology } from "./database.js"

const technologies = getTechnology()

//define event listener 
document.addEventListener("change", e => {
    if (e.target.id === "technology") {
        const tech = parseInt(e.target.value)
        setTechnology(tech)
    }
})

//output html
export const technology = () => {

    const options = technologies.map(option => {
            return `<option value="${option.id}">${option.package}</option>`
        })

    const html = options.join("")

    return html
}