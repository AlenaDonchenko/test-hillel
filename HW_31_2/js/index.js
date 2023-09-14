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
        window.open(`./make-order-form.html?productId=${productId}`, '_blank');

    }
}


