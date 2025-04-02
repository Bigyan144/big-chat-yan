function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '977nepal' && password === '123456789') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('chat-page').style.display = 'block';
    } else {
        alert('Invalid credentials!');
    }
}
function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'message user';
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'message user';
        messageElement.textContent = `File shared: ${file.name}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
