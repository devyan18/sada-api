import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { v1 as API_V1 } from './api/v1'

export function startApp(port: number) {
  const app = express()

  app.use(cors())
  app.use(morgan('dev'))
  app.use(helmet())

  app.use(express.json())

  app.use('/api', API_V1)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}
