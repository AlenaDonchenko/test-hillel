class Person {
    constructor (name, gender) {
        this.name = name;
        this.gender = gender;
    }
    }
class Flat {
constructor() {
    this.residents = [];
}
addResidents (person){
    this.residents.push(person);
}
}
class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }
    addFlat(flat){
        if (this.flats.length < this.maxFlats ) {
         this.flats.push(flat);
        } else {
            console.log('Максимальна кількість квартир перевищена')
        }
    }
}
const person1 = new Person('Den', 'чоловік');
const person2 = new Person('Dina', 'жінка');
const person3 = new Person('Maks', 'чоловік');
const person4 = new Person('Nik', 'чоловік');
const person5 = new Person('Margo', 'жінка');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat()

flat1.addResidents(person1);
flat1.addResidents(person2);
flat2.addResidents(person3);
flat3.addResidents(person4);
flat4.addResidents(person5)


const house = new House(3);
house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
house.addFlat(flat4);

console.log(house);
console.log(flat1);
console.log(flat2);
console.log(flat3);






