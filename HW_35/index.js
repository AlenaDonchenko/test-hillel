fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=7a3e02c1cb2577465a2eae7a36cde87d')
.then(function (resp) {
    return resp.json() })
    .then(function (data) {
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.degrees').innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector('.pressure').textContent = `Pressure: ${data.main.pressure}`;
        document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}`;
        document.querySelector('.wind').textContent = `Speed: ${data.wind.speed}`;
        document.querySelector('.direction').innerHTML = `Direction: ${data.wind.deg}`;
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.icon li').innerHTML = '<img src = "http://openweathermap.org/img/w/10d.png">'

    })

