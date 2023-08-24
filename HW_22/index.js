class Student {
    constructor(name, lastName, year) {
        this.name = name;
        this.lastName = lastName;
        this.year = year;
        this.grades = [];
        this.visitLog = new Array(25);
        this.countRealLessons = 0;
    }

    getAge() {
        return console.log(`Студент: ${this.name}  ${this.lastName} , вік : ${2023 - this.year}`);
    }

    getAverageRating() {
        let sumRating = this.grades.reduce(function (a, b) {
            return a + b;
        });
        return sumRating / this.grades.length;
    }

    addVisit(isVisit) {
        if (this.countRealLessons < 25) {
            this.countRealLessons++;
            return this.visitLog.push(isVisit);
        } else {
            console.log("Не може бути більше 25 записів.")
        }
    }

    present() {
        this.addVisit(true);
    }

    absent() {
        this.addVisit(false);
    }

    calculatePresent() {
        let countTrue = this.visitLog.filter(value => value === true).length;
        return countTrue / this.countRealLessons;
    }

    summary() {
        const averagePresent = this.calculatePresent();
        const averageRating = this.getAverageRating();
        if (averageRating > 90 && averagePresent > 0.9) {
            console.log(`Середній бал: ${averageRating}, коефіцієнт відвідування: ${averagePresent}, висновок: Молодець!`);
        } else if (averageRating < 90 && averagePresent < 0.9) {
            console.log(`Середній бал: ${averageRating}, коефіцієнт відвідування: ${averagePresent}, висновок: Редиска!`);
        } else if (averageRating < 90 || averagePresent < 0.9) {
            console.log(`Середній бал: ${averageRating}, коефіцієнт відвідування: ${averagePresent}, висновок: Добре, але можна краще!`);
        }
    }
}

const student1 = new Student("Іван", "Петренко", 2000);
const student2 = new Student("Марія", "Соколова", 2001);
const student3 = new Student("Денис", "Романов", 1999);

student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();

student2.present();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.absent();
student3.present();

student1.grades = [95, 92, 97, 98, 98, 90];
student2.grades = [93, 91, 92, 94];
student3.grades = [73, 81, 82, 74];

student1.getAge();
student1.summary();

student2.getAge();
student2.summary();

student3.getAge();
student3.summary();
