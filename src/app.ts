import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

export function startApp (port: number, routes: express.Router) {
  const app = express()

  app.use(cors())
  app.use(morgan('dev'))
  app.use(helmet())

  app.use(express.json())

  app.use('/api', routes)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}
