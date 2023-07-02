// ./server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');  // <- cors 패키지를 가져옵니다.

const app = express();
app.use(cors());  // <- cors 미들웨어를 사용합니다.

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",  // <- 'origin' 옵션을 'http://localhost:3000'으로 설정합니다.
    methods: ["GET", "POST"],  // <- GET 및 POST 요청만 허용합니다.
  }
});

io.on('connection', (socket) => {
  console.log('A new user has connected.');

  socket.on('chat message', (msg) => {
    console.log('Message:', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected.');
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000.');
});
