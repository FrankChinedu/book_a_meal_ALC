// const assert = require('assert');
const chai = require('chai');

// const { expect } = chai.expect;
const should = require('chai').should();
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

describe('Meal', () => {
  describe('/GET Meal', () => {
    it('it should  get all the meals', (done) => {
      chai.request(server)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('array');
          done();
        });
    });
  });
});
