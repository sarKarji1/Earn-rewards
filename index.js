const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 4300;

app.get('/static', express.static(path.join(__dirname, 'public')));

app.get('/'  (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hadees', (req, res) => {
  res.senFile(path.join(__dirname, 'public', 'hadess.html'));
});

app.listen(port, () => {
console.log('here we go port is', port);
});
