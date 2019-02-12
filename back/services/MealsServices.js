import Meals from '../models/Meals';

export default class MealsService {
  fetchAllMeals() {
    // This is the data we will have in our database
    this.meals = [
      {
        id: 1,
        name: 'Jollof Rice',
        price: '500',
        currency: 'NGN',
        cook_id: '1',
      },
      {
        id: 2,
        name: 'Beans and Rice with stew',
        price: '800',
        currency: 'NGN',
        cook_id: '1',
      },
      {
        id: 3,
        name: 'Garri with okoro soup Rice',
        price: '900',
        currency: 'NGN',
        cook_id: '1',
      },
      {
        id: 4,
        name: 'Fried yam and plaintain with chicken',
        price: '600',
        currency: 'NGN',
        cook_id: '1',
      },
    ];

    const meals = this.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.price = data.price;
      meal.cook_id = data.cook_id;
      meal.currency = data.currency;
      return meal;
    });

    return meals;
  }

  getAll() {
    return this.fetchAllMeals();
  }

  get(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }

  update({ id, name, price }) {
    const meal = this.get(id);
    meal.name = name;
    meal.price = price;
    return meal;
  }
}
