import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'
import { Measurement } from '../measurements/model'

export const Sensor = sequelize.define('sensors', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sensorName: DataTypes.TEXT,
  sensorKey: DataTypes.TEXT
})

export type NewSensor = {
  sensorName: string
  sensorKey: string
  stationId: number
  measurementUnitId: number
}

Sensor.hasMany(Measurement, {
  foreignKey: 'sensorId'
})
