import TestServices from '../services/TestServices';

export default class TestController {
  static getTest(req, res) {
    res.status(200).send(new TestServices().getTest());
  }
}
