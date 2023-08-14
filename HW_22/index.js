class Student {
    constructor(name, lastName, year) {
        this.name = name;
        this.lastName = lastName;
        this.year = year;
        this.grades = [];
        this.visitLog = new Array(25);

    }

    getName(){
        return this.name;
    }

    getGpa(){
         this.grades.reduce((total, amount, index, array )=> {
            total += amount;
            if (index === array.length - 1) {
                return total/array.length;
            } else {
                return total;
            }
        }, 0)
    }

    present(){
        if (this.visitLog.length < 25) {
            return this.visitLog.push(true);

        } else {
            console.log("В журналі відвідуваності не може бути більше 25 записів")
        }
    }
    absent() {
        if (this.visitLog.length < 25) {
            return this.visitLog.push(false);
        } else {
            console.log("В журналі відвідуваності не може бути більше 25 записів")
        }
    }

    summary() {

    }



}