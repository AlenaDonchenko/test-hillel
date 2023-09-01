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
    constructor(productName, productId, categoryId, info, price) {
        this._productId = productId;
        this._productName = productName;
        this._categoryId = categoryId;
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
        return this._categoryId;
    }

    get info() {
        return this._info;
    }

    get price() {
        return this._price;
    }
}


let products = [
    new Product('Lenovo IdeaPad', 1, 1, 'Gaming 3', 32999),
    new Product('Apple MacBook', 2, 1, 'Air 13" M1 8/256GB', 39999),
    new Product('Acer Nitro 5', 3, 1, ' AN517-41-R8F9', 32999),
    new Product('HP Laptop ', 4, 1, '15s-eq2056ua ', 20959),
    new Product('Samsung Galaxy Tab ', 5, 2, 'S9 5G 12/256GB ', 49999),
    new Product('Xiaomi Mi Pad 6', 6, 2, ' Wi-Fi 6/128GB', 15750),
    new Product('Apple iPad 10.9', 7, 2, ' 2022 Wi-Fi 64GB', 49999),
    new Product('Samsung Galaxy Tab', 8, 2, ' A7 Lite', 5300),
    new Product('Samsung Galaxy A24', 9, 3, ' 6/128GB Black', 8900),
    new Product('Motorola G32', 10, 3, '6/128GB Satin Maroon', 6399),
    new Product('Xiaomi Redmi', 11, 3, 'Note 12 Pro 4G', 10399),
    new Product('Apple iPhone 14', 12, 3, ' Plus 128GB', 43999),
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
    })
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
            showInfoByProductId(product._productId)
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
    productInfoDiv.textContent = infoProduct.info + ' Ціна:  ' + infoProduct.price + ' грн';
    productInfoDiv.classList.add("product-info");
    prodInfo.appendChild(productInfoDiv);

    const buttonBye = document.createElement("button");
    buttonBye.textContent = 'Купити';
    buttonBye.classList.add("btn");
    prodInfo.appendChild(buttonBye);
    buttonBye.onclick = () => {
        alert("Товар куплений!");
        refreshPage()
    }
}

function refreshPage() {
    location.reload(); // Этот метод перезагрузит текущую страницу
}
