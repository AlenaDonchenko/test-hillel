class Hamburger {

    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_BIG = {price: 100, calories: 40};
    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_SPICE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5}

constructor(size, stuffing, toppings) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];

}
    addTopping(topping) {
        this.toppings.push(topping)
    }
    calculateCalories(){
        const total = this.size.calories + this.stuffing.calories;
        return
    }

}


