// script.ts
var toggleButton = document.getElementById('toggleButton');
var body = document.body;
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    }
    else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
