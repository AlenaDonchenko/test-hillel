
let orders = [Order];
let orderId =1;

function createOrder() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('productId');

    const form = document.getElementById('form');
    const customerName = document.getElementById('customerName');
    const deliveryCity = document.getElementById('deliveryCity');
    const novaPoshta = document.getElementById('novaPoshta');
    const payment = document.getElementById('payment');
    const quantity = document.getElementById('quantity');
    const comment = document.getElementById('comment');



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

        if (!isError){
            const orderInfo =
                `<h2> Інформація про заказ: </h2>
        <p>Покупець: ${customerName.value}</p>
        <p>Місто доставки: ${deliveryCity.value}</p>
        <p>Відділення Нової пошти: ${novaPoshta.value}</p>
        <p>Спосіб оплати: ${payment.value}</p>
        <p>Кількість : ${quantity.value}</p>
        <p>Коментар до заказу: ${document.getElementById('comment').value}</p>`

            form.innerHTML = orderInfo;
        }

    let order = new Order()
        order.orderId = orderId++;
        order.postReceive  = deliveryCity.value + ' - ' + novaPoshta.value;
        order.fullName = customerName.value;
        order.productId = productId;
        order.createdAt = Date.now();
        order.count = quantity.value;
        order.comment = comment.value;

        orders.push(order);

}






