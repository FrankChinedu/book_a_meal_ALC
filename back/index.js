import 'dotenv/config';

const express = require('express');

const app = express();

const routes = require('./routes/api');

app.use('/api/v1/', routes);

app.listen(process.env.PORT, () => {
  console.log('server start at port 5000');
});
