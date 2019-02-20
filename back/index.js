import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/api';
import { sequelize } from './models';
import RolesServices from './services/RolesServices';
// import morgan from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


const apiURL = '/api/v1';
global.apiURL = apiURL;

app.use(`${apiURL}/`, routes);

if (!module.parent) {
  // sequelize.sync({ force: true })
  //   .then(() => {
  //     RolesServices.initializeRoles();
  //     app.listen(process.env.PORT, () => {
  //       console.log('server start at port 5000');
  //     });
  //   });

  app.listen(process.env.PORT, () => {
    console.log('server start at port 5000');
  });
}

module.exports = app;
