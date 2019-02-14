import OrdersServices from '../services/OrdersServices';

export default class MealsController {
  static getAllOrder(req, res) {
    res.status(200).send(OrdersServices.getAllOrder());
  }

  static update(req, res) {
    const { id } = req.params;
    const data = { ...req.body, id };

    const response = OrdersServices.update(data);

    if (response) {
      res.status(200).send(response);
    }
    res.status(404).end();
  }

  static add(req, res) {
    const data = { ...req.body };
    res.status(200).send(OrdersServices.add(data));
  }

  static delete(req, res) {
    const { id } = req.params;
    res.status(200).send(OrdersServices.delete(id));
  }
}
