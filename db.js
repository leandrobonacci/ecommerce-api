const Sequelize = require('sequelize');

const ModelsProductos = require('./models/productos');
const ModelsCarrito = require('./models/carrito');
const ModelsUsers = require('./models/users');

const sequelize = new Sequelize('kongo', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

const Carrito = ModelsCarrito(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log('tabla 1 sincronizadas');
});
const Users = ModelsUsers(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log('tabla 2 sisncronizadas');
});
const Productos = ModelsProductos(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log('tabla 3 sincronizadas');
});

module.exports = {
  Carrito,
  Productos,
  Users,
};
