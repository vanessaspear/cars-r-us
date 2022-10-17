// use this module to output all of the html
import { colors } from "./color.js"
import { interior } from "./interior.js"
import { technology } from "./technology.js"
import { wheelOptions } from "./wheels.js"
import { ordersHTML } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "orderButton") {
        addCustomOrder()
    }
})


export const generateHTML = () => {
    return `
    <article class="choices">
        <h2>Paints</h2>
        <select id="color">
            <option value="0">Prompt to select resource...</option>
            ${colors()}
        </select>
        <h2>Interiors</h2>
        <select id="interiors">
            <option value="0">Prompt to select resource...</option>
            ${interior()}
        </select>
        <h2>Technology</h2>
        <select id="technology">
            <option value="0">Prompt to select resource...</option>
            ${technology()}
        </select>
        <h2>Wheels</h2>
        <select id="wheels">
            <option value="0">Prompt to select resource...</option>
            ${wheelOptions()}
            </option>
        </select>
    </article>
    
    </article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h1>
        ${ordersHTML()}
    </article>
    `
}