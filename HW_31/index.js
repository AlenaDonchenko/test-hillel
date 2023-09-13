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
    constructor(productName, productId, categoryId, price) {
        this._productId = productId;
        this._productName = productName;
        this._categoryId = categoryId;
        this._price = price;
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
}

class Order {
    constructor(orderId, postReceive, fullName, productId, createdAt, totalPriceOrder, count, comment) {

        this._orderId = orderId;
        this._postReceive = postReceive;
        this._fullName = fullName;
        this._productId = productId;
        this._createdAt = createdAt;
        this._totalPriceOrder = totalPriceOrder;
        this._count = count;
        this._comment = comment;
    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get postReceive() {
        return this._postReceive;
    }

    set postReceive(value) {
        this._postReceive = value;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get productId() {
        return this._productId;
    }

    set productId(value) {
        this._productId = value;
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(value) {
        this._createdAt = value;
    }

    get totalPriceOrder() {
        return this._totalPriceOrder;
    }

    set totalPriceOrder(value) {
        this._totalPriceOrder = value;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }

    get comment() {
        return this._comment;
    }

    set comment(value) {
        this._comment = value;
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

showCategory();

function showCategory() {
    const categories = document.querySelector('.categories');
    categories.innerHTML = '';

    document.addEventListener('DOMContentLoaded', function () {

        category.forEach((category) => {
            const categoryDiv = document.createElement("div");
            categoryDiv.textContent = category._categoryName;
            categoryDiv.classList.add("category-list");
            categoryDiv.onclick = () => {
                showProduct(category.categoryId);
            };
            categories.appendChild(categoryDiv);
        });
    });
}

function showProduct(categoryId) {
    const goods = document.querySelector('.product');
    goods.innerHTML = '';

    const productsInCategory = findProductsByCategoryId(categoryId);
    productsInCategory.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.textContent = product._productName;
        productDiv.classList.add("product-list");
        productDiv.onclick = () => {
            showInfoByProductId(product._productId);
        }
        goods.appendChild(productDiv);
    })
}

function findProductsByCategoryId(categoryId) {
    return products.filter((product) => product._categoryId === categoryId);
}

function findInfo(productId) {
    return products.find((product) => product._productId === productId);
}

function showInfoByProductId(productId) {

    const prodInfo = document.querySelector('.info-block');
    prodInfo.innerHTML = '';
    const infoProduct = findInfo(productId);

    const productInfoDiv = document.createElement("div");
    productInfoDiv.textContent = ' Ціна:  ' + infoProduct.price + ' грн';
    productInfoDiv.classList.add("product-info");
    prodInfo.appendChild(productInfoDiv);

    const buttonBye = document.createElement("button");
    buttonBye.textContent = 'Купити';
    buttonBye.classList.add("btn");
    prodInfo.appendChild(buttonBye);
    buttonBye.onclick = () => {

        window.open(`inner.html?productId=${productId}`, '_blank');
    }
}




