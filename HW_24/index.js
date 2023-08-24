const textInput = document.getElementById("text-input");
const someText = document.getElementById("some-text");

textInput.addEventListener("focus", () => {
    someText.style.display = 'block';
})
textInput.addEventListener("blur",() => {
    someText.style.display = 'none';
})