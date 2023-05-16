import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'
import { Sensor } from '../sensors/model'

export const MeasurementUnit = sequelize.define('measurement_units', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: DataTypes.TEXT
})

export type NewMeasurementUnit = {
  description: string
}

MeasurementUnit.hasMany(Sensor, {
  foreignKey: 'measurementUnitId'
})
