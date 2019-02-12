import MealsServices from '../services/MealsServices';

export default class MealsController {
  static getAllMeal(req, res) {
    res.status(200).send(new MealsServices().getAll());
  }

  static update(req, res) {
    const { id } = req.params;
    const data = { ...req.body, id };

    res.status(200).send(new MealsServices().update(data));
  }
}
