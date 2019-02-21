import MenusServices from '../services/MenusServices';

export default class MenuController {
  static getMenu(req, res) {
    const { date } = req.query;
    res.status(200).send(MenusServices.getMenu(date));
  }

  static setupMenu(req, res) {
    const params = { ...req.body };
    res.status(200).send(MenusServices.add(params));
  }

  static delete(req, res) {
    const { id } = req.params;
    res.status(200).send(MenusServices.delete(id));
  }
}
