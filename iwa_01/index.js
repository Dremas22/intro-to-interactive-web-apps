const number = document.querySelector('[data-key="number"]');
const add = document.querySelector('[data-key="addition"]');
const subtract = document.querySelector('[data-key="subtraction"]')

const increaseHandler = () => {
    const result = parseInt(number.value) + 1;
    number.value = result;
}

const decreaseHandler = () => {
    number.value = parseInt(number.value) - 1;
    number.value = result;
}

add.addEventListener('click', increaseHandler);
subtract.addEventListener('click', decreaseHandler);