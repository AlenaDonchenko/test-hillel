let products = [
    new Product('Lenovo IdeaPad Gaming 3', 1, 1, 32999, 'img/img1.jpg'),
    new Product('Apple MacBook Air 13" M1 8/256GB ', 2, 1,39999,'img/img2.jpg'),
    new Product('Acer Nitro 5 AN517-41-R8F9', 3, 1, 32999,'img/img3.jpg'),
    new Product('HP Laptop 15s-eq2056ua', 4, 1,20959,'img/img4.jpg'),
    new Product('Samsung Galaxy Tab S9 5G 12/256GB ', 5, 2,49999,'img/img5.jpg'),
    new Product('Xiaomi Mi Pad 6  Wi-Fi 6/128GB', 6, 2,15750,'img/img6.jpg'),
    new Product('Apple iPad 10.9', 7, 2, 49999,'img/img8.jpg'),
    new Product('Samsung Galaxy Tab 2022 Wi-Fi 64GB', 8, 2, 5300,'img/img7.jpg'),
    new Product('Samsung Galaxy A24 6/128GB Black', 9, 3, 8900,'img/img11.jpg'),
    new Product('Motorola G32 Satin Maroon', 10, 3, 6399,'img/img9.jpg'),
    new Product('Xiaomi Redmi Note 12 Pro 4G', 11, 3, 10399,'img/img10.jpg'),
    new Product('Apple iPhone 14 Plus 128GB', 12, 3, 43999,'img/img12.jpg'),
];

let category = [
    new Category('Ноутбуки', 1),
    new Category('Планшети', 2),
    new Category('Смартфони', 3)
];

function findProductsByCategoryId(categoryId) {
    return products.filter((product) => product._categoryId === categoryId);
}

function findInfo(productId) {
    return products.find((product) => product._productId === productId);
}
