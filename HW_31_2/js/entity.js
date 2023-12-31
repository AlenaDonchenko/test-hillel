class Category {
    constructor(categoryName, categoryId) {
        this._categoryName = categoryName;
        this._categoryId = categoryId;
    }

    get categoryName() {
        return this._categoryName;
    }

    get categoryId() {
        return this._categoryId;
    }
}

class Product {
    constructor(productName, productId, categoryId, price, image) {
        this._productId = productId;
        this._productName = productName;
        this._categoryId = categoryId;
        this._price = price;
        this.image = image;
    }

    get productName() {
        return this._productName;
    }
    get productId() {
        return this._productId;
    }
    get category() {
        return this._categoryId;
    }

    get price() {
        return this._price;
    }

    get image() {
        return this.image;
    }
}
class Order {
    constructor(orderId, postReceive, fullName, productId, createdAt,
                totalPriceOrder, count, comment) {

        this._orderId = orderId;
        this._postReceive = postReceive;
        this._fullName = fullName;
        this._productId = productId;
        this._createdAt = createdAt;
        this._totalPriceOrder = totalPriceOrder;
        this._count = count;
        this._comment = comment;
    }
}


let products = [
    new Product('Lenovo IdeaPad Gaming 3', 1, 1, 32999),
    new Product('Apple MacBook Air 13" M1 8/256GB ', 2, 1, 39999),
    new Product('Acer Nitro 5 AN517-41-R8F9', 3, 1, 32999),
    new Product('HP Laptop 15s-eq2056ua', 4, 1, 20959),
    new Product('Samsung Galaxy Tab S9 5G 12/256GB ', 5, 2, 49999),
    new Product('Xiaomi Mi Pad 6  Wi-Fi 6/128GB', 6, 2, 15750),
    new Product('Apple iPad 10.9', 7, 2, 49999),
    new Product('Samsung Galaxy Tab 2022 Wi-Fi 64GB', 8, 2, 5300),
    new Product('Samsung Galaxy A24 6/128GB Black', 9, 3, 8900),
    new Product('Motorola G32 Satin Maroon', 10, 3, 6399),
    new Product('Xiaomi Redmi Note 12 Pro 4G', 11, 3, 10399),
    new Product('Apple iPhone 14 Plus 128GB', 12, 3, 43999),
];

let category = [
    new Category('Ноутбуки', 1),
    new Category('Планшети', 2),
    new Category('Смартфони', 3)
];

let orders = [];


