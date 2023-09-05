// class User {
//     constructor(name, lastname, birthday, gender, city, address, language) {
//         this._name = name;
//         this._lastname = lastname;
//         this._birthday = birthday;
//         this._gender = gender;
//         this._city = city;
//         this._address = address;
//         this._language = language;
//     }
//
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get lastname() {
//         return this._lastname;
//     }
//
//     set lastname(value) {
//         this._lastname = value;
//     }
//
//     get birthday() {
//         return this._birthday;
//     }
//
//     set birthday(value) {
//         this._birthday = value;
//     }
//
//     get gender() {
//         return this._gender;
//     }
//
//     set gender(value) {
//         this._gender = value;
//     }
//
//     get city() {
//         return this._city;
//     }
//
//     set city(value) {
//         this._city = value;
//     }
//
//     get address() {
//         return this._address;
//     }
//
//     set address(value) {
//         this._address = value;
//     }
//
//     get language() {
//         return this._language;
//     }
//
//     set language(value) {
//         this._language = value;
//     }
// }

function showInfo() {
    const form = document.getElementById('registrationForm');
    const textOutput = document.getElementById('textOutput');

    let outputText = "Введені данні:\n"
    for (let i = 0; i < form.elements.length - 1; i++) {
        const element = form.elements[i];
        if (element.type !== 'button') {
            outputText += `${element.name}: ${element.value}\n`
        }
    }
    // textOutput.querySelector("pre").textContent = outputText;
    textOutput.textContent = outputText;
    textOutput.classList.remove("hidden");
    form.classList.add("hidden");
}

