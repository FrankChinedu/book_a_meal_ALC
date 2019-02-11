import 'dotenv/config';

const express = require('express');

const app = express();

require("./routes/routes")(app);

app.get('/home', (req, res) => {
  res.send({
    message: 'home',
  });
});

app.listen(process.env.PORT, () => {
  console.log('server start at port 5000');
});
