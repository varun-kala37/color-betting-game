
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('betting_app', 'root', '0209', {
  host: 'localhost',
  dialect: 'mysql', 
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('All models synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing models:', error);
  });


module.exports = sequelize;
