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
    constructor(productName, productId, category, info, price) {
        this._productId = productId;
        this._productName = productName;
        this._category = category;
        this._info = info;
        this._price = price;
    }

    get productName() {
        return this._productName;
    }
    get productId() {
        return this._productId;
    }
    get category() {
        return this._category;
    }
    get info() {
        return this._info;
    }
    get price() {
        return this._price;
    }
}

/*class CategoryService {
    constructor() {
        this.categories = [
            new Category('Ноутбуки', 1),
            new Category('Планшети', 2),
            new Category('Смартфони', 3)
        ];
    }

    static findAllCategory() {
        return this.categories;
    }
}*/

/*class ProductService {

    constructor() {
        this.goods = [
            new Product('Lenovo', 1, 'Ноутбуки', 'Lenovo IdeaPad Gaming 3', 32999),
            new Product('Apple', 2, 'Ноутбуки', ' MacBook Air 13" M1 8/256GB', 39999),
            new Product('Acer', 3, 'Ноутбуки', 'Nitro 5 AN517-41-R8F9', 32999),
            new Product('HP', 4, 'Ноутбуки', 'Laptop 15s-eq2056ua ', 20959),
            new Product('Samsung', 5, 'Планшеты', 'Samsung Galaxy Tab S9 5G 12/256GB ', 49999),
            new Product('Xiaomi', 6, 'Планшеты', 'Mi Pad 6 Wi-Fi 6/128GB', 15750),
            new Product('Apple', 7, 'Планшеты', 'iPad 10.9" 2022 Wi-Fi 64GB', 49999),
            new Product('Samsung', 8, 'Планшеты', ' Galaxy Tab A7 Lite', 5300),
            new Product('Samsung', 9, 'Смартфоны', 'Galaxy A24 6/128GB Black', 8900),
            new Product('Motorola', 10, 'Смартфоны', 'G32 6/128GB Satin Maroon', 6399),
            new Product('Xiaomi', 11, 'Смартфоны', 'Redmi Note 12 Pro 4G', 10399),
            new Product('Apple', 12, 'Смартфоны', 'iPhone 14 Plus 128GB', 43999),

        ];
    }

    static findGoodsByCategory(categoryId) {
        return this.goods.filter((good) => good._category === categoryId);
    }


    static findProductsById(productId) {
        return this.goods.find((product) => product._productId === productId);
    }
}*/


let products = [
    new Product('Lenovo', 1, 'Ноутбуки', 'Lenovo IdeaPad Gaming 3', 32999),
    new Product('Apple', 2, 'Ноутбуки', ' MacBook Air 13" M1 8/256GB', 39999),
    new Product('Acer', 3, 'Ноутбуки', 'Nitro 5 AN517-41-R8F9', 32999),
    new Product('HP', 4, 'Ноутбуки', 'Laptop 15s-eq2056ua ', 20959),
    new Product('Samsung', 5, 'Планшети', 'Samsung Galaxy Tab S9 5G 12/256GB ', 49999),
    new Product('Xiaomi', 6, 'Планшети', 'Mi Pad 6 Wi-Fi 6/128GB', 15750),
    new Product('Apple', 7, 'Планшети', 'iPad 10.9" 2022 Wi-Fi 64GB', 49999),
    new Product('Samsung', 8, 'Планшети', ' Galaxy Tab A7 Lite', 5300),
    new Product('Samsung', 9, 'Смартфони', 'Galaxy A24 6/128GB Black', 8900),
    new Product('Motorola', 10, 'Смартфони', 'G32 6/128GB Satin Maroon', 6399),
    new Product('Xiaomi', 11, 'Смартфони', 'Redmi Note 12 Pro 4G', 10399),
    new Product('Apple', 12, 'Смартфони', 'iPhone 14 Plus 128GB', 43999),

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
                categoryDiv.classList.add("category-list")
                categories.appendChild(categoryDiv);
            });
        })
}

function showProduct() {
    const product = document.querySelector('.product');
    product.innerHTML = '';
}
