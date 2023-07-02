// ./public/client.js
document.addEventListener('DOMContentLoaded', (event) => {
  const socket = io({
    path: '/socket.io',
  });

  socket.on('chat message', function (msg) {
    console.log(msg);
  });

  socket.on('typing', function (user) {
    console.log(user);
  });

  function sendMessage(nickname, message) {
    socket.emit('chat message', { nickname, message });
  }

  document.getElementById('send-button').addEventListener('click', function (event) {
    event.preventDefault();

    const nickname = document.getElementById('nickname').value;
    const message = document.getElementById('input').value;

    sendMessage(nickname, message);

    document.getElementById('input').value = '';
  });

  document.getElementById('input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      const nickname = document.getElementById('nickname').value;
      const message = document.getElementById('input').value;

      sendMessage(nickname, message);

      document.getElementById('input').value = '';
    }
  });
});



