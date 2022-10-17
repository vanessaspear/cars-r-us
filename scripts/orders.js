import { getOrders, getPaintColor, getInterior, getTechnology, getWheels } from "./database.js";

//Find the order's paint color, interior, technology package, and wheel type

const buildOrderListItem = (order) => {

const colors = getPaintColor()

//This returns the color object from the order
const foundColor = colors.find(color => {
    return color.id === order.paintColorId
})

//Find the interior object 

const interiors = getInterior()

const foundInterior = interiors.find(interior => {
    return interior.id === order.interiorId
})


//Find technology object 

const technology = getTechnology()

const foundTechnology = technology.find(technology => {
    return technology.id === order.techId
})


//Find wheel object
const wheels = getWheels()

const foundWheels = wheels.find(wheel => {
    return wheel.id === order.wheelId
})

let totalPrice = (foundColor.price + foundInterior.price + foundTechnology.price + foundWheels.price)

return `
    <li>
        ${foundColor.color} car with ${foundWheels.type}, ${foundInterior.interior} interior, and the ${foundTechnology.package} for a total cost of $${totalPrice}
`
}

//use the map method to display all of the submitted orders 
export const ordersHTML = () => {

    const orders = getOrders()

    let html = "<ul>"

    const ordersHTML = orders.map(buildOrderListItem)

    html += ordersHTML.join("")

    html += "</ul>"

    return html
}