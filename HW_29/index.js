class Person {

    constructor(firstName, lastName, berstday, address, gender, city, languages) {

        this._firstName = firstName;
        this._lastName = lastName;
        this._berstday = berstday;
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

    get berstday() {
        return this._berstday;
    }

    set berstday(value) {
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
    const form = document.getElementById('registrationForm');
    const dataTable = document.getElementById("dataTable");
    const table = document.querySelector("table");

    table.innerHTML = '';

    let person = findPersonFromForm();

    console.log(person);


    for (let i = 0; i < form.elements.length - 1; i++) {
        const element = form.elements[i];
        if (element.type !== 'button') {
            const row = table.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = element.name;
            cell2.textContent = element.value;
        }
    }
    dataTable.classList.remove("hidden");
    form.classList.add("hidden");
}

function findValue(id) {
    console.log(id)
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
        return document.getElementById('female').value


}
}
