// ./components/SocketClient.jsx
import { useEffect } from 'react';
import io from 'socket.io-client';

const SocketClient = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('chat message', function (msg) {
      console.log(msg);
    });

    socket.on('typing', function (user) {
      console.log(user);
    });

    function sendMessage(nickname, message) {
      socket.emit('chat message', { nickname, message });
    }

    const sendButton = document.getElementById('send-button');
    if (sendButton) {
      sendButton.addEventListener('click', function (event) {
        event.preventDefault();

        const nickname = document.getElementById('nickname').value;
        const message = document.getElementById('input').value;

        sendMessage(nickname, message);

        document.getElementById('input').value = '';
      });
    }

    const inputElement = document.getElementById('input');
    if (inputElement) {
      inputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();

          const nickname = document.getElementById('nickname').value;
          const message = document.getElementById('input').value;

          sendMessage(nickname, message);

          document.getElementById('input').value = '';
        }
      });
    }

    // 컴포넌트가 언마운트 될 때 소켓 연결을 종료합니다.
    return () => {
      socket.disconnect();
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
};

export default SocketClient;

