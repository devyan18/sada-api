import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'
import { Sensor } from '../sensors/model'

export const Unit = sequelize.define('units', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: DataTypes.TEXT
})

export type NewUnit = {
  description: string
}

Unit.hasMany(Sensor, {
  foreignKey: 'unitId'
})
