import { Sequelize } from 'sequelize'
import { environments } from './environments'
import { connect } from 'mongoose'

const { URL, MONGODB_URI, DB, HOST, PASSWORD, USER } = environments.database

export const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  define: {
    hooks: {
      beforeSync: () => {
        sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      }
    }
  }
})

export const connectMongo = async () => {
  try {
    const mongo = await connect(MONGODB_URI)
    console.log('MongoDB is connected to', mongo.connection.name)
  } catch (error) {
    console.error(error)
  }
}
