import Meals from '../models/Meals';

export default class MealsService {
  constructor() {
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
  }

  fetchAllMeals() {
    // This is the data we will have in our database
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

  update(params) {
    const { id } = params;
    let meal = this.get(id);
    if (meal) {
      meal = { ...meal, ...params };
      return meal;
    }
    return meal;
  }

  add(params) {
    let meal = new Meals();
    meal.id = this.meals.length + 1;
    meal.cook_id = 1;
    meal = { ...meal, ...params };

    this.meals = [...this.meals, meal];
    return meal;
  }

  delete(id) {
    const passedId = parseInt(id, 10);
    return this.meals.filter((data) => {
      const dataId = parseInt(data.id, 10);
      return dataId !== passedId;
    });
  }
}
