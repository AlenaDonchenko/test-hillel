class Size {
    static SMALL =
        { price: 50, calories: 20 }
    static BIG =
        { price: 100, calories: 40 }
}
class Stuffing {
    static SALAD =
        {price: 20, calories: 5}
    static POTATO =
        {price: 15, calories: 10}
    static CHEESE =
        {price: 10, calories: 20}
}
class Topping {
    static MAYO =
        {price: 20, calories: 5}
    static SAUCE =
        {price: 15, calories: 0}
}

class Hamburger {
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

const hamburger = new Hamburger(Size.SMALL, Stuffing.CHEESE);

hamburger.addTopping(Topping.MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Topping.SAUCE)

console.log("Price with sauce: " + hamburger.calculatePrice());

