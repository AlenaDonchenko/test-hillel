
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
taskSix();
taskSeven();
taskEight();
taskNineTenEleven();
taskTwelve();





function taskOne() {
    console.log('\nВивести на сторінку в один рядок через кому числа від 10 до 20.: ');
    let result = [];
    for (let i = 10; i <= 20; i++) {
        result.push(i);
    }
    console.log(result.toString());
}

function taskTwo() {
    console.log('\nВивести квадрати чисел від 10 до 20.:');

    let result = [];
    for (let i = 10; i <= 20; i++) {
        result.push(i * i);
    }
    console.log(result.toString())
}

function taskThree() {
    console.log('\nВивести таблицю множення на 7.:');

    let result = [];
    for (let i = 0; i <= 10; i++) {
        result.push(i * 7);
    }
    console.log(result.toString())
}

function taskFour() {
    console.log('\nЗнайти суму всіх цілих чисел від 1 до 15.');

    let result = 0;
    for (let i = 1; i <= 15; i ++) {
        result += i;
    }
    console.log(result)
}

function taskFive () {
    console.log('\nЗнайти добуток усіх цілих чисел від 15 до 35: ')

    let result = 1n;
    for (let i = 15n; i <= 35n; i ++) {
        result *= i;
    }
    console.log(result)
}

function taskSix () {
    console.log('\nЗнайти середнє арифметичне всіх цілих чисел від 1 до 500: ')

    let n = 500;
    let s = 0;
    for (let i = 1; i <= n; i ++){
        s = s + i;
    }
    s = s / n;
    console.log(s);
}

function taskSeven () {
    console.log('\nВивести суму лише парних чисел в діапазоні від 30 до 80: ')

    let sum = 0;
    for (let i = 30; i <= 80; i ++) {
        if ( (i % 2) === 0) {
            sum += i;
        }
    }
    console.log(sum);
}

function taskEight () {
    console.log('\nВивести всі числа в діапазоні від 100 до 200 кратні 3.')

    let result = [];
    for ( let i = 100; i <= 200; i ++ ) {
        if ((i % 3) === 0) {
            result.push( i );
        }
    }
    console.log(result.toString());
}

function taskNineTenEleven () {
    console.log('\nДано натуральне число. Знайти та вивести на сторінку всі його дільники.')
    console.log('\nВизначити кількість його парних дільників.')
    console.log('\nЗнайти суму його парних дільників.')
    let n = 90;
    let result = [];
    let count = 0;
    let sum = 0;
    console.log(`Натуральне число  - ${n}`)
    for (let i = 2; i < n; i ++) {
        if (n % i === 0) {
            result.push(i);
            if ((i % 2) === 0) {
               count ++ ;
               sum += i;
            }
        }
    }
    console.log(result.toString());
    console.log(`кількість парних дільників - ${count}`);
    console.log(`сума парних дільників: ${sum}`);
}

function taskTwelve () {
    console.log('\nНадрукувати повну таблицю множення від 1 до 10.')

    let multiply;
    for ( let i = 1; i <= 10; i ++){
        for ( let j = 1; j <= 10; j ++) {
            multiply = i * j;
            console.log(i + "*" + j + "=" + multiply);
        }
    }
}


