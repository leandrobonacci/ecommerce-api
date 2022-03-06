module.exports = (sequelize, type) => {
  return sequelize.define('Carrito', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    precio: type.FLOAT,
    description: type.STRING,
    talles: type.STRING,
    stock: type.STRING,
    marca: type.STRING,
  });
};
