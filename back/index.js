const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.send({
    message: 'home',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server start at port 5000');
});
