let a = 0;
let b = 0;
let c = 0;

run();

function run() {

    while (true) {
        a = prompt('Будемо знаходити рішення квадратного рівняння виду:\n ax^2 + bx + c = 0.\n  Введіть a');
        if (a != null && isValidNumber(a)) {
            break;
        }
        if (a == null) {
            stopMessage();
            return;
        }
    }
    if (Number.parseInt(a) === 0) {
        alert("a = 0. Рівняння не має рішень.");
        return;
    }
    alert(`a = ${a}`)

    while (true) {
        b = prompt('Введіть b');
        if (b != null && isValidNumber(b)) {
            break;
        }
        if (b == null) {
            stopMessage();
            return;
        }
    }
    alert(`b = ${b}`)

    while (true) {
        c = prompt('Введіть c');
        if (c != null && isValidNumber(c)) {
            break;
        }
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
    return !isNaN(parseInt(number)) && isFinite(number);
}

function stopMessage() {
    alert('Жаль. Сподіваюсь ще побачитись.')
}
