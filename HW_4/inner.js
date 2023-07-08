let answerAge = '';
let answerCity = '';
let answerSport = '';

let age = Number(prompt('Вввідіть свій рік народження'));
if (age) {
    answerAge = `Ваш вік: ${2023 - age} років`;
} else {
    alert('Шкода, що Ви не захотіли ввести свій рік народженння.');
}
let city = prompt('В якому місті ви мешкаєте?');
if (city != null && city !== '') {
    switch (city.toUpperCase()) {
        case 'КИЇВ':
            answerCity = 'Ти живеш у столиці України!';
            break;
        case  'ВАШИНГТОН':
            answerCity = 'Ти живеш у столиці Америки!';
            break;
        case 'ЛОНДОН':
            answerCity = 'Ти  живеш у столиці Великої Британії!';
            break;
        default:
            answerCity = '';
    }
} else {
    alert('Шкода, що Ви не захотіли ввести своє місто народження!');
}
let sport = prompt('Ваш улюблений вид спорту?');
if (sport != null && sport !== '') {
    switch (sport) {
        case  'бокс':
            answerSport = 'Круто! Хочеш стати як Олександр Усик?';
            break;
        case  'футбол':
            answerSport = 'Круто! Хочеш стати як Дієго Марадона?';
            break;
        case 'теніс':
            answerSport = 'Круто! Хочеш стати як Штефі Граф?';
            break;
        default:
            answerSport = '';
    }
} else {
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту!');
}
alert(`${answerAge}  \n${answerCity} \n${answerSport}`);