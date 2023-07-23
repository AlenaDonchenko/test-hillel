
function sumNumbers(){
    let sum = 0;

    return function (number){
        sum +=number;
        return sum;
    }
}
let sum = sumNumbers();

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))