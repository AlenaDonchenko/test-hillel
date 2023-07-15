
function pow (num, degree) {
    if (num === 0 || degree === 0) {
        return 0;
    }
    if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}
console.log(pow(3,3))

