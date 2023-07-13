let lengthArray = 0;
let array = [];
let input = ' ';
start();

function start() {
    lengthArray = parseInt(prompt('Ввведіть довжину масиву. Довжина масиву повинна бути не менш ніж 5 '));
    if (isNaN(lengthArray) || lengthArray === '' || lengthArray === 0 || lengthArray < 5) {
        start();
    } else {
        getArrayElements('Введіть елементи массиву через кому( 1,2,3,4,5 )');
    return;
    }
}

function getArrayElements(message) {
    if (message == null || message === '') {
        getArrayElements()
    } else {
        input = prompt(message);
        array = input.split(',');

        if (lengthArray === array.length) {
            alert(array.sort());
            alert(array.splice(2, 3));
            alert(array);
            return;
        } else {
            getArrayElements(message);
        }
    }
    return array;
}






