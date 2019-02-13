import TestController from '../controller/TestController';
import MealsController from '../controller/MealController';
import MenuController from '../controller/MenuController';

const express = require('express');

const router = express.Router();

/* routers  */
router.get('/test', TestController.getTest);

/* meals route */
router.get('/meals', MealsController.getAllMeal);
router.put('/meals/:id', MealsController.update);
router.post('/meals', MealsController.add);
router.delete('/meals/:id', MealsController.delete);


/* menu route */
router.get('/menu', MenuController.getMenu);
router.post('/menu', MenuController.setupMenu);
router.delete('/menu/:id', MenuController.delete);

module.exports = router;
