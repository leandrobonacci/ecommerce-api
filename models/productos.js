module.exports = (sequelize, type) => {
  return sequelize.define('Productos', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    price: type.INTEGER,
    description: type.STRING,
    talles: type.STRING,
    stock: type.INTEGER,
    brand: type.STRING,
    imgurl: type.STRING,
  });
};
