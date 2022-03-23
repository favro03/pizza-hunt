const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes =  require('./pizza-routes');

router.use('/comments', commentRoutes);
//add prefix of `/pizzas` to toures created in `pizza-routesjs`
router.use('/pizzas', pizzaRoutes);

module.exports = router;