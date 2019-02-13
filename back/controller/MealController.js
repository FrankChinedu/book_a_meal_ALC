import MealsServices from '../services/MealsServices';

export default class MealsController {
  static getAllMeal(req, res) {
    res.status(200).send(MealsServices.getAllMeal());
  }

  static update(req, res) {
    const { id } = req.params;
    const data = { ...req.body, id };

    const response = MealsServices.update(data);

    if (response) {
      res.status(200).send(response);
    }
    res.status(404).end();
  }

  static add(req, res) {
    const data = { ...req.body };
    res.status(200).send(MealsServices.add(data));
  }

  static delete(req, res) {
    const { id } = req.params;
    res.status(200).send(MealsServices.delete(id));
  }
}
