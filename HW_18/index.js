function findDate(str) {

    const dateResults = [];
    const regEx = /(\d{4})?-(\d{2})-(\d{2})/g;
    let dates = str.match(regEx);
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        for (let i = 0; i < dates.length; i++) {
            let dateInfo = dates[i].split('-');
            if (isCorrectDate(dateInfo)) {
                const dateObj = {
                    day: dateInfo[2],
                    month: dateInfo[1],
                    monthName: months[dateInfo[1] - 1],
                    year: dateInfo[0],
                };
                dateResults.push(dateObj);
            }
        }
        return dateResults;
}
const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
 console.log(findDate(str))


function isCorrectDate(dateInfo) {
    if (+dateInfo[2] < 1 || +dateInfo[2] > 31) {
        return false;
    }
    if (+dateInfo[1] < 1 || +dateInfo[1] > 12) {
        return false;
    }
    if (+dateInfo[0] < 1) {
        return false;
    }
    return true;
}
