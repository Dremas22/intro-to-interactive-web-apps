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
const goodbook = {
    status1: document.getElementsByClassName('status'),
    reserve1: document.getElementsByClassName('reserve'),
    checkout1: document.getElementsByClassName('checkout'),
    checkin1: document.getElementsByClassName('checkin')
}

const book_of_books = {
    status2: document.getElementsByClassName('status'),
    reserve2: document.getElementsByClassName('reserve'),
    checkout2: document.getElementsByClassName('checkout'),
    checkin2: document.getElementsByClassName('checkin')
}

const anotherbook = {
    status3: document.getElementsByClassName('status'),
    reserve3: document.getElementsByClassName('reserve'),
    checkout3: document.getElementsByClassName('checkout'),
    checkin3: document.getElementsByClassName('checkin')
}

goodbook.checkin1.color = '';
goodbook.status1.style = STATUS_MAP.overdue.color;
reserve1 = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled'
checkout1 = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled'
checkin1 = STATUS_MAP.overdue.canCheckIn ? 'enabled' : 'disabled'

book_of_books.checkin2.color = '';
book_of_books.status2.style = STATUS_MAP.reserved.color;
reserve2 = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
checkout2 = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
checkin2 = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled'

anotherbook.checkin3.color = '';
anotherbook.status3.style = STATUS_MAP.checkedOut.color
reserve3 = STATUS_MAP.checkedOut.canReserve ? 'enabled' : 'disabled'
checkout3 = STATUS_MAP.checkedOut.canCheckout ? 'enabled' : 'disabled'
checkin3 = STATUS_MAP.checkedOut.canCheckIn ? 'enabled' : 'disabled'

console.log(checkin3)