import {io} from 'socket.io-client';
import {User} from './types';

export const createSocket = (user: User) => {
  const ws = io('http://127.0.0.1:3000', {
    extraHeaders: {
      authorization: `Bearer ${user.accessToken}`,
    },
  });
  ws.on('disconnect', () => {
    ws.close();
  });

  return ws;
};
