
const newArray = []
function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
    }
    return newArray;
}

function countDown(int) {
    while (int > -1) {
        console.log(int--);
    }
}


