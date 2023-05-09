import { Router } from 'express'
import { router as fakeRouter } from './routes/fake.routes'

export const v1 = Router()

v1.use('/fake', fakeRouter)

v1.get('/', (_req, res) => {
  res.send('Hello World')
})
