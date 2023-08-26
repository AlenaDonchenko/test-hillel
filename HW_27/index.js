class emoticon {
    constructor(emojiId, emoji, count) {
        this._emojiId = emojiId;
        this._emoji = emoji;
        this._count = count;
    }

    get emojiId() {
        return this._emojiId;
    }

    get emoji() {
        return this._emoji;
    }

    get count() {
        return this._count;
    }
}

let id = 1;

let emojiList = [new emoticon(++id, '🤗', 0),
    new emoticon(++id, '😁', 0),
    new emoticon(++id, '🤪', 0),
    new emoticon(++id, '😉', 0),
    new emoticon(++id, '🤩', 0)]


// Создаем функцию для отображения смайликов на странице
function showEmojis() {
    // Получаем элемент, куда будем добавлять смайлики
    const emojiContainer = document.getElementById("emoji-container");

    // Перебираем массив смайликов и для каждого создаем элемент и добавляем на страницу
    emojiList.forEach((emoticon) => {
        const emojiDiv = document.createElement("div");
        emojiDiv.textContent = emoticon.emoji; // Устанавливаем смайлик в текст элемента
        emojiDiv.classList.add("emoji"); // Добавляем CSS класс для стилизации
        emojiContainer.appendChild(emojiDiv); // Добавляем элемент на страницу

        const countDiv = document.createElement("div")
        countDiv.textContent = emoticon.count; // Устанавливаем счетчик в текст элемента
        countDiv.classList.add("count"); // Добавляем css класс
        emojiContainer.appendChild(countDiv);

    });
}
// Вызываем функцию для отображения смайликов
showEmojis();




