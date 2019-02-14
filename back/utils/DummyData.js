module.exports = {
  meals: [
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
  ],
  menus: [
    {
      id: 1,
      mealId: 2,
      dateForMeal: '2019-01-12',
      cook_id: 1,
      time_frame: 'breakfast',
      meal: {},
    },
    {
      id: 2,
      mealId: 3,
      dateForMeal: '2019-02-14',
      cook_id: 1,
      time_frame: 'lunch',
      meal: {},
    },
    {
      id: 3,
      mealId: 1,
      dateForMeal: '2019-02-14',
      cook_id: 1,
      time_frame: 'dinner',
      meal: {},
    },
  ],
};
