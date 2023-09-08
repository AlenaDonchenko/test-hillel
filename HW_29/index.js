class Person {
    constructor(firstName, lastName, birthday, address, gender, city, languages) {

        this._firstName = firstName;
        this._lastName = lastName;
        this._berstday = birthday;
        this._gender = gender;
        this._city = city;
        this._address = address;
        this._languages = languages;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get birthday() {
        return this._berstday;
    }
    set birthday(value) {
        this._berstday = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get languages() {
        return this._languages;
    }
    set languages(value) {
        this._languages = value;
    }
}

function showInfo() {
    let tbody = document.getElementById('tbody');
    const form = document.getElementById('registrationForm');
    const dataTable = document.getElementById("dataTable");
    const table = document.querySelector("table");

    let person = findPersonFromForm();
    let tr = "<tr>";

    tr += "<td>" + person.firstName + "</td>" +
        "<td>" + person.lastName + "</td>" +
        "<td>" + person.birthday + "</td>" +
        "<td>" + person.gender + "</td>" +
        "<td>" + person.city + "</td>" +
        "<td>" + person.address + "</td>" +
        "<td>" + person.languages + "</td>" +
        "</tr>";

    tbody.innerHTML += tr;
    dataTable.classList.remove("hidden");
    form.classList.add("hidden");

}
function findValue(id) {
    return document.getElementById(id).value;
}

function findPersonFromForm() {
    return new Person(
        findValue('firstName'),
        findValue('lastname'),
        findValue('birthday'),
        findValue('address'),
        findGender(),
        findValue('city'),
        findLanguages()
    )
}

function findLanguages() {
    let languagesForm = document.querySelectorAll(".check-box");
    let checkedLanguages = [];
    for (let language of languagesForm){
        if(language.checked === true){
            checkedLanguages.push(language.value);
        }
    }
    return checkedLanguages;
}
function findGender() {
    if(document.getElementById('male').checked) {
        return document.getElementById('male').value;

    } else if (document.getElementById('female').checked) {
        return document.getElementById('female').value;
    }
}

