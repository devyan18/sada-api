import { Sequelize } from 'sequelize'
import { environments } from './environments'

const { URL } = environments.database

export const sequelize = new Sequelize(URL, {
  define: {
    hooks: {
      beforeSync: () => {
        sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      }
    }
  }
})
