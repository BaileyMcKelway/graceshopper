const Sequelize = require('sequelize')
const db = require('../db')

const Car = db.define('car', {
  Brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Color: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Car
