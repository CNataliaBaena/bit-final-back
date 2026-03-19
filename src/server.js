import express from 'express';
import "dotenv/config";
import connectDB from './config/db.js';
import dns from 'node:dns';

if (process.env.NODE_ENV !== 'production') { 
  dns.setServers(['8.8.8.8', '8.8.4.4']); 
}

connectDB();

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

