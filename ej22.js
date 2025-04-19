let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener('input', function() {
    output.textContent = input.value;
    if (input.value.length > 20) {
        output.style.backgroundColor = 'yellow';
    } else {
        output.style.backgroundColor = 'white';
    }
});