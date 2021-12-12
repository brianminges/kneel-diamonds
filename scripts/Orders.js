import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"
import { Pieces } from "./pieces.js"
import { getPieces } from "./database.js"

export const buildOrderListItem = (order) => {
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )


    const sizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
 

    const styles = getStyles()

    // Remember that the function you pass to find() must return true/false
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )


    let totalCost = foundMetal.price + foundSize.price + foundStyle.price


    const pieces = getPieces()
    for (const piece of pieces) {
        if (piece.item === "ring") {
            return totalCost;
        } else if (piece.item === "earring") {
            totalCost = totalCost * 2
        } else if (piece.item === "necklace") {
            totalCost = totalCost * 4
        }
    }
 

    // const pieces = getPieces()
    // const foundPiece = () => {
    //     for (const piece of pieces) {
    //         if (piece.item === "ring") {
    //             return totalCost;
    //         } else if (piece.item === "earring") {
    //             const newCostEarring = totalCost * 2
    //             return newCostEarring;
    //         } else if (piece.item === "necklace") {
    //             const newCostNecklace = totalCost * 4
    //             return newCostNecklace;        
    //         }
    //     }
        
    // }

    // foundPiece() 






//     const pieces = getPieces()

  
//     const foundPiece = pieces.forEach(
//         (piece) => {
//             if (piece.item === "ring") {
//                 return totalCost;
//             } else if (piece.item === "earring") {
//                 const newCost = totalCost * 2
//                 return newCost;
//             } else if (piece.item === "necklace") {
//                 const newCost2 = totalCost * 4
//                 return newCost2;        
//             }
//         }
//     )

//    totalCost = foundPiece()

    

  

 
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
 

    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


