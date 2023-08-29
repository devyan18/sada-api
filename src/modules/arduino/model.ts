import { model, Schema } from 'mongoose'
import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'
// import { WindDirection, WindForce } from '../../entities/entities'

export type NewRecord = {
  temperature: number,
  humidity: number,
  precipitationsPerMinute: number,
  acumulatedPrecipitations: number,
  // windDirection: WindDirection,
  windDirection: string,
  // windForce: WindForce,
  windForce: string,
  windSpeed: number,
  height: number
}

export const Record = sequelize.define('records', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  humidity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  precipitationsPerMinute: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  acumulatedPrecipitations: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  WindDirection: {
    type: DataTypes.TEXT
  },
  WindForce: {
    type: DataTypes.TEXT
  },
  windSpeed: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})

const RecordSchmea = new Schema({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  humidity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  precipitationsPerMinute: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  acumulatedPrecipitations: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  WindDirection: {
    type: DataTypes.TEXT
  },
  WindForce: {
    type: DataTypes.TEXT
  },
  windSpeed: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true
})

export const RecordMongo = model('Record', RecordSchmea)
