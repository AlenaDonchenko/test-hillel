let orderId = 1;

function findProductsByCategoryId(categoryId) {
    return products.filter((product) => product._categoryId === categoryId);
}

function findInfo(productId) {
    return products.find((product) => product._productId === productId);
}

function addOrder(order) {
    orders.push(order);
}