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
      meal.cookId = data.cookId;
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
      meals[id - 1] = meal;
      return meal;
    }
    return meal;
  }

  static add(params) {
    let meal = new Meals();
    meal.id = meals.length + 1;
    meal.cookId = 1;
    meal = { ...meal, ...params };
    meals.push(meal);
    return meal;
  }

  static delete(id) {
    const passedId = parseInt(id, 10);

    const mealId = meals.findIndex(meal => meal.id === passedId);
    // console.log('-----', mealId);
    if (mealId !== -1) {
      meals.splice(mealId, 1);
      return meals;
    }
    return { message: 'not found' };
  }
}
