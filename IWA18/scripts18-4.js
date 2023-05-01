
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

const divOrdered = document.querySelector('[data-column="ordered"]')
const divPrepared = document.querySelector('[data-column="preparing"]')
const divServed = document.querySelector('[data-column="served"]')


// const handleDragStart = (event) => {
//     event.preventDefault()

//         event.dataTransfer.setData('text/plain', event.divPrepared.id)
//     for (const htmlColumn of Object.values(html.columns)) {
//         htmlColumn.removeEventListener('dragstart', handleDragStart);
//     }
// }
divOrdered.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.divPrepared.dataset)
})

divPrepared.addEventListener('dragover', (e) => {
    e.preventDefault();
})

divPrepared.addEventListener('drop', (e) => {
    e.preventDefault()
    const srcDivOrdered =  e.dataTransfer.setData('text/plain')
})


const handleDragEnd = (event) => {

    const id = event.dataTransfer.getData('text/plain');
    const newColumn = dragging.over;
    moveToColumn(id, newColumn);
    
    for (const htmlColumn of Object.values(html.columns)) {
        htmlColumn.removeEventListener('dragover', handleDragOver);
        htmlColumn.removeEventListener('dragend', handleDragEnd);
    }
}
divPrepared.addEventListener('dragend', handleDragEnd)


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
const state = {
    orders: {}
}

const handleAddSubmit = (event) => {
    event.preventDefault()

    const dataOrder = document.querySelector('[data-column="ordered"]')
    const title = html.add.title.value;
    const table = html.add.table.value;

    const id = Object.keys(state.orders).length + 1;
    const created = new Date();
    const order = createOrderData({ id, title, table, created });
    const orderElement = createOrderHtml(order);

    dataOrder.insertAdjacentElement('beforeend', orderElement)

    html.add.form.reset();
    html.add.overlay.close();

};
html.add.form.addEventListener('submit', handleAddSubmit);

console.log()

//------------------EDITTING ORDER SECTION----------------------------//

const dataOrder = document.querySelector('[data-column="ordered"]')
const handleEditToggle1 = (event) => {
    event.preventDefault()

    const dataTitle1 = document.querySelector('[data-order-title]')
    const editTitle1 = dataTitle1.innerText;
    html.edit.title.value = editTitle1

    const dataTable1 = document.querySelector('[data-order-table]');
    const editTable1 = dataTable1.innerText;
    html.edit.table.value = editTable1

    html.edit.overlay.style.display = "block"

};
dataOrder.addEventListener('click', handleEditToggle1)

const handleEditToggle = () => {
    html.edit.overlay.style.display = "none"
}
html.edit.cancel.addEventListener('click', handleEditToggle)

//------------------SUBMITTING EDITED DATA ORDER ----------------------------//

//const update = document.querySelector('[form="edit-form"]')
const handleEditSubmit = (event) => {
    event.preventDefault();


    const dataTitle1 = document.querySelector('[data-order-title]')
    dataTitle1.textContent = html.edit.title.value;

    const dataTable1 = document.querySelector('[data-order-table]');
    dataTable1.textContent = html.edit.table.value;

    const divPrepared = document.querySelector('[data-column="preparing"]')
    const divServed = document.querySelector('[data-area="served"]')
    if (state == "Ordered") {
        html.edit.overlay.style.display = "none"
    } else if (state == "Preparing") {
        divPrepared.insertAdjacentElement('beforeend', dataOrder)
        html.edit.overlay.style.display = "none"
    } else if (state == "Served") {
        divServed.insertAdjacentElement('beforeend', dataOrder)
        html.edit.overlay.style.display = "none"
    }

};
html.edit.form.addEventListener('submit', handleEditSubmit);


//----DELETING THE EDITTED DATA-------------//

const handleDelete = (event) => {
    event.preventDefault()

    const dataOrder = document.querySelector('[data-column="ordered"]')
    dataOrder.remove()

    html.edit.overlay.style.display = "none";

}
html.edit.delete.addEventListener('click', handleDelete)
