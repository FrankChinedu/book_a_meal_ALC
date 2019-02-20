import AuthenticationService from '../services/AuthenticationService';

export default class AuthenticationController {
  static async register(req, res) {
    const data = req.body;

    const response = await AuthenticationService.register(data);
    if (response.registered) {
      res.status(200).send(response);
    } else {
      res.status(400).send({ error: response.error });
    }
  }

  static async login(req, res) {
    const data = req.body;

    const response = await AuthenticationService.login(data);
    // console.log('res control - - ', response);
    res.status(200).send(response);
  }
}
