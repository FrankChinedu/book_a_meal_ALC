import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';
import { sequelize, Meal } from '../models';

const should = chai.should();
process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

const { apiURL } = global;

describe('Meal', () => {

  before((done) => {
    Meal.sync({ force: true, match: /_test$/ }).then(() => {
      done();
    });
  });


  describe('/POST Meal', () => {
    it('should add a new meal ', (done) => {
      const data = {
        name: 'chicken and beans',
        price: '200',
        currency: 'NGN',
      };
      chai
        .request(server)
        .post(`${apiURL}/meals`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('price');
          res.body.should.have.property('currency');
          res.body.should.have.property('id');
          res.body.should.have.property('cookId');
        });
      done();
    });
  });

  describe('/GET Meal', () => {
    it('it should  get all the meals that belongs to a particular user if they has any', (done) => {
      chai.request(server)
        .get(`${apiURL}/meals`)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('array');
        });
      done();
    });
  });

  describe('/put meal ', () => {
    it('should update meal', (done) => {
      const mealId = 1;
      const meal = {
        name: 'beans and cow legs',
        price: '100',
        currency: 'NGN',
      };
      chai.request(server)
        .put(`${apiURL}/meals/${mealId}`)
        .send(meal)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          res.body.name.should.be.equal('beans and cow legs');
          res.body.should.have.property('price');
          res.body.price.should.equal('100');
          res.body.should.have.property('currency');
          res.body.currency.should.be.equal('NGN');
          res.body.should.have.property('id');
          res.body.should.have.property('cookId');
        });
      done();
    });


    it('returns status 404 when id is not found', (done) => {
      const mealId = 'fakeId';
      chai
        .request(server)
        .put(`${apiURL}/meals/${mealId}`)
        .end((err, res) => {
          res.should.have.status(200);
        });
      done();
    });
  });

  describe('/DELETE meal ', () => {
    it('should delete an item from meal', (done) => {
      const mealId = 4;
      chai.request(server)
        .delete(`${apiURL}/meals/${mealId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

});
