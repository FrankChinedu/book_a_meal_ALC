import 'dotenv/config';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes/api');

app.use('/api/v1/', routes);

app.listen(process.env.PORT, () => {
  console.log('server start at port 5000');
});
