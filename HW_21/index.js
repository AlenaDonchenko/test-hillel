class Hamburger {
   static SIZES = {
        SMALL: {price: 50, calories: 20},
        BIG: {price: 100, calories: 40}
    }
    static STUFFING = {
        SALAD: {price: 20, calories: 5},
        POTATO: {price: 15, calories: 10},
        CHEESE: {price: 10, calories: 20}
    }
    static TOPPING = {
        MAYO: {price: 20, calories: 5},
        SAUCE: {price: 15, calories: 0}
    }
    constructor(size, stuffing) {
        this.toppings = [];
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

     calculateCalories() {
         const total = this.size.calories + this.stuffing.calories;
         return this.toppings.reduce((accumulator, topping) => accumulator + topping.calories, total);
     }

    calculatePrice() {
        const totalPrice = this.size.price + this.stuffing.price;
        return this.toppings.reduce((accumulator, topping) => accumulator + topping.price, totalPrice);
    }
}

const hamburger = new Hamburger(Hamburger.SIZES.SMALL, Hamburger.STUFFING.CHEESE);

hamburger.addTopping(Hamburger.TOPPING.MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING.SAUCE)

console.log("Price with sauce: " + hamburger.calculatePrice());

