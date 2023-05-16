import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'

export const Measurement = sequelize.define('measurement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  value: DataTypes.TEXT
})
