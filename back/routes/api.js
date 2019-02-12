import TestController from '../controller/TestController';
import MealsController from '../controller/MealController';

const express = require('express');

const router = express.Router();

/* routers  */
router.get('/home', TestController.getTest);

/* meals route */
router.get('/meals', MealsController.getAllMeal);
router.put('/meals/:id', MealsController.update);
router.post('/meals', MealsController.add);
router.delete('/meals/:id', MealsController.delete);

module.exports = router;
