taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();

function taskOne() {
    console.log('\nВивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).')

    let num = '';
    for (let i = 20; i <= 30; i += 0.5) {
        num += i + ' ';
    }
    console.log(num);
}

function taskTwo() {
    console.log('\nОдин долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів')

    let result = [];
    let rate = 27;
    for (let i = 10; i <= 100; i += 10) {
        result.push(i * rate);
    }
    console.log(result.toString() + " грн.");
}

function taskThree() {
    console.log('\nДане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.')

    let numN = 200;
    for (let i = 1; i <= 100; i++) {
        if ((i * i) < numN) {
            console.log(i)
        }
    }
}

function taskFour() {
    console.log('\nДане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).')

    let num = 23;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`${num} - Число не є простим`);
            break;
        }
        console.log(`${num} - Число є простим`);
        break;
    }
}

function taskFive() {
    console.log('\nДане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.')


    let number = 81;
    if (number === 1) {
        console.log("Yes");
    }
    while (number % 3 === 0) {
        number /= 3;
    }
    if (number === 1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
