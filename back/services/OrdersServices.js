import Meals from '../models/Meal';
import Order from '../models/Order';
import { meals, orders, menus } from '../utils/DummyData';

export default class OrdersServices {
  static fetchAllOrder() {
    /* order fetched should be based on a particular user that is userId */
    const mappedOrders = orders.map((data) => {
      const order = new Order();
      order.id = data.id;
      order.userId = data.userId;
      order.menuId = data.menuId;
      order.cookId = data.cookId;
      order.quantity = data.quantity;
      order.size = data.size;
      order.meal = { ...this.getMeal(data.menuId) };
      return order;
    });

    return mappedOrders;
  }

  static getAllOrder() {
    return OrdersServices.fetchAllOrder();
  }

  static get(id) {
    // -1 because we have our data in an array which starts at 0
    return OrdersServices.fetchAllOrder()[id - 1];
  }

  static update(params) {
    const { id } = params;
    let order = OrdersServices.get(id);
    if (order) {
      order = { ...order, ...params };
      return order;
    }
    return order;
  }

  static getMeal(menuId) {
    const menu = menus.find(findmenu => findmenu.id === parseInt(menuId, 10));
    const meal = meals.find(ml => ml.id === parseInt(menu.mealId, 10));
    return meal;
  }

  static add({ userId, menuId, cookId }) {
    const order = new Order();
    order.id = orders.length + 1;
    order.cookId = cookId;
    order.userId = userId;
    order.menuId = menuId;
    order.meal = { ...this.getMeal(menuId) };

    orders.push(order);

    return order;
  }

  static delete(id) {
    const passedId = parseInt(id, 10);
    return orders.filter((data) => {
      const dataId = parseInt(data.id, 10);
      return dataId !== passedId;
    });
  }
}
