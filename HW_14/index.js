function generateKey(length, characters) {
    let key = [];
    while (length !== 0) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        key.push(characters.charAt(randomIndex));
        length--;
    }
    return key.toString().replaceAll(',', '');
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const key = generateKey(16, characters);
console.log(key)