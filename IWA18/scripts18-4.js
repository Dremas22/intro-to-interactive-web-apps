
import { updateDragging, createOrderData } from './data.js'
import { updateDraggingHtml, html, createOrderHtml, moveToColumn } from './view.js'


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event -
 * 
 */

const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}



const handleDragStart = () => {
    for (const htmlColumn of Object.values(html.columns)) {
        htmlColumn.addEventListener('dragstart', handleDragStart)
    }
    //moveToColumn()
}

const handleDragEnd = () => {
    for (const htmlColumn of Object.values(html.columns)) {
        htmlColumn.addEventListener('dragend', handleDragEnd)
    }
    // moveToColumn()
}

//------------ADDING ORDER----------------//
const handleAddToggle1 = () => {
    html.add.overlay.style.display = "block"
}
html.other.add.addEventListener('click', handleAddToggle1)

const handleAddToggle2 = () => {
    html.add.overlay.style.display = "none"
}
html.add.cancel.addEventListener('click', handleAddToggle2)

//------------------HELP----------------------------//

const handleHelpToggle1 = () => {
    html.help.overlay.style.display = "block"
}
html.other.help.addEventListener('click', handleHelpToggle1);
const handleHelpToggle2 = () => {
    html.help.overlay.style.display = "none"
}
html.help.cancel.addEventListener('click', handleHelpToggle2);

//------------------SUBMITTING ORDER----------------------------//

const submitOrder = document.querySelector('button[form="add-form"]');
const handleAddSubmit = (event) => {
    event.preventDefault()

    const orderedColumn = document.querySelector('[data-column="ordered"]')
    let title = html.add.title
    let table = html.add.table
    let column = html.columns[0].id
    const orderData = createOrderData({title, table, column});
    const orderHTML = createOrderHtml(orderData);

    const orderElement = orderHTML.querySelector('[data-order-title]');
    orderedColumn.insertAdjacentHTML('afterbegin', orderHTML);
    orderElement.style.display = 'visible'

    orderElement()
};     

submitOrder.addEventListener('submit', handleAddSubmit);

//------------------END OF SUBMITTING ORDER SECTION----------------------------//

// const handleEditToggle = (event) => {}
// const handleEditSubmit = (event) => {}
// const handleDelete = (event) => {}

// html.other.grid.addEventListener('click', handleEditToggle)
// html.edit.cancel.addEventListener('click', handleEditToggle)
// html.edit.form.addEventListener('submit', handleEditSubmit)
// html.edit.delete.addEventListener('click', handleDelete)

for (const htmlArea of Object.values(html.area)) {

    htmlArea.addEventListener('dragover', handleDragOver)
}