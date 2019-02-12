import TestController from '../controller/TestController';
import MealsController from '../controller/MealController';

const express = require('express');

const router = express.Router();

/* routers  */
router.get('/home', TestController.getTest);

/* meals route */
// router.get('/meals', MealsController.getAllMeal);
router.post('/meals/:id', MealsController.update);

module.exports = router;
