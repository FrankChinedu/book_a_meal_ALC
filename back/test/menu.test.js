import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';
import { sequelize } from '../models';

const should = chai.should();
process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

const { apiURL } = global;

describe.skip('MENU', () => {
  describe('/GET menu for the day', () => {
    it('it should  get all the menu', (done) => {
      chai
        .request(server)
        .get(`${apiURL}/menu`)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('/DELETE menu ', () => {
    it('should delete an item from menu', (done) => {
      const menuId = 1;
      chai
        .request(server)
        .delete(`${apiURL}/menu/${menuId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST menu', () => {
    it('should add a new menu ', (done) => {
      const data = {
        mealId: 1,
        time_frame: 'lunch',
        dateForMeal: '2019/02/14',
      };
      chai
        .request(server)
        .post(`${apiURL}/menu`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('mealId');
          res.body.should.have.property('time_frame');
          res.body.should.have.property('dateForMeal');
          res.body.should.have.property('cookId');
          res.body.should.have.property('id');
          res.body.should.have.property('meal').should.be.a('object');
          done();
        });
    });
  });
});
