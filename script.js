var btn = document.querySelector('button');
var textElement = document.getElementById('text');
var originalText = textElement.innerText;

function showMoreLess() {
    if (textElement.innerText.length > 50) {
        textElement.innerText = textElement.innerText.slice(0, 50);
        btn.innerText = "See more";
    } else {
        textElement.innerText = originalText;
        btn.innerText = "See less";
    }
}
