


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
    const productImage = document.createElement("img");
    productImage.src = infoProduct.image;

    const productNameDiv = document.createElement("div");
    productNameDiv.textContent = infoProduct.productName;
    productNameDiv.classList.add("product-name-div");
    prodInfo.appendChild(productNameDiv);

    const productInfoDiv = document.createElement("div");
    productInfoDiv.textContent = 'Ціна:  '+ infoProduct.price + ' грн';
    productInfoDiv.classList.add("product-info");
    prodInfo.appendChild(productImage);
    prodInfo.appendChild(productInfoDiv);

    const buyButton = document.createElement("button");
    buyButton.textContent = 'Купити';
    buyButton.classList.add("button-bye");
    buyButton.id = 'buyButton';

    buyButton.addEventListener('click', () => {
        const orderForm = document.getElementById('orderForm');
        orderForm.style.display = 'block';
    })
    prodInfo.appendChild(buyButton);

    const productIdInput = document.createElement("input");
    productIdInput.type = 'hidden';
    productIdInput.id = 'product-id-input';
    productIdInput.textContent = productId;
    prodInfo.appendChild(productIdInput);
}






