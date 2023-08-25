let table = document.getElementById("digit-table");
let count = 1;
let maxDigit = 100;

for (let i = 0; i < 10; i ++) {
    let row = table.insertRow(i);


    for (let j = 0; j < 10; j++) {
        let cell = row.insertCell(j)


        if (count <= maxDigit) {
            cell.innerHTML = count.toString();
            count++;
        }
    }
}