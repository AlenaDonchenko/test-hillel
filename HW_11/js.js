const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, number) {

    let arrayIn = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== number){
         arrayIn.push(array[i]);
      }
    }
    return arrayIn;
}

console.log(removeElement(array, 5));

