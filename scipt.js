var button = document.getElementsByTagName("button")[0];
var ul = document.getElementsByTagName("ul")[0];
var input = document.getElementsByTagName("input")[0];

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var child = document.createElement("li");
    child.textContent = input.value;
    ul.appendChild(child);
    input.value = ''; // Clear the input field after adding the item
}

button.addEventListener("click", function() {
    if (inputLength() > 0) {
        createListElement();
    } else {
        alert('Please enter some text');
    }
});

input.addEventListener("keydown", function(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
});
