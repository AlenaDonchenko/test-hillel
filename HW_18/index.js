 function findDate (str) {
     const regEx = /(\d{4})?-(\d{2})-(\d{2})/g;
     const strRegEx = str.match(regEx);
     if (strRegEx === null){
         return [];
     }
     const months = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"]



         }
