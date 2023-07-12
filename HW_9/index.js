taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
taskSix();
taskSeven();
taskEight();
taskNine();
taskTen();

function taskOne() {
    console.log('Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let positiveSum = 0;
    let positiveCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveSum += array[i];
            positiveCount++;
        }
    }
    console.log("Сума позитивних елементів: ", positiveSum);
    console.log("Кількість позитивних елементів: ", positiveCount);
}

function taskTwo () {
    console.log('Знайти мінімальний елемент масиву та його порядковий номер.')

    const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let minElement = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
            minIndex = i;
        }
    }
    console.log("Мінімальний елемент:", minElement);
    console.log("Порядковий номер мінімального елементу:", minIndex);
}

function taskThree () {
    console.log('Знайти максимальний елемент масиву та його порядковий номер.')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let maxElement = array [0];
    let maxIndex = 0;
    for (let i = 0; i < array.length; i ++){
        if (array[i] > maxElement) {
            maxElement = array[i];
            maxIndex = i;
        }
    }
    console.log("Максимальний елемент:", maxElement);
    console.log("Порядковий номер максимального елементу:", maxIndex);
}

function taskFour () {
    console.log('Визначити кількість негативних елементів.')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let countNegativeElement = 0;
    for ( let i = 0; i < array.length; i ++) {
        if (array[i] < 0) {
            countNegativeElement ++;
        }
    }
    console.log('Кількість негативних елементів: ', countNegativeElement)
}

function taskFive () {
    console.log('Знайти кількість непарних позитивних елементів.')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let countPositiveElement = 0;
    for ( let i = 0; i < array.length; i ++) {
        if (array[i] % 2 !== 0  && array[i] > 0){
            countPositiveElement ++;
        }
    }
    console.log('Кількість непарних позитивних елементів: ', countPositiveElement)
}

function  taskSix () {
    console.log('Знайти кількість парних позитивних елементів.')
    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let countPositiveElement = 0;
    for (let i = 0; i < array.length; i ++) {
        if ( array[i] % 2 === 0 && array[i] > 0 ) {
            countPositiveElement ++;
        }
    }

console.log('Кількість парних позитивних елементів: ', countPositiveElement)
}

function taskSeven () {
    console.log('Знайти суму парних позитивних елементів.')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let sumPositiveElement = 0;
    for (let i = 0; i < array.length; i ++ ) {
        if ( array[i] > 0 && array[i] % 2 === 0) {
            sumPositiveElement += array[i]
        }
    }
    console.log('Сума парних позитивних елементів: ', sumPositiveElement)
}

function taskEight () {
    console.log('Знайти суму непарних позитивних елементів')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let sumPositiveElement = 0;
    for (let i = 0; i < array.length; i ++ ) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            sumPositiveElement += array[i]
        }
    }
    console.log('Сума непарних позитивних елементів: ', sumPositiveElement)
}

function taskNine () {
    console.log('Знайти добуток позитивних елементів')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

    let multiplyPositiveElement = 1;
    for (let i = 0; i < array.length; i ++) {
        if ( array[i] > 0 ) {
            multiplyPositiveElement *= array[i];
        }
    }
    console.log('Добуток позитивних елементів: ', multiplyPositiveElement)
}

function taskTen () {
    console.log('Знайти найбільший серед елементів масиву, ост альні обнулити.')

    const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    let maxElement = array[0];
    for (let i = 0; i < array.length; i ++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== maxElement) {
            array[i] = 0;
        }
    }
console.log('Масив з найбільшим елементом масиву: ', array)

}



