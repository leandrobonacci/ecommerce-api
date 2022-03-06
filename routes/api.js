const router = require('express').Router();
const middlewares = require('./middlewares');
const apiProductosRouter = require('./api/productos');
const apiCarritoRouter = require('./api/carrito');
const apiUsersRouter = require('./api/users');
router.use('/productos', apiProductosRouter);
router.use('/carrito', middlewares.checkToken, apiCarritoRouter);
router.use('/users', apiUsersRouter);
module.exports = router;
