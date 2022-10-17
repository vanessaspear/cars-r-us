const database = {
    paintColor: [
        {id: 1, color: "Silver", price: 100},
        {id: 2, color: "Midnight Blue", price: 200},
        {id: 3, color: "Firebrick Red", price: 300},
        {id: 4, color: "Spring Green", price: 400},
    ],
    interior: [
        {id: 1, interior: "Beige Fabric", price: 100},
        {id: 2, interior: "Charcoal Fabric", price: 200},
        {id: 3, interior: "White Leather", price: 300},
        {id: 4, interior: "Black Leather", price: 400},
    ],
    technology: [
        {id: 1, package: "Basic Package (basic sound system)", price: 100},
        {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 200},
        {id: 3, package: "Visibility Package (includes side and reat cameras)", price: 300},
        {id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 400}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 100},
        {id: 2, type: "17-inch Pair Radial Black", price: 200},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 300},
        {id: 4, type: "18-inch Pair Spoke Black", price: 400}
    ],
    customOrders: [
        {id: 1, paintColorId: 1, interiorId: 1, techId: 1, wheelId: 1, timestamp: null, price: null}
    ],
    //state object
    orderBuilder: [{}]
}

//Functions to get a copy of a database array
export const getPaintColor = () => {
    return database.paintColor.map(paintColor => ({...paintColor}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}

//Functions to set the state of the temporary order object
export const setColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

//Function to create a permanent state object to represent an order
export const addCustomOrder = () => {

    // Copy the current state of user choices
    let newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const orderId = database.customOrders.length + 1
    newOrder.id = orderId

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    newOrder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}