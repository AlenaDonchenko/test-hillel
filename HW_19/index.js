 class Person {
    constructor (name, age) {
     this.name = name;
     this.age = age;
 }
 getInfoPerson(){
         console.log(`Імя: ${this.name}, вік: ${this.age}`)
 }
 }
 class Car {
     constructor(brand, model, year, color, owner) {
         this.name = brand;
         this.model = model;
         this.year = year;
         this.color = color;
         this.owner = owner;
     }
     setOwner(owner) {
         if (owner.age > 18) {
             this.owner = owner;
         } else {
             console.log('Вік власника повинен бути > 18 років. ')
         }
     }
     getInfoCar() {
         console.log(`Марка: ${this.name}, модель: ${this.model}, рік випуску: ${this.year}, колір: ${this.color}`);
         if (this.owner){
             console.log('Інформація про власника: ')
             this.owner.getInfoPerson()
         } else {
             console.log('Цей автомобіль не має власника')
         }
     }
 }

 const Person1 = new Person('Alex', 16);
 const Person2 = new Person('Lina', 27);
 const Person3 = new Person('Den', 23)

 const car1 = new Car('Ford','Mondeo',2023, 'чорний');
 const car2 = new Car('Mazda','6', 2020, 'червоний');
 const car3 = new Car('BMW', 'X5', 2022, 'білий');

 car1.setOwner(Person1);
 car2.setOwner(Person2);
 car3.setOwner(Person3);


 car1.getInfoCar();
 car2.getInfoCar();
 car3.getInfoCar();



