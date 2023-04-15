const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const bookOne = {
    reserve1: document.querySelector('#book1 button.reserve'),
    checkout1: document.querySelector('#book1 button.checkout'),
    checkin1: document.querySelector('#book1 button.checkin')
}

const bookTwo = {
    reserve2: document.querySelector('#book2 button.reserve'),
    checkout2: document.querySelector('#book2 button.checkout'),
    checkin2: document.querySelector('#book2 button.checkin')
}

const bookThree = {
    reserve3: document.querySelector('#book3 button.reserve'),
    checkout3: document.querySelector('#book3 button.checkout'),
    checkin3: document.querySelector('#book3 button.checkin')
}

bookOne.checkin1.style.color = ""
const status_1 = document.getElementsByClassName('status');
let status1 = status_1[0]
status1.style.color = STATUS_MAP.overdue.color
bookOne.reserve1 = STATUS_MAP.overdue.canReserve ? enabled : bookOne.reserve1.disabled = true
bookOne.checkout1 = STATUS_MAP.overdue.canCheckout ? enabled : bookOne.checkout1.disabled = true
bookOne.checkin1 = STATUS_MAP.overdue.canCheckIn ? bookOne.checkout1.disabled = false : disabled

bookTwo.checkin2.style.color = ""
const status_2 = document.getElementsByClassName('status');
let status2 = status_2[1]
status2.style.color = STATUS_MAP.reserved.color
bookTwo.reserve2 = STATUS_MAP.reserved.canReserve ? enabled : bookTwo.reserve2.disabled = true
bookTwo.checkout2 = STATUS_MAP.reserved.canCheckout ? bookTwo.checkout2.disabled = false : disabled
bookTwo.checkin2 = STATUS_MAP.reserved.canCheckIn ? enabled : bookTwo.checkin2.disabled = true

bookThree.checkin3.style.color = ""
const status_3 = document.getElementsByClassName('status');
let status3 = status_3[2]
status3.style.color = STATUS_MAP.shelf.color;
bookThree.reserve3 = STATUS_MAP.shelf.canReserve ? bookThree.reserve3.disabled = true : disabled
bookThree.checkout3 = STATUS_MAP.shelf.canCheckout ? bookThree.reserve3.disabled = true : disabled
bookThree.checkin3 = STATUS_MAP.shelf.canCheckIn ? enabled : bookThree.reserve3.disabled = false