let a;
let b;
let c;

run();

function run() {

    while (a !== null && !isValidNumber(a)) {
        a = prompt('Будемо знаходити рішення квадратного рівняння виду:\n ax^2 + bx + c = 0.\n  Введіть a');
        console.log(a + ' - ' + isValidNumber(a));
        if (a == null) {
            stopMessage();
            return;
        }
    }
    if (Number.parseInt(a) === 0) {
        alert("a = 0. Рівняння не має рішень.");
        return;
    }

    while (b !== null && !isValidNumber(b)) {
        b = prompt(`a = ${a}. Введіть b`);
        if (b == null) {
            stopMessage();
            return;
        }
    }

    while (c !== null && !isValidNumber(c)) {
        c = prompt(`a = ${ a }, b = ${ b }. Введіть c`);
        if (c == null) {
            stopMessage();
            return;
        }
    }
    squareRoot();
}

function squareRoot() {
    const discriminant = (b * b) - (4 * a * c);

    if (discriminant < 0) {
        alert("D < 0. Рівняння не має рішень.");
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        alert(`D = 0. Єдиний корінь рівняння: ${root}`);
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert(`D > 0. Корені рівняння: ${root1}, ${root2}`);
    }
}

function isValidNumber(number) {
    return !isNaN(number) && number !== '';
}

function stopMessage() {
    alert('Жаль. Сподіваюсь ще побачитись.')
}
