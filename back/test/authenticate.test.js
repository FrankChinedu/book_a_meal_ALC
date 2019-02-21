import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import { sequelize } from '../models';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);

const { apiURL } = global;

describe('Authcontroller', () => {

  // beforeEach((done) => {
  //   sequelize.db.migrate.undo.all().then(() => {
  //     sequelize.migrate().then(() => {
  //       return sequelize.db.seed.all().then(() => {
  //         done();
  //       });
  //     });
  //   });
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
          res.body.user.should.have.property('fullName');
          res.body.user.fullName.should.be.equal('food name');
          res.body.user.should.have.property('email');
          res.body.user.email.should.be.equal('food@me.com');
          done();
        });
    });
  });
});
