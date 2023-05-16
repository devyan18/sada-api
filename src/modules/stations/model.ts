import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'
import { Sensor } from '../sensors/model'

export const Station = sequelize.define('stations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  stationName: DataTypes.TEXT,
  stationLocation: DataTypes.TEXT
})

export type NewStation = {
  stationName: string
  stationLocation: string
}

Station.hasMany(Sensor, {
  foreignKey: 'stationId'
})
