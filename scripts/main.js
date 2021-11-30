import { KneelDiamonds } from "./KneelDiamonds.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { addCustomOrder } from "./database.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
