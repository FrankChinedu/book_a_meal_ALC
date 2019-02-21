import Menus from '../models/Menu';
import Meals from './MealsServices';
import { menus } from '../utils/DummyData';

export default class MenusServices {
  static fetchAllMenus(mealDate = '2019-02-14') {
    // mealDate = MenusServices.getTodaysDate(); // should get todays date
    /* the manu fetched would depend on the time passed when we introduce the database */
    // This is the data we will have in our database
    const date = mealDate;

    const mappedMenu = menus.map((data) => {
      const menu = new Menus();
      menu.id = data.id;
      menu.mealId = data.mealId;
      menu.dateForMeal = data.dateForMeal;
      menu.time_frame = data.time_frame;
      menu.cookId = data.cookId;
      menu.meal = { ...this.getMeal(data.mealId) };
      return menu;
    });

    return mappedMenu.filter(meal => meal.dateForMeal === date);
  }

  static getMeal(mealId) {
    const meals = Meals.getAllMeal();
    const meal = meals.find(ml => ml.id === parseInt(mealId, 10));
    return meal;
  }

  static getTodaysDate() {
    const now = new Date();
    const date = now.getDate();

    let month = now.getMonth() + 1;
    month = month < 9 ? `0${month}` : month;

    const year = now.getFullYear();

    const result = `${year}-${month}-${date}`;

    return result;
  }

  static getMenu(date) {
    return this.fetchAllMenus(date);
  }

  static add(params) {
    let menu = new Menus();
    menu.id = menus.length + 1;
    menu.cookId = 1;
    menu = { ...menu, ...params };
    menus.push(menu);
    return menu;
  }

  static delete(id) {
    const passedId = parseInt(id, 10);
    return menus.filter((data) => {
      const dataId = parseInt(data.id, 10);
      return dataId !== passedId;
    });
  }
}
