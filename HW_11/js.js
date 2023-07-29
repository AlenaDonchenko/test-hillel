const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, number) {

    for (let i = 0; i < array.length; i++) {
      if (array[i] === number){
         array.splice(array[i]-1,1);
      }
    }
    return array;
}

console.log(removeElement(array, 3));

