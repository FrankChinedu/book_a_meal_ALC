import TestServices from '../services/TestServices';

module.exports = {
  getTest(req, res) {
    res.status(200).send((new TestServices()).getTest());
  },
};
