import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener("change", e => {

    if (e.target.id === "wheels") {
        const wheels = parseInt(e.target.value)
        setWheels(wheels)
    }
})

export const wheelOptions = () => {

    const options = wheels.map(wheels => {
        return `<option value="${wheels.id}">${wheels.type}</option>`
    })

    const html = options.join("")

    return html
}