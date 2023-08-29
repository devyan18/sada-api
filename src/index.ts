import 'dotenv/config'
import { environments } from './config/environments'
import { startApp } from './app'
import { sequelize, connectMongo } from './config/database'

// import './modules/stations/model'
// import './modules/units/model'
// import './modules/sensors/model'
// import './modules/measurements/model'
import './modules/arduino/model'
async function main() {
  startApp(environments.port)
  await connectMongo()
  try {
    await sequelize.sync({ force: true })
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()
