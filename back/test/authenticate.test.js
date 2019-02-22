import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';
import { sequelize } from '../models';

const should = chai.should();
process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

const { apiURL } = global;

describe.skip('Authcontroller', () => {
  before((done) => {
    sequelize.sync({ force: true, match: /_test$/ })
      .then(() => {
        done();
      });
  });

  // after((done) => {
  //   sequelize
  //     .drop()
  //     .then(() => {
  //       done();
  //     });
  // });

  describe('/POST auth signup', () => {
    it('user should be able to signup ', (done) => {
      const data = {
        fullName: 'food name',
        password: '12345678',
        email: 'food@me.com',
        userRole: 'ADMIN',
      };
      chai
        .request(server)
        .post(`${apiURL}/auth/signup`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('user');
          res.body.should.have.property('user').should.be.a('object');
          res.body.user.should.have.property('id');
          res.body.user.should.have.property('fullName');
          res.body.user.fullName.should.be.equal('food name');
          res.body.user.should.have.property('email');
          res.body.user.email.should.be.equal('food@me.com');
          res.body.should.have.property('token');
          done();
        });
    });

    it('user shouldnot be able to signup credentials already exists', (done) => {
      const data = {
        fullName: 'food name',
        password: '12345678',
        email: 'food@me.com',
        userRole: 'ADMIN',
      };
      chai
        .request(server)
        .post(`${apiURL}/auth/signup`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('/POST auth signin', () => {
    it('user should be able to login to app ', (done) => {
      const data = {
        password: '12345678',
        email: 'food@me.com',
      };
      chai
        .request(server)
        .post(`${apiURL}/auth/signin`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('user');
          res.body.should.have.property('user').should.be.a('object');
          res.body.user.should.have.property('fullName');
          res.body.user.fullName.should.be.equal('food name');
          res.body.user.should.have.property('email');
          res.body.user.email.should.be.equal('food@me.com');
          res.body.should.have.property('token');
          done();
        });
    });

    it('user shouldnot be able to login with wrong credentials', (done) => {
      const data = {
        password: '123456789',
        email: 'food@me.com',
      };
      chai
        .request(server)
        .post(`${apiURL}/auth/signin`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(400);
          should.exist(res.body);
          done();
        });
    });
  });
});
