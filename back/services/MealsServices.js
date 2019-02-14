import Meals from '../models/Meal';
import { meals } from '../utils/DummyData';

export default class MealsService {
  static fetchAllMeals() {
    // let that = this;
    // This is the data we will have in our database
    const mappedMeals = meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.price = data.price;
      meal.cook_id = data.cook_id;
      meal.currency = data.currency;
      return meal;
    });

    return mappedMeals;
  }

  static getAllMeal() {
    return MealsService.fetchAllMeals();
  }

  static get(id) {
    // -1 because we have our data in an array which starts at 0
    return MealsService.fetchAllMeals()[id - 1];
  }

  static update(params) {
    const { id } = params;
    let meal = MealsService.get(id);
    if (meal) {
      meal = { ...meal, ...params };
      return meal;
    }
    return meal;
  }

  static add(params) {
    let meal = new Meals();
    meal.id = meals.length + 1;
    meal.cook_id = 1;
    meal = { ...meal, ...params };
    meals.push(meal);
    return meal;
  }

  static delete(id) {
    const passedId = parseInt(id, 10);
    return meals.filter((data) => {
      const dataId = parseInt(data.id, 10);
      return dataId !== passedId;
    });
  }
}
