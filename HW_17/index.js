function getNumberPhone(inputNumberTelString) {

    const numberTelRegExp = /^(\+?380)(\s?\-?\d{2})(\s?\-?\d{3})(\s?\-?\d{2})(\s?\-?\d{2})/gm;
    const numberTel = inputNumberTelString.match(numberTelRegExp);


    if (numberTel != null) {
       return numberTel[0].match(/\d/g).slice(2).join('');
    } else {
        return null
    }
}

console.log(getNumberPhone("+380 44 364 83 65")); // 0443648365
console.log(getNumberPhone("380-44-364-83-65")); // 0443648365
console.log(getNumberPhone("+38 044 364 83 65")); // null