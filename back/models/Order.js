export default class Order {
  constructor() {
    this.id = null;
    this.userId = null;
    this.menuId = null;
    this.cookId = null;
    this.quantity = 1;
    this.meal = {};
    this.size = 'small';
  }
}
