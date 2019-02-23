import { Meal } from '../models';
// import { meals } from '../utils/DummyData';

export default class MealsService {
  static async fetchAllMeals(id) {
    // let that = this;
    // This is the data we will have in our database
    const fetchedMeals = [];
    const meals = await Meal.findAll({
      where: {
        cookId: id,
      },
    });
    meals.forEach((meal) => {
      fetchedMeals.push(meal.dataValues);
    });

    return fetchedMeals;
  }

  static async getAllMeal(id) {
    const result = await MealsService.fetchAllMeals(id);
    return result;
  }

  static get(id) {
    // -1 because we have our data in an array which starts at 0
    return MealsService.fetchAllMeals()[id - 1];
  }

  static async update(params) {
    const { id } = params;

    try {
      let meal = await Meal.findById(id);
      meal = await meal.update(params);
      meal = meal.toJSON();
      return meal;
    } catch (err) {
      return { message: 'error occurred' };
    }
  }

  static async add(data) {
    const meal = await Meal.create(data);
    return meal.toJSON();
  }

  static async delete(id) {
    try {
      let meal = await Meal.findById(id);

      if (meal) {
        meal = await meal.destroy();
        meal = meal.toJSON();
        return meal;
      }
      return {};
    } catch (err) {
      return { message: 'error occurred' };
    }
  }
}
