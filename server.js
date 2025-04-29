const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('User connected');
});

app.get('/donate', (req, res) => {
  const { name, message } = req.query;
  io.emit('donation', { name, message });
  res.send('Donation broadcasted');
});

http.listen(3000, () => console.log('Server running at http://localhost:3000'));