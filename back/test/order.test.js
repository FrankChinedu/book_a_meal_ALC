import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const should = chai.should();

chai.use(chaiHttp);

const { apiURL } = global;

describe('Test ORDER', () => {
  describe('/GET order', () => {
    it('it should  get all the orders', (done) => {
      chai
        .request(server)
        .get(`${apiURL}/order`)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('/put order ', () => {
    it('should be able to update order', (done) => {
      const orderId = 1;
      const orderInfo = {
        quantity: '2',
        size: 'small',
      };
      chai
        .request(server)
        .put(`${apiURL}/order/${orderId}`)
        .send(orderInfo)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('userId');
          res.body.should.have.property('menuId');
          res.body.should.have.property('quantity');
          res.body.should.have.property('size');
          res.body.should.have.property('id');
          res.body.should.have.property('cookId');
          done();
        });
    });

    it('returns status 404 when id is not found', (done) => {
      const orderId = 'fakeId';
      chai
        .request(server)
        .put(`${apiURL}/order/${orderId}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('/DELETE order ', () => {
    it('should delete an item from order list', (done) => {
      const orderId = 1;
      chai
        .request(server)
        .delete(`${apiURL}/order/${orderId}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/POST order', () => {
    it('should add a new order ', (done) => {
      const data = {
        userId: '1',
        menuId: '3',
        cookId: '1',
      };
      chai
        .request(server)
        .post(`${apiURL}/order`)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          should.exist(res.body);
          res.body.should.be.a('object');
          res.body.should.have.property('userId');
          res.body.should.have.property('menuId');
          res.body.should.have.property('cookId');
          res.body.should.have.property('quantity');
          res.body.should.have.property('size');
          done();
        });
    });
  });
});
