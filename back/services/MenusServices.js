import Menus from '../models/Menu';
import Meals from './MealsServices';
import { menus } from '../utils/DummyData';

export default class MenusServices {
  static fetchAllMenus() {
    /* the manu fetched would depend on the time passed when we introduce the database */
    // This is the data we will have in our database
    const meals = Meals.getAllMeal();

    const mappedMenu = menus.map((data) => {
      const menu = new Menus();
      menu.id = data.id;
      menu.mealId = data.mealId;
      menu.dateForMeal = data.dateForMeal;
      menu.time_frame = data.time_frame;
      menu.cook_id = data.cook_id;

      const thisMeal = meals.find(meal => meal.id === parseInt(data.mealId, 10));

      menu.meal = { ...thisMeal };

      return menu;
    });

    return mappedMenu;
  }

  static getMenu() {
    return MenusServices.fetchAllMenus();
  }

  static add(params) {
    let menu = new Menus();
    menu.id = menus.length + 1;
    menu.cook_id = 1;
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
