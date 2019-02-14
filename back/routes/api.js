import express from 'express';
import MealsController from '../controller/MealController';
import MenuController from '../controller/MenuController';
import OrderController from '../controller/OrderController';

const router = express.Router();

/* routers  */

/* meals route */
router.get('/meals', MealsController.getAllMeal);
router.put('/meals/:id', MealsController.update);
router.post('/meals', MealsController.add);
router.delete('/meals/:id', MealsController.delete);


/* menu route */
router.get('/menu', MenuController.getMenu);
router.post('/menu', MenuController.setupMenu);
router.delete('/menu/:id', MenuController.delete);

/* order route */

router.get('/order', OrderController.getAllOrder);
router.put('/order/:id', OrderController.update);
router.post('/order', OrderController.add);
router.delete('/order/:id', OrderController.delete);

module.exports = router;
