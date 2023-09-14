function createNewOrder() {

    const form = document.getElementById('form');
    const customerName = document.getElementById('customerName');
    const deliveryCity = document.getElementById('deliveryCity');
    const novaPoshta = document.getElementById('novaPoshta');
    const payment = document.getElementById('payment');
    const quantity = document.getElementById('quantity');
    const mainLink = document.getElementById('to-main-menu-button');
    const productId = params.get('productId');


    const nameRegex = /^[А-ЯІЇЄа-яіїє'-]+ [А-ЯІЇЄа-яіїє'-]+$/;
    let isError = false;

    if (!nameRegex.test(customerName.value.trim())) {
        document.getElementById("errorMessage").textContent = "Введіть коректне ПІБ";
        document.getElementById("errorMessage").style.display = "block";
        isError = true;
    } else {
        document.getElementById("errorMessage").style.display = "none";
    }

    if (quantity.value <= 0 || quantity.value === "") {
        isError = true;
        document.getElementById("error").textContent = "Кількість штук повинна бути більше 0";
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
    }

    if (!isError) {

        let newOrder = new Order(generateId(), novaPoshta.value, customerName.value,
            productId, Date(), totalPrice(), quantity.value, 'comment');

        const orderInfo =

            `<h2> Інформація про заказ: </h2>
        <p>Покупець: ${customerName.value}</p>
        <p>Місто доставки: ${deliveryCity.value}</p>
        <p>Відділення Нової пошти: ${novaPoshta.value}</p>
        <p>Спосіб оплати: ${payment.value}</p>
        <p>Кількість : ${quantity.value}</p>
        <p>Коментар до заказу: ${document.getElementById('comment').value}</p>`

        mainLink.style.display = "block";

        form.innerHTML = orderInfo;

        console.log(orderId)
        let key = newOrder._orderId + 'order';
        localStorage.setItem(key, JSON.stringify(newOrder));

    }
}


function findAllKeys() {

    let output = [];

    for (let i = 0, len = localStorage.length; i < len; ++i) {
        output.push(localStorage.getItem(localStorage.key(i)));
    }
    return output;
}

function generateId() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function displayOrders() {
    findAllKeys();

    console.log(findAllKeys())
    /* for (var key in localStorage){
         console.log(key)
     }*/


    const main = document.getElementById('card');

    main.innerHTML = "";

    findAllKeys().forEach((value, index) => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        const obj = JSON.parse(value);
        orderDiv.innerHTML = `
                <p>Дата замовлення: ${findDateNow(new Date(obj._createdAt))}</p>
                <p>Ціна: ${obj._totalPriceOrder}</p>
              
                <div id="orderDetails${index}" style="display: none;"></div>`;
        main.appendChild(orderDiv);

    });
}

function findDateNow(dateInput){
    return dateInput.getDate()  + "-" + (dateInput.getMonth()+1) + "-" + dateInput.getFullYear() + " " +
        dateInput.getHours() + ":" + dateInput.getMinutes();
}

//Функция для расширения и удаления заказов
function expandOrder(index) {
    const detailsDiv = document.getElementById(`orderDetails${index}`);
    detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';

    if (detailsDiv.style.display === 'block') {
        const orders = JSON.parse(localStorage.getItem('orders'));
        const order = orders[index];

        detailsDiv.innerHTML = `
            <p>Customer: ${order._postReceive}</p>
            <p>Delivery Info: ${order.deliveryCity}</p>
            <p>Payment Method: ${order.payment}</p>
            <p>Quantity: ${order._count}</p>
            <p>Comment: ${order.comment}</p>
        `;
    }
}

// function deleteOrder(index) {
//     const orders = JSON.parse(localStorage.getItem('orders'));
//     orders.splice(index, 1);
//     localStorage.setItem('orders', JSON.stringify(orders));
//     displayOrders();
// }
function totalPrice() {
    return (orders._price) * (orders._count);
}










