import TestController from '../controller/TestController';

const express = require('express');

const router = express.Router();

/* routers  */
router.get('/home', TestController.getTest);

module.exports = router;
