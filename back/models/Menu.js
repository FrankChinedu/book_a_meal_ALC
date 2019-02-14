export default class Menu {
  constructor() {
    this.id = null;
    this.mealId = null;
    this.time_frame = null; /* ['breakfast', 'lunch', 'dinner']  is to be an enum in the db */
    this.dateForMeal = null;
    this.meal = {};
    this.cookId = null;
  }
}
