import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'

export const Measurement = sequelize.define('measurement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  measurementValue: DataTypes.TEXT
})

export type NewMeasurement = {
  measurementValue: string,
  sensorId: number
}
