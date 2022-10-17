import { getPaintColor, setColor} from "./database.js";

const paintColors = getPaintColor()

document.addEventListener("change", e => {
    if (e.target.id === "color") {
        const paintColor = parseInt(e.target.value)
        setColor(paintColor) 
    }
})

export const colors = () => {
    
    const options = paintColors.map(color => {
        return `<option value="${color.id}">${color.color}</option>`
    })
    
    const html = options.join("")

    return html
}