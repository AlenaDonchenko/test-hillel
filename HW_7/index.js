function number() {

    let num1 = prompt('Будемо знаходити рішення квадратного рівняння виду:\n ax^2 + bx + c = 0.\n  Введіть a');
    if (num1 != null) {
        alert(`a = ${num1}`)
    } else {
        alert('Жаль. Сподіваюсь ще побачитись');

    }

    let num2 = prompt('Введіть b');
    alert(`a = ${num1}, b = ${num2}`)
    let num3 = prompt('Введіть c');
    alert(`a = ${num1}, b = ${num2}, c = ${num3}`)

}
