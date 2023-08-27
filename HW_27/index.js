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
let emojiList = [
    new emoticon(id++, '🤗', 0),
    new emoticon(id++, '😁', 0),
    new emoticon(id++, '🤪', 0),
    new emoticon(id++, '😉', 0),
    new emoticon(id++, '🤩', 0)
]

function showEmojis() {
    const emojiContainer = document.getElementById("emoji-container");

    emojiList.forEach((emoticon) => {
        const emojiDiv = document.createElement("div");
        emojiDiv.onclick = () => {
            addVoice(emoticon.emojiId);
        };
        emojiDiv.id = `${emoticon.emojiId}`;
        emojiDiv.textContent = emoticon.emoji + ' (' + emoticon.count + ')';
        emojiDiv.classList.add("emoji");
        emojiContainer.appendChild(emojiDiv);
    });
}
showEmojis();

function addVoice(id) {
    const emoticon = emojiList.find(emoticon => emoticon.emojiId === id)
    if (emoticon) {
        emoticon._count += 1;
        updateEmojiDisplay(emoticon);
    }
}

function updateEmojiDisplay(emoticon) {
    const emojiDiv = document.getElementById( emoticon.emojiId);
    if (emojiDiv) {
        emojiDiv.textContent = emoticon.emoji + ' (' + emoticon.count + ')';
    }
}






