const array = ["a", 54, 12, 15, 4, "b"];

function removeElement(array, element) {
const indexElem = array.indexOf(element)
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element){
         array.splice(indexElem,1);
      }
    }
    return array;
}

console.log(removeElement(array, 54));

