class Student {
    constructor(name, lastName, year) {
        this.name = name;
        this.lastName = lastName;
        this.year = year;
        this.grades = [];
        this.visitLog = new Array(25);
    }

    getName() {
        return this.name;
    }

    getGpa() {
        const gpa = this.grades.reduce((total, amount, index, array) => {
            total += amount;
            if (index === array.length - 1) {
                return total / this.grades.length;
            } else {
                return total;
            }
        }, 0)
    }

    present() {
        return this.visitLog.push(true);
    }

    calculatePresent() {
        let countTrue = this.visitLog.filter(value => value === true).length;
        let averageValuePresent = countTrue / this.visitLog.length;

        return averageValuePresent;
    }

    absent() {
        return this.visitLog.push(false);
    }

    summary() {
        const averagePresent = this.calculatePresent();
        const gpa = this.getGpa();
        if (gpa > 90 && averagePresent > 0.9) {
            console.log("Молодець!");
        } else {
            if (gpa < 90 || averagePresent < 0.9) {
                console.log("Добре, але можна краще");
            } else {
                if (gpa < 90 && averagePresent < 0.9) {
                    console.log("Редиска!");
                }
            }
        }
    }
}

const student1 = new Student("Іван", "Петров", 2000);
const student2 = new Student("Марія", "Сидорова", 2002);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.present();
student2.absent();
student2.absent();
student2.absent();

student1.grades = [95, 92, 97, 98, 98, 90];
student2.grades = [88, 75, 91, 82];

console.log(student1.summary());
console.log(student2.summary());