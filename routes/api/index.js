const router = require('express').Router();
const pizzaRoutes =  require('./pizza-routes');

//add prefix of `/pizzas` to toures created in `pizza-routesjs`
router.use('/pizzas', pizzaRoutes);

module.exports = router;