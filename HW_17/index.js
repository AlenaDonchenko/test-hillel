function getNumberTelephone (inputNumberTelString){

const numberTelRegExp = /^(\+?380)(\s?\-?\d{2})(\s?\-?\d{3})(\s?\-?\d{2})(\s?\-?\d{2})/gm;
const numberTel = inputNumberTelString.match(numberTelRegExp);

if (numberTel){
    const localNumberTel = numberTel
        .slice(0,2)
        .join('');

    return localNumberTel;
} else {
    return null
}
}
console.log(getNumberTelephone("+380 44 364 83 65")); // 0443648365
console.log(getNumberTelephone("380-44-364-83-65")); // 0443648365
console.log(getNumberTelephone("+38 044 364 83 65")); // null