import { model, Schema } from 'mongoose'
import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database'
// import { WindDirection, WindForce } from '../../entities/entities'

export type NewRecord = {
  temperature: number,
  humidity: number,
  pressure: number,
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
  pressure: {
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
  temperature: {
    type: Number,
    allowNull: false
  },
  humidity: {
    type: Number,
    allowNull: false
  },
  pressure: {
    type: Number,
    allowNull: false
  },
  precipitationsPerMinute: {
    type: Number,
    allowNull: false
  },
  acumulatedPrecipitations: {
    type: Number,
    allowNull: false
  },
  WindDirection: {
    type: String
  },
  WindForce: {
    type: String
  },
  windSpeed: {
    type: Number,
    allowNull: false
  },
  height: {
    type: Number,
    allowNull: false
  }
}, {
  timestamps: true
})
// a
export const RecordMongo = model('Record', RecordSchmea)
