import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { Sensor } from '../sensors/model';
import { model, Schema } from 'mongoose';

// Modelo Sequelize
export const Station = sequelize.define('stations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  stationName: DataTypes.TEXT,
  stationLocation: DataTypes.TEXT
});

export type NewStation = {
  stationName: string;
  stationLocation: string;
};

Station.hasMany(Sensor, {
  foreignKey: 'stationId'
});

// Modelo Mongoose
const StationSchema = new Schema({
  stationName: {
    type: String,
    required: true
  },
  stationLocation: {
    type: String,
    required: true
  }
});

export const StationMongo = model('Station', StationSchema);
