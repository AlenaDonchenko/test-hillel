let a;
let b;
let c;


run();

function run() {
    alert('Будемо знаходити рішення квадратного рівняння виду:\n ax^2 + bx + c = 0.');
    a = getNumber('Введіть a');
    b = getNumber('Введіть b');
    c = getNumber('Введіть c');
    const result = squareRoot(a, b, c, ifInvalid);
    showResult(result);
}

function getNumber(message) {   /* Просим пользователя ввести число  */
    let result = prompt(message);

    if (result === null) {   /*  если пользователь ничего не вводит,    */
        stopMessage();       /*  выводится сообщение 'Жаль. Сподіваюсь ще побачитись.' */
        return null;
    }
    if (!isValidNumber(result)) {  /* если пользователь вводит не число  */
        return getNumber(message); /* снова просим ввести число  */
    }
    return result;
}

function squareRoot(a, b, c, ifInvalid) {    /* функция на нахождение решения квадратного уравнения  */
    if (Number.parseInt(a) === 0) {
        ifInvalid();
    }

    const discriminant = (b * b) - (4 * a * c);

    if (discriminant < 0) {
        return {d: discriminant, x1: null, x2: null};
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return {d: discriminant, x1: root, x2: null};
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return {d: discriminant, x1: root1, x2: root2};
    }
}

function showResult(result) {   /* выводим результат квадратного уравнения  */
    if (result === null) {
        alert("a = 0. Рівняння не має рішень.");
    } else if (result.d < 0) {
        alert("D < 0. Рівняння не має рішень.");
    } else if (result.d === 0) {
        alert(`D = 0. Єдиний корінь рівняння: ${result.x1}`);
    } else {
        alert(`D > 0. Корені рівняння: ${result.x1}, ${result.x2}`);
    }
}

function ifInvalid() {    /* функция для а=0  */
    alert('a = 0, функція не має рішень.');
}

function isValidNumber(number) {
    return !isNaN(number) && number !== '';
}

function stopMessage() {    /* функция на случай, если пользователь нажал cancel  */
    alert('Жаль. Сподіваюсь ще побачитись.')
}