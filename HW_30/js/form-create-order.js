function createOrder() {

    const productIdInput = document.getElementById('product-id-input');
    const productIdSelect = Number(productIdInput.textContent);
    const product = findInfo(productIdSelect);


    const orderInfo =
        `<h2> Інформація про товар: </h2>
                 <p>${product._productName}</p>
                 <p>Покупець: ${customerName.value}</p>
                 <p>Місто доставки: ${deliveryCity.value}</p>
                 <p>Відділення Нової пошти: ${novaPoshta.value}</p>`

    const goods = document.querySelector('.categories');
    goods.innerHTML = '';
    const productBlock = document.querySelector('.product');
    productBlock.innerHTML = orderInfo;

    const infoBlock= document.querySelector('.info-block');
    infoBlock.innerHTML = '';

    return false;
}


