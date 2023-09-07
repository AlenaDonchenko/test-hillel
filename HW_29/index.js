function showInfo() {
    const form = document.getElementById('registrationForm');
    const dataTable = document.getElementById("dataTable");
    const table = document.querySelector("table");
    table.innerHTML = '';

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

