// server.ts
import { NestFactory, ExpressAdapter } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'socket.io';
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.use('/public', express.static(path.join(__dirname, '../public')));
  await app.init();

  const httpServer = http.createServer(server);
  const io = new Server(httpServer, {
    path: '/socket.io',
  });

  io.on('connection', (socket) => {
    console. log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
      io. emit('chat message', msg);
    });

    socket.on('typing', (user) => {
      io. emit('typing', user);
    });
  });

  httpServer.listen(3000, () => {
    console.log('Application is listening on port 3000');
  });
}

bootstrap();


 




