var btn = document.querySelector('button');
var textElement = document.getElementById('text');
var originalText = textElement.innerText;

if (originalText.length > 50) {
    textElement.innerText = originalText.slice(0, 50);
    btn.style.display = 'block';
}

function showMoreLess() {
    if (textElement.innerText.length > 50) {
        textElement.innerText = textElement.innerText.slice(0, 50);
        btn.innerText = "See more";
    } else {
        textElement.innerText = originalText;
        btn.innerText = "See less";
    }
};