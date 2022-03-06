module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Productos',
      [
        {
          title: 'Remera SONIC',
          price: 300,
          description: 'SOnic the edgedgo',
          talles: 'S,M,L',
          stock: 5,
          brand: 'GONGO',
          imgurl: 'https://i.pinimg.com/originals/d5/f4/cd/d5f4cdf6eb3b5b5ed110994a5f083927.jpg',
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Productos', null, {}),
};
