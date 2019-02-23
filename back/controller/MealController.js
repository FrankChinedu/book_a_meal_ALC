import MealsServices from '../services/MealsServices';

export default class MealsController {
  static async getAllMeal(req, res) {
    // set the id from the middleware after authenticating the user

    const id = 2; // user in db
    res.status(200).send(await MealsServices.getAllMeal(id));
  }

  static async update(req, res) {
    const { id } = req.params;
    const data = { ...req.body, id };
    console.log('test', data);

    const response = await MealsServices.update(data);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(200).end();
    }
  }

  static async add(req, res) {
    const cookId = 2;
    // get authenticated user id which is the cookId TODO
    const data = { ...req.body, cookId };
    res.status(200).send(await MealsServices.add(data));
  }

  static async delete(req, res) {
    const { id } = req.params;
    res.status(200).send(await MealsServices.delete(id));
  }
}
