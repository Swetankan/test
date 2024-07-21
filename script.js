document.getElementById('greeting-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name-input').value;
    const greetingMessage = document.getElementById('greeting-message');
    greetingMessage.textContent = `Hello, ${name}! Welcome to our website!`;
});
