const {Sequelize} = require('sequelize');
//sqlite
const sequelize  = new Sequelize({
    dialect: 'sqlite',
    storage: './db.development.sqlite'
});
