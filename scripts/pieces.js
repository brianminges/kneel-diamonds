import { getPieces, setPiece } from "./database.js"

const pieces = getPieces()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "piece") {
        setPiece(parseInt(event.target.value))
        }
    }
)


export const Pieces = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // const listItemsArray = 

    const listItemsArray = pieces.map(piece => {
        return `<li>
            <input type="radio" name="piece" value="${piece.id}" /> ${piece.item}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
